/*
Netlify Function: contact.js
Uses SendGrid to send the contact form email.
Set these environment variables on Netlify:
- SENDGRID_API_KEY
- CONTACT_EMAIL (the recipient address)
- FROM_EMAIL (verified sender email; optional)

If you prefer Nodemailer (SMTP), see the commented alternative below.
*/

const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing fields' }) };
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL || CONTACT_EMAIL;

    if (!SENDGRID_API_KEY || !CONTACT_EMAIL) {
      console.error('Missing SendGrid config in env');
      return { statusCode: 500, body: JSON.stringify({ error: 'Email service not configured' }) };
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: CONTACT_EMAIL,
      from: FROM_EMAIL,
      subject: `Website message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
    };

    await sgMail.send(msg);
    console.log('Contact form sent', { name, email });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
}

/* Nodemailer alternative (comment):
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});
await transporter.sendMail({
  from: process.env.FROM_EMAIL,
  to: process.env.CONTACT_EMAIL,
  subject: `Website message from ${name}`,
  text: `From: ${name} <${email}>\n\n${message}`,
});
*/
