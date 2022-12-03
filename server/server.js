const express = require('express');
const app = express();
const port = 3005;

const USERS = [
    { id: 1, photoUrl: 'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg', followed: false, name: 'Ilya', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU', followed: false, name: 'Ivan', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
    { id: 3, photoUrl: 'https://st3.depositphotos.com/3047333/12924/i/450/depositphotos_129246006-stock-photo-kitten-sitting-in-flowers.jpg', followed: false, name: 'Polina', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
    { id: 4, photoUrl: 'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png', followed: false, name: 'Roman', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
    { id: 5, photoUrl: 'https://s00.yaplakal.com/pics/pics_original/3/8/3/17089383.jpg', followed: false, name: 'Ecaterina', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 6, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeItey0cApfK70a8XSeeqHxnYuxrponfJ3zJLDH5muENVXnO555XeozTBZn2ELK4iVyY&usqp=CAU', followed: false, name: 'Ilya2', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 7, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb0gh5fFhy1kLHojuqgnPJ1wH-d0aFYkkA&usqp=CAU', followed: false, name: 'Ivan2', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
    { id: 8, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCVFzi8eJ5RTCOBmqmjw9hj6e2GxtiODG3w&usqp=CAU', followed: false, name: 'Polina2', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
    { id: 9, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo350GwUC_TC9xX6zHsZLqPgDDd7anzPbe7gSBkIn8motn5sUd_RDaGGo4KDTTKO2dZco&usqp=CAU', followed: false, name: 'Roman2', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
    { id: 10, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrl5zsKc9BP_l8igUDTWbW46goIi-bZso6Q&usqp=CAU', followed: false, name: 'Ecaterina2', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 11, photoUrl: 'https://s00.yaplakal.com/pics/pics_original/3/8/3/17089383.jpg', followed: false, name: 'Ilya3', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 12, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTb0gh5fFhy1kLHojuqgnPJ1wH-d0aFYkkA&usqp=CAU', followed: false, name: 'Ivan3', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
    { id: 13, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU', followed: false, name: 'Polina3', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
    { id: 14, photoUrl: 'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg', followed: false, name: 'Roman3', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
    { id: 15, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCVFzi8eJ5RTCOBmqmjw9hj6e2GxtiODG3w&usqp=CAU', followed: false, name: 'Ecaterina3', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 16, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1LS_aite3rvsaG5j8nb8n5u9Pnx3W6PQWw&usqp=CAU', followed: false, name: 'Ilya4', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 17, photoUrl: 'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg', followed: false, name: 'Ivan4', status: 'I am a brothers', location: { city: 'Novoelnya', country: 'Belarus' } },
    { id: 18, photoUrl: 'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE', followed: false, name: 'Polina4', status: 'I am a daughter', location: { city: 'Grodno', country: 'Belarus' } },
    { id: 19, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQpy2yAwOa8KlU4nr9B4kxDZbOKfzru8zYw&usqp=CAU', followed: false, name: 'Roman4', status: 'I am a programmer', location: { city: 'Brest', country: 'Belarus' } },
    { id: 20, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33GoCkkC2Pkkd7MQQeNcS5hS9jz06VAhSPQ&usqp=CAU', followed: false, name: 'Ecaterina4', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 21, photoUrl: 'https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE', followed: false, name: 'QQQQQQQQ', status: 'I am a boss2,', location: { city: 'Minsk', country: 'Belarus' } },
]

app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.get('/', (request, response) => {
    response.send('Helloff');
})

app.get('/users/:pageSize', (request, response) => {
    let users = getUsers(request.params.pageSize)
    response.send(users);
})
app.get('/profile/:id', (request, response) => {
    let profile = getProfile(request.params.id)
    response.send(profile);
})
app.post('/follow/:id', (request, response) => {
    USERS[request.params.id-1].followed=true;
    let resaultCode = true;
    response.send(resaultCode);
})
app.delete('/follow/:id', (request, response) => {
    USERS[request.params.id-1].followed=false;
    let resaultCode = true;
    response.send(resaultCode);
})

app.listen(port, () => {
    console.log(`Exampl e app listening on port ${port}`)
})




function getUsers(currentPage) {

    let userAPI = (pageSize, currentPage) => {
        let users = [];
        if (currentPage === 1) {
            users = USERS.slice(0, pageSize)
        }
        else {
            users = USERS.slice(pageSize * currentPage - pageSize, pageSize * currentPage);
        }

        return {
            totalUsersCount: USERS.length,
            users: users,
        }
    }
    return userAPI(5, currentPage);
}

function getProfile(id) {
    return USERS[id - 1];
}