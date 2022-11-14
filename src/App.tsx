import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import store, {ActionsTypes, stateType} from './redux/state';

type AppType = {
    state: stateType
    dispatch: (action: ActionsTypes) => void
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
                        <Dialogs state={props.state.dialogPage}
                                 dispatch={props.dispatch}
                        />}
                    />
                    <Route path="/profile" render={() =>
                        <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}
                        />
                    }/>


                </div>

            </div>
        </BrowserRouter>
    );
}


