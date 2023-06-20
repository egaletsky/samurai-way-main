import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

import {AppStateType, store} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';


type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {

        this.props.initializeApp()
    }


    render() {

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">

                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>


                </div>

            </div>

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


const AppContainer = connect(mapStateToProps, {initializeApp})(App)
const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp