const mysql = require('mysql2');
// npm install --save mysql2

// пока тут localhost
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users',
    password: ''
});

connection.connect(function(err) {
    if (err) {
        return console.log('Ошибка' + err.message)
    }
    else {
        console.log('Подключение к серверу MySQL успешно установлено')
    }
});

connection.query('SELECT * FROM users', 
    function(err, results, fields) {
        console.log(err) // если нет ошибки, то выведется null
        console.log(results); // сами данные из записи
        console.log(fields); // метаданные
    });

const newUser = ['Mike Flinch', 36]
// защита от инъекций
const sqlRequest = 'INSERT INTO users(userLogin, userAge) VALUES(?, ?)'

connection.query(sqlRequest, newUser, function(err) {
    if (err) console.log(err);
    else console.log('Данные добавлены')
}); // метод query поместит по порядку данные newUser в запрос sqlRequest

// при выполнении query необязательно вызывать метод connect()
// тк метод query неявно устанавливает связь с базой данных

