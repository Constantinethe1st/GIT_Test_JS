const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const mailer = require('./nodemailer');

const app = express();

const PORT = 3001;
let user = undefined;

app.use(express.static('public'))

app.use(upload.none());

app.post('/converter', (req, res) => {
	console.log(req.body);
    if(!req.body.email || !req.body.sum || !req.body.currency || !req.body.dollarAndEuro) 
		return res.sendStatus(400)
    const message = {
        to: req.body.email,
        subject: 'Жду ответа, как соловей лета!)',
        html:`
        <h1>Запись на обмен валюты!</h1>
        <ul>
            <li>Рубли: ${req.body.sum}</li>
            <li>Валюта: ${req.body.dollarAndEuro}</li>
        </ul>`
    }
	mailer(message);
});

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/converter.html`))