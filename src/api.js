import axios from 'axios';

export let followAPI = (id) => {
    return axios.post('http://192.168.100.3:3005/follow/' + id)
        .then((response) => {
            return (response.data)
        })
}

export let unfollowAPI = (id) => {
    return axios.delete('http://192.168.100.3:3005/follow/' + id)
        .then((response) => {
            return (response.data)
        })
}

export let getUsersAPI = (page) => {
    return axios.get('http://192.168.100.3:3005/users/' + page)
        .then(response => {
            return (response.data);
        })
}

export let getProfileAPI = (id) => {
    return axios.get('http://192.168.100.3:3005/profile/' + id)
        .then((response) => {
            return (response.data);
        })
}