import React from 'react';

import PropTypes from 'prop-types';

const TracksList = ({ tracks }) => (
    tracks.map(el => (
        <div key={el.id}>{el.name}</div>
    ))
);

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
};

export default TracksList;
