import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthTC} from '../../redux/auth-reducer';

import {AppStateType} from '../../redux/redux-store';


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.getAuthTC()
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
    getAuthTC: () => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})


export default connect(mapStateToProps, {getAuthTC})(HeaderContainer)