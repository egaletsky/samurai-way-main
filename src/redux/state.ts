export type PostDataType = {
    message: string
    id: number
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDateType = {
    message: string
    id: number
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}
export type profilePageType = {
    posts: PostDataType[]
    newPostText:string

}
export type dialogPageType = {
    messages: MessageDateType[]
    dialogs: DialogsDataType[]
}


export type StoreType ={
    _state:stateType
    getState:()=>stateType
    _onCallSubscriber:()=>void
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
    subscribe:(callback:()=>void)=>void

}




let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'post 1 hi', likesCount: 23},
                {id: 2, message: 'post2 how is your', likesCount: 13},
                {id: 3, message: 'post 3 yo', likesCount: 6},
            ],
            newPostText:'it-kamasutra'
        },
        dialogPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how is your'},
                {id: 3, message: 'yo'},

            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Olga'},
                {id: 6, name: 'Roman'},
                {id: 7, name: 'Taras'},
            ],
        }

    },
    _onCallSubscriber() {
        console.log('state is change')
    },

    getState(){
        return this._state
    },
    subscribe(callback:()=>void){
        this._onCallSubscriber = callback
    },

    addPost() {

        const newPost:PostDataType = {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount:0,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        console.log(this._state);
        this._onCallSubscriber()
    },
    updateNewPostText(newText:string){

        this._state.profilePage.newPostText = newText
        this._onCallSubscriber()
    },

    dispath(action){
        if (action.type === 'ADD-POST'){

            const newPost:PostDataType = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount:0,
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            console.log(this._state);
            this._onCallSubscriber()

        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){

            this._state.profilePage.newPostText = newText
            this._onCallSubscriber()
        }

    }

}




//window.store = store

/*
export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'post 1 hi', likesCount: 23},
            {id: 2, message: 'post2 how is your', likesCount: 13},
            {id: 3, message: 'post 3 yo', likesCount: 6},
        ],
        newPostText:'it-kamasutra'
    },
    dialogPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how is your'},
            {id: 3, message: 'yo'},

        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Olga'},
            {id: 6, name: 'Roman'},
            {id: 7, name: 'Taras'},
        ],
    }

}
let onChange =()=>{
    console.log('state is change')
}
export const subscribe = (callback:()=>void) =>{
    onChange = callback
}
export let addPost = () =>{

    const newPost:PostDataType = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount:0,
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    console.log(state);
    onChange()
}
export let updateNewPostText = (newText:string) =>{
    state.profilePage.newPostText = newText
    onChange()
}
*/

export default store