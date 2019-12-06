const mysql = require('mysql')
const mailer = require('./mailer')


const sendMail = () => {
    const connection = mysql.createConnection({
        host: '192.168.100.225',
        port: 3306,
        user: 'root',
        password: 'its@1234',
        database: 'UYeG_KUMHO'
    })
    connection.connect()

    const query = "SELECT email FROM EmailAddress"

    let results = ''
    connection.query(query, (error, result, fields) => {
        if (error) throw error;
        for (var i = 0; i < result.length; i++) {
            for ( var keyNm in result[i]) {
                results = results + result[i][keyNm] + ',';
            }
        }
        console.log('To: ', results)
        mailer(results)
    })
    
    connection.end()
    
}



module.exports = sendMail