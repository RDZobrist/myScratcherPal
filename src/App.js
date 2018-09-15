import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';
import configureStore from './components/configureStore';
// const store = configureStore();

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCXHOrTbCuh2Es3n5MMtkcbeweEGqhPyiU",
            authDomain: "myscratcherpal.firebaseapp.com",
            databaseURL: "https://myscratcherpal.firebaseio.com",
            projectId: "myscratcherpal",
            storageBucket: "",
            messagingSenderId: "451803448686"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = compose(createStore(reducers, {}, applyMiddleware(ReduxThunk)));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
