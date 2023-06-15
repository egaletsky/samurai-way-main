import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

import {AppStateType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from '../src/redux/app-reducer';


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {

        this.props.initializeApp()
    }


    render() {

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    {/*<Profile/>*/}
                    <div className="app-wrapper-content">


                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>

                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>

                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/login"
                               render={() => <Login/>}/>


                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App)