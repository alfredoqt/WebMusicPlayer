import { normalize } from 'normalizr';
import * as api from '../api';
import * as schema from './schema';
import { to } from '../utils';

const fetchTracksRequest = () => ({
    type: 'FETCH_TRACKS_REQUEST',
});

const fetchTracksSuccess = (response) => ({
    type: 'FETCH_TRACKS_SUCCESS',
    payload: normalize(response, schema.arrayOfTracks), // For faster access
});

const fetchTracksFailure = (error) => ({
    type: 'FETCH_TRACKS_FAILURE',
    payload: error,
});

// 
export const fetchTracks = () => async dispatch => {
    dispatch(fetchTracksRequest());

    // Call the api
    const [error, response] = await to(api.getAllTracks());

    if (error) {
        dispatch(fetchTracksFailure(error));
        return;
    }

    dispatch(fetchTracksSuccess(response));
}
