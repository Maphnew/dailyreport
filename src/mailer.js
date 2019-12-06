const nodemailer = require('nodemailer')
require("dotenv").config()

const MAIL_PASS = process.env.MAIL_PASS
const MAIL_ID = process.env.MAIL_ID

const mailer = (emails) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: MAIL_ID,
            pass: MAIL_PASS
        }
    })
    let date = new Date()
    date.setDate(date.getDate() -1)
    
    let mailOptions = {
        from: MAIL_ID,
        to: emails,
        subject: 'NODEMALER TEST!',
        text: 'Hope this get to you',
        html: '<H1>Daily Report</H1>',
        attachments: [
            {
                filename: date.toISOString().slice(0,10)+'_dailyreport.xlsx',
                path: './'+date.toISOString().slice(0,10)+'_dailyreport.xlsx',
    
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