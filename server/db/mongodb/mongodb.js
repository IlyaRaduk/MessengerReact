const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        console.log("Подключение установлено");
        // взаимодействие с базой данных
        const db = mongoClient.db("usersDb");
        const users = db.collection("usersCol");
        await users.insertOne({ name: 'Ilya', age: 8 });
        const user = await users.findOne({name:'Ilya'})
        console.log(user);
        // выполняем пинг для проверки подключения
        const result = await db.command({ ping: 1 });
        console.log("Подключение с сервером успешно установлено");
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run().catch(console.log);