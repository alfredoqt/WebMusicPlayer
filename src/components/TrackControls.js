import React from 'react';
import 'rc-slider/assets/index.css';

import { FaPlayCircle, FaStepBackward, FaStepForward, FaPauseCircle } from 'react-icons/fa';

import injectSheet from 'react-jss';

import ProgressSlider from './ProgressSlider';

import { connect } from 'react-redux';
import { setCurrentIndex, togglePlay } from '../actions';
import { getTracks, getCurrentIndex, isPlaying } from '../reducers';

const styles = {
    trackControls: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
        fontSize: '24px',
    },
};

const Controls = ({
    classes,
    setCurrentIndex,
    currentIndex,
    tracks,
    playing,
    togglePlay,
}) => (
    <div>
        <div className={classes.trackControls}>
            <FaStepBackward onClick={() => {
                setCurrentIndex(currentIndex === 0
                    ? tracks.length - 1 : currentIndex - 1);
            }} />
            <div onClick={() => {togglePlay()}}>
                { playing
                    ?
                    <FaPauseCircle />
                    :
                    <FaPlayCircle />
                }
            </div>
            <FaStepForward onClick={() => {
                setCurrentIndex((currentIndex + 1) % tracks.length);
            }}/>
        </div>
    </div>
);

export default connect(state => ({
    tracks: getTracks(state),
    currentIndex: getCurrentIndex(state),
    playing: isPlaying(state),
}), { setCurrentIndex, togglePlay })(injectSheet(styles)(Controls));
