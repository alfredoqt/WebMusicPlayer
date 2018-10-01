import { combineReducers } from 'redux';
import tracks, * as fromTracks from './tracks';

export default combineReducers({
    tracks,
});

// State selectors
export const getTracks = state =>
    fromTracks.getTracks(state.tracks);
export const isFetchingTracks = state =>
    fromTracks.isFetching(state.tracks);
export const getFetchTracksError = state =>
    fromTracks.getError(state.tracks);
export const getCurrentIndex = state =>
    fromTracks.getCurrentIndex(state.tracks);
export const isPlaying = state =>
    fromTracks.isPlaying(state.tracks);
