const express = require('express');
const app = express();
const port = 3005;
const fs = require('fs');

// const USERS = [
//     { id: 1, photoUrl: 'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg', followed: false, name: 'Ilya', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU', followed: false, name: 'Ivan', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
//     { id: 3, photoUrl: 'https://st3.depositphotos.com/3047333/12924/i/450/depositphotos_129246006-stock-photo-kitten-sitting-in-flowers.jpg', followed: false, name: 'Polina', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
//     { id: 4, photoUrl: 'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png', followed: false, name: 'Roman', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
//     { id: 5, photoUrl: 'https://s00.yaplakal.com/pics/pics_original/3/8/3/17089383.jpg', followed: false, name: 'Ecaterina', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 6, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeItey0cApfK70a8XSeeqHxnYuxrponfJ3zJLDH5muENVXnO555XeozTBZn2ELK4iVyY&usqp=CAU', followed: false, name: 'Ilya2', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 7, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb0gh5fFhy1kLHojuqgnPJ1wH-d0aFYkkA&usqp=CAU', followed: false, name: 'Ivan2', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
//     { id: 8, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCVFzi8eJ5RTCOBmqmjw9hj6e2GxtiODG3w&usqp=CAU', followed: false, name: 'Polina2', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
//     { id: 9, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo350GwUC_TC9xX6zHsZLqPgDDd7anzPbe7gSBkIn8motn5sUd_RDaGGo4KDTTKO2dZco&usqp=CAU', followed: false, name: 'Roman2', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
//     { id: 10, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrl5zsKc9BP_l8igUDTWbW46goIi-bZso6Q&usqp=CAU', followed: false, name: 'Ecaterina2', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 11, photoUrl: 'https://s00.yaplakal.com/pics/pics_original/3/8/3/17089383.jpg', followed: false, name: 'Ilya3', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 12, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb0gh5fFhy1kLHojuqgnPJ1wH-d0aFYkkA&usqp=CAU', followed: false, name: 'Ivan3', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
//     { id: 13, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU', followed: false, name: 'Polina3', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
//     { id: 14, photoUrl: 'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg', followed: false, name: 'Roman3', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
//     { id: 15, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCVFzi8eJ5RTCOBmqmjw9hj6e2GxtiODG3w&usqp=CAU', followed: false, name: 'Ecaterina3', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 16, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1LS_aite3rvsaG5j8nb8n5u9Pnx3W6PQWw&usqp=CAU', followed: false, name: 'Ilya4', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 17, photoUrl: 'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg', followed: false, name: 'Ivan4', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
//     { id: 18, photoUrl: 'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE', followed: false, name: 'Polina4', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
//     { id: 19, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQpy2yAwOa8KlU4nr9B4kxDZbOKfzru8zYw&usqp=CAU', followed: false, name: 'Roman4', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
//     { id: 20, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33GoCkkC2Pkkd7MQQeNcS5hS9jz06VAhSPQ&usqp=CAU', followed: false, name: 'Ecaterina4', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 21, photoUrl: 'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE', followed: false, name: 'QQQQQQQQ', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
// ]


app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.get('/', (request, response) => {
    response.send('Hello');
})

app.get('/users/:page', (request, response) => {
    getUsers(request.params.page).then(res => {
        response.send(res);
    }
    )
})
app.get('/profile/:id', (request, response) => {
    getProfile(request.params.id).then(res => {
        response.send(res);
    }
    )
})
app.post('/follow/:id', (request, response) => {
    follow(request.params.id).then(res => {
        response.send(res);
    }
    )
})
app.delete('/follow/:id', (request, response) => {
    unFollow(request.params.id).then(res => {
        response.send(res);
    }
    )
})

// fetch('http://localhost:3005/status/5',{method:'PUT',
// body:JSON.stringify({status:'METHOD BODY'}),
//  headers:{ 'content-type':'application/json'}})
// .then(res=>res.json())
// .then(json=>console.log(json))


app.put('/status/:id', (request, response) => {
    setStatus(request.params.id, request.body.status).then(res => {
        response.send(res);
    })
})

app.listen(port, () => {
    console.log(`Exampl e app listening on port ${port}`)
})

let getUsersPromise = new Promise((resolve, reject) => {
    fs.readFile('./db/Users.json', (err, data) => {
        let users = JSON.parse(data);
        resolve(users)
    })
});
let setUsersPromise = (data) => {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data)
        fs.writeFile('./db/Users.json', data, (err) => {
            resolve(true);
        });
    });
}


async function getUsers(Page) {
    let userAPI = (pageSize, Page, users) => {
        let usersLength = users.length;
        if (+Page === 1) {
            users = users.slice(0, pageSize)
        }
        else {
            users = users.slice(pageSize * Page - pageSize, pageSize * Page);
        }
        return {
            totalUsersCount: usersLength,
            users: users,
        }
    }
    let users = await getUsersPromise;
    return userAPI(5, Page, users);
}

async function getProfile(id) {
    let profile = await getUsersPromise;
    return profile[id - 1];
}
async function follow(id) {
    let users = await getUsersPromise;
    users[id - 1].followed = true;
    let resault = await setUsersPromise(users);
    return resault;
}
async function unFollow(id) {
    let users = await getUsersPromise;
    users[id - 1].followed = false;
    let resault = await setUsersPromise(users);
    return resault;
}
async function setStatus(id, status) {
    let users = await getUsersPromise;
    users[id - 1].status = status;
    await setUsersPromise(users);
    return true;
}