import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { formatSeconds } from '../utils/string';
import { FaPlayCircle, FaStepBackward, FaStepForward, FaPauseCircle } from 'react-icons/fa';

// This might not be very reusable, but its easier
import injectSheet from 'react-jss';

import playButton from '../img/play-button.png';
import { setCurrentIndex, togglePlay } from '../actions';

import classNames from 'classnames';
import { getCurrentIndex } from '../reducers';

const styles = {
    trackElement: {
        padding: '0.5rem',
        transition: 'all .2s',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
    activeTrack: {
        color: 'green',
    },
    trackPlay: {
        fontSize: '24px',
        marginRight: '8px',
    },
    trackHeader: {
        display: 'flex',
        alignItems: 'center',
    },
    trackDuration: {
        flex: 1,
        textAlign: 'end',
    },
};

const TrackListItem = ({ track, classes, setCurrentIndex, index, togglePlay, currentIndex }) => (
    <li key={track.id} className={index === currentIndex ? classNames(classes.trackElement, classes.activeTrack) : classes.trackElement}>
        <div className={classes.trackHeader}>
            <FaPlayCircle className={classes.trackPlay}
                onClick={() => { 
                    setCurrentIndex(index);
                    togglePlay();
                }}/>
            <span>{track.name}</span>
            <span className={classes.trackDuration}>{formatSeconds(track.duration)}</span>
        </div>
    </li>
);

TrackListItem.propTypes = {
    track: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default connect(state => ({
    currentIndex: getCurrentIndex(state),
}), { setCurrentIndex, togglePlay })(injectSheet(styles)(TrackListItem));
