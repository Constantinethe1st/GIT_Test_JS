
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'test-test2000-test@mail.ru',
            pass: 'Ert45dfg'
        }
},
    {
        from: 'Mailer Test <test-test2000-test@mail.ru>',
    }
    )
const mailer = message =>{
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer; // экспорт функции mailer для использования
// на сервере при регистрации клиента