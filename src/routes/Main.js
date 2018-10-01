/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: The login button will go here, the user will be redirected if the token is there.
 */

import React, { Component, Fragment } from 'react';
import TracksListContainer from '../components/TracksListContainer';
import Footer from '../components/Footer';
import TrackPlayer from '../components/TrackPlayer';
import TrackResumer from '../components/TrackResumer';


class Main extends Component {
    render() {
        return(
            <Fragment>
                <TracksListContainer />
                <Footer />
                <TrackPlayer />
                <TrackResumer />
            </Fragment>
        );
    }
}

export default Main;
