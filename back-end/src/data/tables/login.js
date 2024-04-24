import mysql from 'mysql';

export const tableLogin = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'financeDb',
    dialect:'mysql'
});




