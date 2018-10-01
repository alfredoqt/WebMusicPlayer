import React, { Component } from 'react';

import Slider from 'rc-slider';

import { connect } from 'react-redux';
import { getTracks, getCurrentIndex } from '../reducers';

class ProgressSlider extends Component {
    
    render() {
        const { tracks, currentIndex } = this.props;
        let value = 0;
        if (currentIndex !== null) {
            const track = tracks[currentIndex];
            if (track.howl) console.log(track.howl.seek());
        }
        return (
            <Slider />
        );
    }
}

export default connect(state => ({
    tracks: getTracks(state),
    currentIndex: getCurrentIndex(state),
}))(ProgressSlider);
