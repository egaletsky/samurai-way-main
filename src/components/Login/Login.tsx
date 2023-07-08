import React, {ComponentType} from 'react'
import {formRegDataType} from 'api/api'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {AppStateType} from 'redux/redux-store';
import {connect} from 'react-redux'
import {LoginForm} from './LoginForm';
import {login} from 'redux/auth-reducer';


const Login = ({login, isAuth, userId, captchaUrl}: LoginPropsType) => {
    const onSubmit = (formData: formRegDataType) => {
        login(formData)
    }
    return isAuth ? <Redirect to={'/profile'}/> : <>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </>
}

type mapStateToPropsType = {
    userId: number | null
    isAuth: boolean
    captchaUrl: string | null
}
type mapDispatchToPropsType = {
    login: (formData: formRegDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {login}),
)(Login)
//export default connect(mapStateToProps, {login})(Login)
