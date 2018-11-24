const nodemailer = require('nodemailer');
const fs = require('fs');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 25,
        secure: false, 
        auth: {
            user: process.env.G_user,
            pass: process.env.G_pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // aka. Message Object:
    let mailOptions = {
        from: `User Name <${process.env.G_user}>`, 
        to: 'divyanshbatham@protonmail.com', 
        subject: 'Email with Embedded Image', 
        text: 'Image', 
        html: 'Embedded image 1: <br/> <img src="cid:testImage@nodemailer.com"/> <br/> Embedded image 2: <br/> <img src="cid:testImage2@nodemailer.com"/>',
        attachments: [
            {
                filename: 'testImage.jfif',
                path: 'attachments/test.jfif',
                cid: 'testImage@nodemailer.com'
            },
            {
                filename: '900by300.png',
                path: 'attachments/900-300.png',
                cid: 'testImage2@nodemailer.com'
            }
        ]
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info);
});