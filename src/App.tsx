import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

import {store} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


type AppType = {}


export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">


                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>

                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>

                    <Route path="/users"
                           render={() => <UsersContainer/>}/>


                </div>

            </div>
        </BrowserRouter>
    );
}


