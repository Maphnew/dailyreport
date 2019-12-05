const nodemailer = require('nodemailer')
require("dotenv").config()


const ENV_PASS = process.env.ENV_PASS
const ENV_ID = process.env.ENV_ID

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
    to: 'zcm3118@gmail.com',
    subject: 'NODEMALER TEST!',
    text: 'Hope this get to you',
    html: '<H1>Daily Report</H1>',
    attachments: [
        {
            filename: 'dailyreport.xlsx'
        }
    ]
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error!!!! ', error.message)
    }
    console.log('Email sent: ', info.response)
})