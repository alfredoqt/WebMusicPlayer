// I would like some feedback on how to optimize this comparisons
// In a large project this might not be really good
// Also, sorry for hardcoding the types

import { combineReducers } from 'redux';

// Just to give some feedback to the user
const fetching = (state = false, action) => {
    switch (action.type) {
    case 'FETCH_TRACKS_REQUEST':
        return true;
    case 'FETCH_TRACKS_FAILURE':
    case 'FETCH_TRACKS_SUCCESS':
        return false;
    default:
        return state;
    }
}

// Just to give some feedback to the user
const error = (state = null, action) => {
    switch (action.type) {
    case 'FETCH_TRACKS_FAILURE':
        return action.payload;
    case 'FETCH_TRACKS_REQUEST':
    case 'FETCH_TRACKS_SUCCESS':
        return null;
    default:
        return state;
    }
}

const tracks = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_TRACKS_SUCCESS':
        return action.payload;
    case 'SET_HOWL':
        const { index, howl } = action.payload;
        return [
            ...state.slice(0, index),
            {
                ...state[index],
                howl,
            },
            ...state.slice(index + 1),
        ];
    default:
        return state;
    }
}

const currentIndex = (state = null, action) => {
    switch (action.type) {
    case 'FETCH_TRACKS_SUCCESS':
        return action.payload.length ? 0 : null;
    case 'SET_CURRENT_INDEX':
        return action.payload;
    default:
        return state;
    }
}

const playing = (state = false, action) => {
    switch (action.type) {
    case 'TOGGLE_PLAY':
        return !state;
    case 'SET_PLAY':
        return !state;
    default:
        return state;
    }
};

export default combineReducers({
    tracks,
    error,
    fetching,
    currentIndex,
    playing
});

// State selectors
export const getTracks = state => state.tracks;
export const isFetching = state => state.fetching;
export const getError = state => state.error;
export const getCurrentIndex = state => state.currentIndex;
export const isPlaying = state => state.playing;
