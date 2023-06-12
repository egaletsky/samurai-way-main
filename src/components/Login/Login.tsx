import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/Textarea';
import {required} from '../../utils/validators';

type LoginPropsType = {}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} component={Input} name={'login'}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={Input} name={'password'}
                   validate={[required]}/>
        </div>
        <div>

            <Field type={'checkbox'} component={Input} name={'rememberMe'}/>remember me
        </div>
        <div>
            <button>Login</button>
        </div>


    </form>


}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login