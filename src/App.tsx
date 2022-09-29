import React from 'react';
import './App.css';


const App = () => {

    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://image.shutterstock.com/image-vector/website-header-banner-design-abstract-600w-1922131178.jpg"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>

            </nav>
            <div className="content">
                <img src ="https://tinypng.com/images/social/website.jpg"/>
                Main content
            </div>
        </div>
    );
}


function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>

    );
}


export default App;
