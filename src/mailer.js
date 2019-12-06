const nodemailer = require('nodemailer')
require("dotenv").config()

const ENV_PASS = process.env.ENV_PASS
const ENV_ID = process.env.ENV_ID

const mailer = (emails) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: ENV_ID,
            pass: ENV_PASS
        }
    })
    
    let mailOptions = {
        from: 'maphnewkim@gmail.com',
        to: emails,
        subject: 'NODEMALER TEST!',
        text: 'Hope this get to you',
        html: '<H1>Daily Report</H1>',
        attachments: [
            {
                filename: 'dailyreport.xlsx',
                path: './dailyreport.xlsx',
    
            }
        ]
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error!!!! ', error.message)
        }
        console.log('Email sent: ', info.response)
    })
}

//mailer('jinssakura@gmail.com, zcm3118@gmail.com, ksc@itsroom.com,')

module.exports = mailer