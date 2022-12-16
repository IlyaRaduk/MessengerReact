const express = require('express');
const app = express();
const port = 3005;
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

(async () => {
    try {
        await mongoClient.connect();
        app.locals.collectionUsers = mongoClient.db("usersDb").collection("users");
        app.locals.collectionAccounts = mongoClient.db("usersDb").collection("accounts");
        app.listen(port, () => {
            console.log(`Exampl e app listening on port ${port}`)
        })
    } catch (err) {
        return console.log(err);
    }
})();

function checkJwt(request) {
    const autorizationHeader = request.headers.authorization;
    if (!autorizationHeader) {
        return false;
    }
    const accessToken = autorizationHeader.split(' ')[1];
    if (!accessToken) {
        return false;
    }
    try {
        const userData = jwt.verify(accessToken, 'SECRET_KEY_JWT');
        return userData;
    }
    catch (e) {
        console.log(e);
    }

}
app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (request, response) => {
    const collection = request.app.locals.collectionUsers;
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
    const userData = checkJwt(request);
    if (!userData) {
        response.sendStatus(401);
    }
    else {
        const collection = request.app.locals.collectionUsers;
        try {
            const users = await collection.find({}).toArray();
            let result = getCurrentPageUsers(request.params.page, users)
            response.send(result);
        }
        catch (err) {
            console.log(err);
            response.sendStatus(500);
        }
    }
})

app.get('/profile', async (request, response) => {
    const userData = checkJwt(request);
    if (!userData) {
        response.sendStatus(401);
    }
    else {
        const collection = request.app.locals.collectionUsers;
        try {
            const user = await collection.findOne({ id: +userData.id });
            response.send(user);
        }
        catch (err) {
            console.log(err);
            response.sendStatus(500);
        }
    }
})

app.get('/profile/:id', async (request, response) => {
    const userData = checkJwt(request);
    if (!userData) {
        response.sendStatus(401);
    }
    else {
        const collection = request.app.locals.collectionUsers;
        try {
            const user = await collection.findOne({ id: +request.params.id });
            response.send(user);
        }
        catch (err) {
            console.log(err);
            response.sendStatus(500);
        }
    }
})

app.post('/follow/:id', async (request, response) => {
    const collection = request.app.locals.collectionUsers;
    try {
        const result = await collection.findOneAndUpdate({ id: +request.params.id }, { $set: { followed: true } });
        response.send(true);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.delete('/follow/:id', async (request, response) => {
    const collection = request.app.locals.collectionUsers;
    try {
        const result = await collection.findOneAndUpdate({ id: +request.params.id }, { $set: { followed: false } });
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
    const collection = request.app.locals.collectionUsers;
    try {
        const result = await collection.findOneAndUpdate({ id: +request.params.id }, { $set: { status: request.body.status } });
        response.send(true);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.get('/statusEdit/:id', async (request, response) => {
    const userData = checkJwt(request);
    if (!userData) {
        response.sendStatus(401);
    }
    else {
        if (+request.params.id === userData.id) {
            response.send(true);
        }
        else {
            response.send(false);
        }

    }
})

app.post('/posts/:id', async (request, response) => {
    const userData = checkJwt(request);
    if (!userData) {
        response.sendStatus(401);
    }
    else {
        const collection = request.app.locals.collectionUsers;
        try {
            let profile = await collection.findOne({ id: +request.params.id });
            let posts = profile.posts;
            posts.push({ name: userData.email, text: request.body.text });
            const result = await collection.findOneAndUpdate({ id: +request.params.id }, { $set: { posts: posts } });
            response.send(posts);
        }
        catch (err) {
            console.log(err);
            response.sendStatus(500);
        }
    }
})

app.post('/registration', async (request, response) => {
    const collectionAccounts = request.app.locals.collectionAccounts;
    const collectionUsers = request.app.locals.collectionUsers;
    try {
        let condidate = await collectionAccounts.findOne({ email: request.body.email });
        if (condidate) {
            response.send(false);
        }
        else {
            let newId = await collectionAccounts.find({}).toArray();
            if (Number(newId.length) === 0) {
                newId = 1;
            }
            else {
                newId = Number(newId.length) + 1;
            }
            const hashPassword = await bcrypt.hash(request.body.password, 10);
            await collectionAccounts.insertOne({ id: newId, email: request.body.email, password: hashPassword, })
            await collectionUsers.insertOne({ id: newId, followed: false, photoUrl: 'https://compania.com.ua/img/usver.png', status: 'Введите статус', email: request.body.email, name: request.body.name, location: { city: request.body.city, country: request.body.country }, posts: [] })
            response.send(true);
        }
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

app.post('/login', async (request, response) => {
    const collectionAccounts = request.app.locals.collectionAccounts;

    try {
        let condidate = await collectionAccounts.findOne({ email: request.body.email });
        if (condidate) {
            const passwordResualt = bcrypt.compareSync(request.body.password, condidate.password);
            if (passwordResualt) {
                const token = jwt.sign({
                    id: condidate.id,
                    email: condidate.email,
                }, 'SECRET_KEY_JWT', { expiresIn: '600s' });
                response.send({ token: `Bearer ${token}` });
            }
            else {
                //неправильный пароль
                response.send(false);
            }
        }
        else {
            //эмейл не существует
            response.send(false);
        }
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