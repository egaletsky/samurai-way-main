import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsDataType, MessageDateType, PostDataType} from './index';



type AppType = {
    posts: PostDataType[]
    dialogs: DialogsDataType[]
    messages: MessageDateType[]
}


const App = (props:AppType) => {




    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">

                    {/*<Route path ='/profile' component={Profile}/>
                    <Route path ='/dialogs' component={Dialogs}/>*/}

                    <Route path ='/profile' render={() => <Profile posts ={props.posts} /> }/>
                    <Route path ='/dialogs' render={() => <Dialogs dialogs ={props.dialogs} messages={props.messages}/> }/>

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
