import React, {ComponentType} from 'react'
import {formRegDataType} from '../../api/api'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux'
import {LoginForm} from './LoginForm';
import {login} from '../../redux/auth-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const Login = ({login, isAuth, userId}: LoginPropsType) => {
    const onSubmit = (formData: formRegDataType) => {
        login(formData)
    }
    return isAuth ? <Redirect to={'/profile'}/> : <>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </>
}

type mapStateToPropsType = {
    userId: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (formData: formRegDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {login}),
)(Login)
//export default connect(mapStateToProps, {login})(Login)
