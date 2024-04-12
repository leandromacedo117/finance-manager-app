import  mysql from 'mysql'

export const  tableLogin = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'suasenha',
    database:'financedb',
    dialect:'mysql'
});