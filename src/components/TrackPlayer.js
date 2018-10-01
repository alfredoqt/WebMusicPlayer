import React, { Component, Fragment } from 'react';
import { Howl } from 'howler';

import { connect } from 'react-redux';
import { getCurrentIndex, getTracks, isPlaying } from '../reducers';
import { getTrackDownloadUrl } from '../api';
import { to } from '../utils';
import { setHowl, setCurrentIndex } from '../actions';

class TrackPlayer extends Component {
    async componentDidUpdate(prevProps) {
        const { currentIndex, playing, tracks, setHowl, setCurrentIndex } = this.props;
        if (prevProps.currentIndex !== currentIndex) {
            if (prevProps.currentIndex != null && tracks[prevProps.currentIndex].howl) {
                tracks[prevProps.currentIndex].howl.stop();
            }

            const track = tracks[currentIndex];
            const [error, response] = await to(
                getTrackDownloadUrl(tracks[currentIndex]),
            );
            if (!track.howl) {
                const howl = new Howl({
                    src: [response],
                });

                howl.on('end', () => {
                    setCurrentIndex((currentIndex + 1) % tracks.length)
                });
                howl.once('load', () => {
                    setHowl({ index: currentIndex, howl });
                });
                return;
            }
            track.howl.on('end', () => {
                setCurrentIndex((currentIndex + 1) % tracks.length)
            });
            
        }
    }

    render() {
        return <Fragment/>;
    }
}

export default connect(state => ({
    currentIndex: getCurrentIndex(state),
    tracks: getTracks(state),
    playing: isPlaying(state),
}), { setHowl, setCurrentIndex })(TrackPlayer);
