import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { formatSeconds } from '../utils/string';

// This might not be very reusable, but its easier
import injectSheet from 'react-jss';

import playButton from '../img/play-button.png';
import { setCurrentTrack } from '../actions';

const styles = {
    trackElement: {
        padding: '0.5rem',
        transition: 'all .2s',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
    trackPlay: {
        width: '24px',
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

const TrackListItem = ({ track, classes, setCurrentTrack }) => (
    <li key={track.id} className={classes.trackElement}>
        <div className={classes.trackHeader}>
            <img
                src={playButton}
                alt="Play"
                className={classes.trackPlay}
                onClick={() => { setCurrentTrack(track) }}
            />
            <span>{track.name}</span>
            <span className={classes.trackDuration}>{formatSeconds(track.duration)}</span>
        </div>
    </li>
);

TrackListItem.propTypes = {
    track: PropTypes.object.isRequired,
};

export default connect(null, { setCurrentTrack })(injectSheet(styles)(TrackListItem));
