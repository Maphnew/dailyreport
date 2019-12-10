const nodemailer = require('nodemailer')
const moment = require('moment')
require("dotenv").config()

const MAIL_PASS = process.env.MAIL_PASS
const MAIL_ID = process.env.MAIL_ID
const FILE_NAME = process.env.FILE_NAME

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
    const date = moment().subtract(1, 'days').format('YYYY-MM-DD')
    // console.log("mailer: ",date)
    let mailOptions = {
        from: '아이티공간',
        to: emails,
        subject: date+' 일일리포트',
        html: '<H3>Daily Report</H3>',
        attachments: [
            {
                filename: FILE_NAME,
                path: './'+FILE_NAME,
    
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

module.exports = mailer