import React from 'react'

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state = {
        status: this.props.status,
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
            </div>

        )
    }
}

export default ProfileStatus