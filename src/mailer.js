const nodemailer = require('nodemailer')
require("dotenv").config()


const NODE_ENV = process.env.NODE_ENV

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'maphnewkim@gmail.com',
        pass: NODE_ENV
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