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

// METHOD_NAME (case-insensitive): publish, cancel, request, etc. (https://tools.ietf.org/html/rfc5546#section-1.4)

// #1 - Send a PUBLISH event from a file:
// let mailOptions = {
//     from: process.env.G_user,
//     to: [process.env.G_user],
//     subject: 'Email with Calendar Events',
//     text: 'Please see the attached appointment',
//     icalEvent: {
//         filename: 'customname.ics', // default filename is 'invite.ics'
//         method: 'PUBLISH', // default method is PUBLISH
//         path: 'attachments/sample.ics'
//     }
// };

// #2 - Sending a Calendar event from URL:
// icalEvent: {
//     method: 'METHOD_NAME',
//     href: 'https://gist.githubusercontent.com/DeMarko/6142417/raw/1cd301a5917141524b712f92c2e955e86a1add19/sample.ics'
// }

// #3 - Sending a Calendar event from string:
// let content = `BEGIN:VCALENDAR\r\nPRODID:-//ACME/DesktopCalendar//EN\r\nMETHOD:REQUEST\r\n...`;
// icalEvent: {
//     filename: 'invitation.ics',
//     method: 'METHOD_NAME',
//     content: content
// }

// #4 - Generating our own event string with ical:
let myEventContent = ical({
    domain: 'sebbo.net',
    prodId: '//superman-industries.com//ical-generator//EN',
    events: [
        {
            start: moment(),
            end: moment().add(1, 'hour'),
            timestamp: moment(),
            summary: 'My Test Event',  // It's the Event Title
            description: 'description',
            htmlDescription: '<B>HTML Description</B>', // Doesn't seem to work
            organizer: '"John Doe" <johndoe@example.com>', // Doesn't seem to work
            url: 'https://example.com/calendar.ical',  // Doesn't seem to work
            location: `23.2599° N, 77.4126° E`, // Bhopal
        }
    ],
});

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
        content: myEventContent.toString()
    }
};

console.log(myEventContent);

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info);
});