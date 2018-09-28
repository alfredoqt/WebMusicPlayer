import { combineReducers } from 'redux';
import tracks, * as fromTracks from './tracks';

export default combineReducers({
    tracks,
});

// State selectors
export const getTracks = state =>
    fromTracks.getIds(state.tracks)
    .map(id => fromTracks.getById(state.tracks, id));
export const getTrackById = (state, id) =>
    fromTracks.getById(state.tracks, id);
export const isFetchingTracks = state =>
    fromTracks.isFetching(state.tracks);
export const getFetchTracksError = state =>
    fromTracks.getError(state.tracks);
