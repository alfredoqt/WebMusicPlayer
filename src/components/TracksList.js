import React from 'react';

import PropTypes from 'prop-types';

// This might not be very reusable, but its easier
import injectSheet from 'react-jss';
import TrackListItem from './TrackListItem';

const styles = {
    trackList: {
        width: '100%',
    },
};

const TracksList = ({ tracks, classes, onPlayClick }) => {
    return <ul className={classes.trackList}>
        {tracks.map(el => (
            <TrackListItem key={el.id} track={el}/>
        ))}
    </ul>
};

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
};

// Wrap it in a higher order component to inject the styles
export default injectSheet(styles)(TracksList);
