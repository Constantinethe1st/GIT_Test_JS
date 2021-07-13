const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./nodemailer');

const app = express();

const PORT = 3001;
let user = undefined;

app.use(express.static(__dirname + 'css/css.css'))
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/converter', (req, res) => {
   if(!req.body.email || !req.body.sum || !req.body.currency || !req.body.dollarAndEuro) return res.sendStatus(400)
    const message = {
        to: req.body.email,
        subject: 'Hello!',
        text: 'HW!'
    }
})
app.get('/converter', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/converter`))