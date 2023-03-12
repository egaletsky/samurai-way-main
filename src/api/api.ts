import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'fa6b4959-95f5-43c2-8c1d-fec84dae46dd'}

})


export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    follow: (id: number) => {
        return instance.post(`/follow/${id}`)
            .then(res => res.data)
    },

    unfollow: (id: number) => {
        return instance.delete(`/follow/${id}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    }
}