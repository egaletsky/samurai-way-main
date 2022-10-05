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
}

export type dialogPageType = {
    messages: MessageDateType[]
    dialogs: DialogsDataType[]
}


export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'post 1 hi', likesCount: 23},
            {id: 2, message: 'post2 how is your', likesCount: 13},
            {id: 3, message: 'post 3 yo', likesCount: 6},
        ]
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

export let addPost = (postMessage:string) =>{
    debugger;
    const newPost:PostDataType = {
        id:5,
        message: postMessage,
        likesCount:0,
    }

    state.profilePage.posts.push(newPost)
    console.log(state);
}