const nodemailer = require('nodemailer');

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

    let mailOptions = {
        from: `User Name <${process.env.G_user}>`, 
        to: `${process.env.P_user}, ${process.env.G_user}`, 
        subject: 'Subject of Email', 
        text: 'Hello world?', 
        html: '<b>Hello world?</b> <ul><li>Item</li></ul>' 
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info);
});