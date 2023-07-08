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
                :
                <div>
                    <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
            }
        </div>


    )

}

export default ProfileStatus
