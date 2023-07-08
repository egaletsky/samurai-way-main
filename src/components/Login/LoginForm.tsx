import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from 'utils/validators';

import s from '../common/FormsControls/FormsControls.module.css'
import {formRegDataType} from 'api/api';

type PropsType = {
    captchaUrl: string | null
}

const maxLength30 = maxLengthCreator(30)


export const LoginForm = reduxForm<formRegDataType, PropsType>({
    form: 'login'
})(({handleSubmit, error, captchaUrl}: PropsType & InjectedFormProps<formRegDataType, PropsType>) => {
        return <>
            <form onSubmit={handleSubmit}>
                <div><Field typeofform={'input'} placeholder={'email'} name={'email'} component={FormControl}
                            validate={[required, maxLength30]}/></div>
                <div><Field typeofform={'input'} type={'password'} placeholder={'password'} name={'password'}
                            component={FormControl} validate={[required, maxLength30]}/></div>
                <div><Field typeofform={'input'} type={'checkbox'} name={'rememberMe'} component={FormControl}/>remember me
                </div>
                {error && <div>error</div>}
                {captchaUrl && <><img src={captchaUrl} alt="captcha"/>
                  
                  <div><Field typeofform={'input'} placeholder={'symbols from image'} name={'captcha'}
                              component={FormControl}
                              validate={[required]}/></div>
                </>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    }
)