const nodemailer = require('nodemailer');
const ical = require('ical-generator'); // 3rd party module for creating calendar events (.ics files)
const moment = require('moment'); // Moment.js for handing Date & Time calculations.

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

const cal = ical({domain: 'github.com', name: 'my first iCal'});

const myEventContent =  cal.createEvent({
    start: moment(),
    end: moment().add(1, 'hour'),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    url: 'http://sebbo.net/'
}).createAlarm({
    type: 'audio',
    trigger: 300, // 5min before event
});

// myEventContent.createAttendee({email: 'hui@example.com', name: 'Hui'});
// myEventContent.createAlarm({
//     type: 'audio',
//     trigger: 300, // 5min before event
// });

// Add multiple events:
// const myEventContent2 =  cal.createEvent({
//     start: moment(),
//     end: moment().add(1, 'hour'),
//     summary: 'Example Event2',
//     description: 'It works ;2)',
//     location: 'my room2',
//     url: 'http://sebbo.net/'
// });

// Repeating Event:
// event.repeating({
//     freq: 'MONTHLY', // required
//     count: 5,
//     interval: 2,
//     until: new Date('Jan 01 2014 00:00:00 UTC'),
//     byDay: ['su', 'mo'], // repeat only sunday and monday
//     byMonth: [1, 2], // repeat only in january und february,
//     byMonthDay: [1, 15], // repeat only on the 1st and 15th
//     bySetPos: 3, // repeat every 3rd sunday (will take the first element of the byDay array)
//     exclude: [new Date('Dec 25 2013 00:00:00 UTC')] // exclude these dates
// });

let mailOptions = {
    from: process.env.G_user,
    to: [process.env.G_user],
    subject: 'Email with Calendar Events',
    text: 'Please see the attached appointment',
    icalEvent: {
        filename: 'customName.ics', // default filename is 'invite.ics'
        method: 'PUBLISH', // default method is PUBLISH
        content: cal.toString()
    }
};

console.log(cal.toString());

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info);
});