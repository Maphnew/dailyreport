const mysql = require('mysql')
const mailer = require('./mailer')
require("dotenv").config()

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_DATABASE = process.env.DB_DATABASE
const DB_MAIL_ADDRESS_TABLE = process.env.DB_MAIL_ADDRESS_TABLE
const DB_MAIL_ADDRESS_COLUMN = process.env.DB_MAIL_ADDRESS_COLUMN

const sendMail = () => {
    const connection = mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE
    })
    connection.connect()

    const query = "SELECT "+DB_MAIL_ADDRESS_COLUMN+" FROM "+DB_MAIL_ADDRESS_TABLE

    let results = ''
    connection.query(query, (error, result, fields) => {
        if (error) throw error;
        for (var i = 0; i < result.length; i++) {
            for ( var keyNm in result[i]) {
                results = results + result[i][keyNm] + ',';
            }
        }
        // console.log('Email To: ', results)
        mailer(results)
    })
    
    connection.end()
    
}



module.exports = sendMail