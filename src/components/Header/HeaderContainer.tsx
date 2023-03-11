import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AuthStateType, setAuthUserData} from '../../redux/auth-reducer';
import {RouteComponentProps} from 'react-router-dom';
import {userProfileType} from '../../redux/store';
import {AppStateType} from '../../redux/redux-store';
import {getAuth} from '../../api/api';


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
    id: number | null
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)