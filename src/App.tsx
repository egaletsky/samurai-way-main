import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {stateType} from './redux/state';



type AppType = {
    state: stateType
}


export const App = (props:AppType) => {




    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">

                    {/*<Route path ='/profile' component={Profile}/>
                    <Route path ='/dialogs' component={Dialogs}/>*/}
                    <Route path ='/dialogs' render={() => <Dialogs state ={props.state.dialogPage} /> }/>
                    <Route path ='/profile' render={() => <Profile state ={props.state.profilePage} /> }/>


                </div>

            </div>
        </BrowserRouter>
    );
}


