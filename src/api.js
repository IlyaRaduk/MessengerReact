import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.6:3005/',
})
instance.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
})
instance.interceptors.response.use((config) => {
    return config;
}, (error) => {
    if (error.response.status == 401) {

    }
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
    if (id) {
        return instance.get('profile/' + id)
            .then((response) => {
                return (response.data);
            })
    }
    else {
        return instance.get('profile')
            .then((response) => {
                return (response.data);
            })

    }
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

export let registrationNewAccount = (user) => {
    return instance.post('registration', { email: user.email, password: user.password, name: user.name, city: user.city, country: user.country })
        .then((response) => {
            return (response.data)
        })
}

export let login = (user) => {
    return instance.post('login', { email: user.email, password: user.password, })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            return true;
        })
}

export let addPostsAPI = (text, id) => {
    console.log(id);
    return instance.post('posts/'+ id,{text:text})
        .then((response) => {
            return (response.data);
        })

}

export let checkStatusOwnerAPI = (id) => {
    return instance.get('statusEdit/' + id)
        .then((response) => {
            return (response.data)
        })
}
