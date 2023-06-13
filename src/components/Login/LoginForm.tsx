import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators';
import {formRegDataType} from '../../api/api';
import s from '../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)
export const LoginForm = reduxForm<formRegDataType>({
    form: 'login'
})((props: InjectedFormProps<formRegDataType>) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div><Field typeofform={'input'} placeholder={'email'} name={'email'} component={FormControl}
                            validate={[required, maxLength30]}/></div>
                <div><Field typeofform={'input'} type={'password'} placeholder={'password'} name={'password'}
                            component={FormControl} validate={[required, maxLength30]}/></div>
                <div><Field typeofform={'input'} type={'checkbox'} name={'rememberMe'} component={FormControl}/>remember me
                </div>
                {props.error &&
                  <div className={s.formSummaryError}>
                      {props.error}
                  </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    }
)