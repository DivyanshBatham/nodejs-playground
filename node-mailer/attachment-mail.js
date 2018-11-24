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
        subject: 'Email with attachment', 
        text: 'Find the attachments below.', 
        html: 'Find the attachments below.',
        attachments: [
            {   // utf-8 string as an attachment
                filename: 'text1.txt',
                content: 'hello world!'
            },
            {   // binary buffer as an attachment
                filename: 'text2.txt',
                content: new Buffer('hello world!','utf-8')
            },
            {   // file on disk as an attachment
                filename: 'text3.txt',
                path: 'attachments/file3.txt' // stream this file
            },
            {   // filename and content type is derived from path
                path: 'attachments/file4.txt'
            },
            {   // stream as an attachment
                filename: 'text4.txt',
                content: fs.createReadStream('attachments/file4.txt')
            },
            {   // define custom content type for the attachment
                filename: 'text.bin',
                content: 'hello world!',
                contentType: 'text/plain'
            },
            {   // use URL as an attachment
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
            {   // encoded string as an attachment
                filename: 'text1.txt',
                content: 'aGVsbG8gd29ybGQh',
                encoding: 'base64'
            },
            {   // data uri as an attachment
                path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            },
            {
                // use pregenerated MIME node
                raw: 'Content-Type: text/plain\r\n' +
                     'Content-Disposition: attachment;\r\n' +
                     '\r\n' +
                     'Hello world!'
            }
        ]
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info);
});