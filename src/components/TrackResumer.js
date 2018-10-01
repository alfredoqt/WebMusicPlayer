import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { getTracks, getCurrentIndex, isPlaying } from '../reducers';

class TrackResumer extends Component {

    componentDidUpdate() {
        const { playing, tracks, currentIndex } = this.props;
        const track = tracks[currentIndex];
        if (track.howl) {
            if (playing) {
                if (!track.howl.playing()) track.howl.play();
                return;
            }
            track.howl.pause();
        }
    }

    render() {
        return (
            <Fragment />
        );
    }

}

export default connect(state => ({
    playing: isPlaying(state),
    tracks: getTracks(state),
    currentIndex: getCurrentIndex(state),
}))(TrackResumer);