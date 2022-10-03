import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">

                    <Route path ='/profile' component={Profile}/>
                    <Route path ='/dialogs' component={Dialogs}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>

    );
}


export default App;
