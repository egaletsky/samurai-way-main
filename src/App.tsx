import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Navbar} from './components/Navbar';
import {Profile} from './components/Profile';


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}




function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>

    );
}


export default App;
