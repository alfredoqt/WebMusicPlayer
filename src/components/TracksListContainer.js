/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: Will make the API request. I might use redux, for now I'll just throw everything in the component's state
 */
import React, { Component, Fragment } from 'react';
import TracksList from './TracksList';
import { connect } from 'react-redux';
import { getTracks, getFetchTracksError, isFetchingTracks } from '../reducers';
import { fetchTracks } from '../actions';

class TracksListContainer extends Component {

    componentDidMount() {
        const { fetchTracks, isFetching } = this.props;
        if (!isFetching) fetchTracks();
    }

    render() {
        const { tracks, isFetching } = this.props;
        if (isFetching) {
            return <div>&nbsp;</div>
        }
        return <TracksList tracks={tracks}/>
    }
}

export default connect(state => ({
    tracks: getTracks(state),
    error: getFetchTracksError(state),
    isFetching: isFetchingTracks(state),
}), { fetchTracks })(TracksListContainer);
