import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus?: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [status, setStatus] = useState('')
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        //  debugger
        props.updateStatus && props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.code === 'Enter') deactivateEditMode()
    // }


    return (
        <div>
            {editMode
                ? <input autoFocus onBlur={deactivateEditMode}
                         value={status} onChange={onStatusChange}/>
                : <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
            }
        </div>


    )

}

export default ProfileStatus


// class ProfileStatus extends React.Component<ProfileStatusPropsType> {
//
//
//     state = {
//         status: this.props.status,
//         editMode: false
//     }
//
//     activateEditMode = () => {
//         this.setState({editMode: true})
//     }
//
//     deactivateEditMode = () => {
//         this.setState({editMode: false})
//         // this.props.updateStatus(this.state.status)
//     }
//
//     onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             state: e.currentTarget.value
//         })
//         this.forceUpdate()
//     }
//
//     onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//         if (e.code === 'Enter') this.deactivateEditMode()
//     }
//
//
//     componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
//         if (prevProps.status !== this.props.status) this.setState({status: this.props.status})
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.editMode
//                     ? <input autoFocus={true} onBlur={this.deactivateEditMode}
//                              value={this.state.status || ''} onChange={this.onStatusChange}
//                              onKeyPress={this.onKeyPressHandler}/>
//                     : <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
//                 }
//             </div>
//
//         )
//     }
// }
//
// export default ProfileStatus