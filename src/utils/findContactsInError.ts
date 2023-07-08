export const findContactsInError = (error: string) => {
    const arr = ['facebook', 'website', 'vk', 'twitter', 'instagram', 'youtube', 'github', 'mainlink']
    for (let i = 0; i < arr.length; i++) {
        if (error.toLowerCase().includes(arr[i])) {
            return arr[i]
        }
    }
}