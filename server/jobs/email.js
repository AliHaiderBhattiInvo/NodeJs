const mailer = require('nodemailer');
const cron = require('node-cron');

// Creating a transporter
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ali.haider@invozone.com',
        pass: 'yvfvuvjoqktrytdv'
    }
});

function sendEmail(message){
    //sending the email
    transporter.sendMail({
        from: '"Ali" <ali.haider@invozone.com>',
        to: '"Bhatti" <ali.haider6080@gmail.com>',
        subject: 'Testing Scheduled Email',
        text: message
    })
        .then(_ => {console.log("Email sent on " + new Date())})
        .catch(error => {console.log(error)});
}

const scheduleEmail = (req, res) => {
    cron.schedule('*/10 * * * *', sendEmail("Hey there, this email was sent to you automatically"));
    res.send('email sent');
}

module.exports = {
    scheduleEmail
}
