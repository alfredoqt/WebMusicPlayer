/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: Talks to any enpoints. I put all the keys and secret stuff here since it is not commercial.
 */

import { firestore, storage } from 'firebase';
import { to } from '../utils';


export const getAllTracks = async () => {
    const db = firestore();
    const [error, response] = await to(db.collection('tracks').get());
    if (error) {
        throw new Error(error);
    }

    // So the query snapshot does not have a map method...
    let tracks = [];
    response.forEach(doc => {
        tracks.push({ id: doc.id, ...doc.data() });
    });

    return tracks;
};

export const getTrackDownloadUrl = async (track) => {
    const storageRef = storage().ref();

    const [error, response] = await to(storageRef.child(track.track).getDownloadURL());

    if (error) {
        throw new Error(error);
    }

    return response;
};

