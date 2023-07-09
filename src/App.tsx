import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom';

import {AppStateType, store} from './redux/redux-store';


import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Preloader} from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {

    catchAllUnhandledErrors = (error: PromiseRejectionEvent) => {
        alert(error)
        console.error(error)
    }

    componentDidMount() {

        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                {/*<Profile/>*/}
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs"
                               render={() => <Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'*'} render={() => <div>404 PAGE NOT FOUND</div>}/>
                    </Switch>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainApp