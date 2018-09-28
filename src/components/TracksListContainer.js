/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: Will make the API request. I might use redux, for now I'll just throw everything in the component's state
 */
import React, { Component } from 'react';
import { to } from '../utils';
import { getAllTracks } from '../api';
import TracksList from './TracksList';

class TracksListContainer extends Component {
    state = {
        tracks: [],
    }

    async componentDidMount() {
        // TODO: Move all the logic to action creators
        const [error, tracks] = await to(getAllTracks());
        if (!error) {
            this.setState({ tracks });
        }
    }

    render() {
        const { tracks } = this.state;
        return <TracksList tracks={tracks} />
    }
}

export default TracksListContainer;
