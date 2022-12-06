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
        const user = await users.find().toArray();
        console.log(user);
        // выполняем пинг для проверки подключения
        console.log("Подключение с сервером успешно установлено");
    } catch (err) {
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run().catch(console.log);