import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.100.3:3005/',
})

export let followAPI = (id) => {
    return instance.post('follow/' + id)
        .then((response) => {
            return (response.data)
        })
}

export let unfollowAPI = (id) => {
    return instance.delete('follow/' + id)
        .then((response) => {
            return (response.data)
        })
}

export let getUsersAPI = (page) => {
    return instance.get('users/' + page)
        .then(response => {
            return (response.data);
        })
}

export let getProfileAPI = (id) => {
    return instance.get('profile/' + id)
        .then((response) => {
            return (response.data);
        })
}
export let setStatusAPI = (id, status) => {
    return instance.put('status/' + id, { status: status, })
        .then((response) => {
            return (response.data)
        })
}

// export let setStatusAPI = (id, status) => {
//     return fetch('http://192.168.100.3:3005/status/'+id,{method:'PUT',body:JSON.stringify({status:status}), headers:{ 'content-type':'application/json'}})
//     .then(res=>res)
// }
