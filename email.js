const nodemailer = require('nodemailer');
const ejs = require('ejs');

const transport = nodemailer.createTransport({
  host: 'box.neutronlabs.tech',
  port: '465',
  auth: {
    user: 'wasif.ali@diffuso.tech',
    pass: '1234567890'
  }
});

const sendEmail = (receiver, subject, content) => {
  ejs.renderFile(__dirname + '/templates/welcome.ejs', { receiver, content }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var mailOptions = {
        from: 'wasif.ali@diffuso.tech',
        to: receiver,
        subject: subject,
        html: data
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
    }
  });
};

module.exports = {
  sendEmail
};
