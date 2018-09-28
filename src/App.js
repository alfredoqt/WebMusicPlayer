import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';

import Main from './routes/Main';

import * as firebase from './utils/firebase';

firebase.init();


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={configureStore()}>
                    <Route path="/" component={Main}/>
                </Provider>
            </BrowserRouter>
        );
  }
}

export default App;
