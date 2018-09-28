import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Main from './routes/Main';

import * as firebase from './utils/firebase';

firebase.init();

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Main}/>
            </BrowserRouter>
        );
  }
}

export default App;
