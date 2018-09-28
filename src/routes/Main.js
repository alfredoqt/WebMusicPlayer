/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: The login button will go here, the user will be redirected if the token is there.
 */

import React, { Component, Fragment } from 'react';
import TracksListContainer from '../components/TracksListContainer';
import Footer from '../components/Footer';


class Main extends Component {
    render() {
        return(
            <Fragment>
                <TracksListContainer />
                <Footer />
            </Fragment>
        );
    }
}

export default Main;
