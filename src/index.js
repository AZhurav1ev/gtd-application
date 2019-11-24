import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import firebase from './config/fbConfig'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

const unsubscribe = firebase.auth().onAuthStateChanged(() => {
    ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>,
        document.getElementById('root')
    );
    serviceWorker.unregister();
    unsubscribe()
})