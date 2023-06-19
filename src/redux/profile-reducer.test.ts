import {addPostAC, deletePostAC, profilePageType, profileReducer} from './profile-reducer';
import {v1} from 'uuid';

let startState: profilePageType


beforeEach(() => {
    startState = {
        posts: [
            {id: '1', date: '111111', message: 'post 1 hi', likeCount: 23},
            {id: '2', date: '111111', message: 'post2 how is your', likeCount: 13},
            {id: '3', date: '111111', message: 'post 3 yo', likeCount: 6},
        ],
        profile: null,
        status: ''
    }

})


test('new post should be added', () => {
//1. test data
    let action = addPostAC('new post text')

//2. action
    const newState = profileReducer(startState, action)
//3.expectation
    expect(newState.posts.length).toBe(4)
    //expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

test('delete post', () => {
//1. test data
    let action = deletePostAC('1')

//2. action
    const newState = profileReducer(startState, action)
//3.expectation
    expect(newState.posts.length).toBe(2)
    //expect(newState.posts[4].message).toBe('it-kamasutra.com')
})