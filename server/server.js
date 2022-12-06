const express = require('express');
const app = express();
const port = 3005;
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

(async () => {
    try {
        await mongoClient.connect();
        app.locals.collection = mongoClient.db("usersDb").collection("usersCol");
        app.listen(port, () => {
            console.log(`Exampl e app listening on port ${port}`)
        })
    } catch (err) {
        return console.log(err);
    }
})();

app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.get('/', async (request, response) => {
    const collection = request.app.locals.collection;
    try {
        const users = await collection.find({}).toArray();
        response.send(users);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.get('/users/:page', async (request, response) => {
    const collection = request.app.locals.collection;
    try {
        const users = await collection.find({}).toArray();
        let result = getCurrentPageUsers(request.params.page, users)
        response.send(result);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.get('/profile/:id', async (request, response) => {
    const collection = request.app.locals.collection;
    try {
        const user = await collection.findOne({id:+request.params.id});
        response.send(user);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.post('/follow/:id', async (request, response) => {
    const collection = request.app.locals.collection;
    try {
        const result = await collection.findOneAndUpdate({id:+request.params.id},{ $set: {followed: true}});
        response.send(true);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.delete('/follow/:id', async (request, response) => {
    const collection = request.app.locals.collection;
    try {
        const result = await collection.findOneAndUpdate({id:+request.params.id},{ $set: {followed: false}});
        response.send(true);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

// fetch('http://localhost:3005/status/5',{method:'PUT',
// body:JSON.stringify({status:'METHOD BODY'}),
//  headers:{ 'content-type':'application/json'}})
// .then(res=>res.json())
// .then(json=>console.log(json))
app.put('/status/:id', async (request, response) => {
    const collection = request.app.locals.collection;
    try {
        const result = await collection.findOneAndUpdate({id:+request.params.id},{ $set: {status: request.body.status}});
        response.send(true);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})


function getCurrentPageUsers(page, users) {
    let userAPI = (pageSize, page, users) => {
        let usersLength = users.length;
        if (+page === 1) {
            users = users.slice(0, pageSize)
        }
        else {
            users = users.slice(pageSize * page - pageSize, pageSize * page);
        }
        return {
            totalUsersCount: usersLength,
            users: users,
        }
    }
    return userAPI(5, page, users);
}

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async () => {

    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});