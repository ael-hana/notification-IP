const url = `http://ipecho.net/plain`;
var fetch = require('node-fetch');
let ip = '';
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mail',
      pass: 'password'
    }
  });
setInterval(async () => {
    fetch(url)
    .then(e => e.text())
    .then(e => {
        if (ip != e) {
            ip = e;
            console.log(`good ${ip}`);
            transporter.sendMail({
                from: 'elhanani.anasse@gmail.com',
                to: 'anassecastel82@hotmail.fr',
                subject: 'Mon ip',
                text: 'La raspberry à cette IP : ' + ip,
            }, function(error, info) {
                if (error) {
                  console.error(error);
                  process.exit(-1);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
    })
}, 10000)
