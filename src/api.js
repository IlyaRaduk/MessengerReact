import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.6:3005/',
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
})

export let followAPI = async (id) => {
    const response = await instance.post('follow/' + id);
    return (response.data);
}

export let unfollowAPI = async (id) => {
    const response = await instance.delete('follow/' + id);
    return (response.data);
}

export let getUsersAPI = async (page) => {
    const response = await instance.get('users/' + page);
    return (response.data);
}

export let getProfileAPI = async (id) => {
    if (id) {
        const response = await instance.get('profile/' + id);
        return (response.data);
    }
    else {
        const response = await instance.get('profile');
        return (response.data);
    }
}

export let setStatusAPI = async (id, status) => {
    const response = await instance.put('status/' + id, { status: status, });
    return (response.data);
}

export let registrationNewAccount = async (user) => {
    const response = await instance.post('registration', {
        email: user.email, password: user.password,
        name: user.name, city: user.city, country: user.country
    });
    return (response.data);
}

export let login = async (user) => {
    const response = await instance.post('login', { email: user.email, password: user.password, });
    localStorage.setItem('token', response.data.token);
    return true;
}

export let addPostsAPI = async (text, id) => {
    const response = await instance.post('posts/' + id, { text: text });
    return (response.data);
}

export let checkStatusOwnerAPI = async (id) => {
    const response = await instance.get('statusEdit/' + id);
    return (response.data);
}
