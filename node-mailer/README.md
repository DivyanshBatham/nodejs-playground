# Some Keywords:
+ Email Client - In Internet, an email client, email reader or more formally mail user agent (MUA) is a computer program in the category of groupware environments used to access and manage a user's email.\
Examples: MS Outlook, Mozilla Thunderbolt, etc.

+ Email Server - Gmail, Yahoo, Protonmail, etc.

+ SMTP - Simple Mail Transfer Protocol (SMTP) is the standard protocol for sending emails across the Internet.\
By default, the SMTP protocol works on three ports:
  + Port 25 - this is the default SMTP non-encrypted port
  + Port 2525 - this port is opened on all SiteGround servers in case port 25 is filtered (by your ISP for example) and you want to send non-encrypted emails with SMTP
  + Port 465 - this is the port used if you want to send messages using SMTP securely

+ POP - Post Office Protocol version 3 (POP3) is a standard mail protocol used to receive emails from a remote server to a local email client. POP3 allows you to download email messages on your local computer and read them even when you are offline. Note, that when you use POP3 to connect to your email account, messages are downloaded locally and removed from the email server. This means that if you access your account from multiple locations, that may not be the best option for you. On the other hand, if you use POP3, your messages are stored on your local computer, which reduces the space your email account uses on your web server.\
By default, the POP3 protocol works on two ports:

  + Port 110 - this is the default POP3 non-encrypted port
  + Port 995 - this is the port you need to use if you want to connect using POP3 securely

+ IMAP - The Internet Message Access Protocol (IMAP) is a mail protocol used for accessing email on a remote web server from a local client. IMAP and POP3 are the two most commonly used Internet mail protocols for retrieving emails. Both protocols are supported by all modern email clients and web servers.\
While the POP3 protocol assumes that your email is being accessed only from one application, IMAP allows simultaneous access by multiple clients. This is why IMAP is more suitable for you if you're going to access your email from different locations or if your messages are managed by multiple users.\
By default, the IMAP protocol works on two ports:
  + Port 143 - this is the default IMAP non-encrypted port
  + Port 993 - this is the port you need to use if you want to connect using IMAP securely



> *For using Gmail as SMTP server enable access for less secure apps - https://myaccount.google.com/lesssecureapps?pli=1*
