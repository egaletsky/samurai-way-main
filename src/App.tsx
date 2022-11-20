import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, stateType} from './redux/store';

import store from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppType = {
    store: typeof store
}


export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">


                    <Route path="/dialogs" render={() =>
                        <DialogsContainer store={store}
                        />}
                    />
                    <Route path="/profile" render={() =>
                        <Profile store={store}
                        />
                    }/>


                </div>

            </div>
        </BrowserRouter>
    );
}


