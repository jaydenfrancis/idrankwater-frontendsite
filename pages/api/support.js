// pages/api/support.js
const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    const { email, question } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'jaydencolefrancis@gmail.com',
      from: 'jaydencolefrancis@gmail.com',
      subject: 'New Support Request',
      text: `
        Email: ${email}
        Question: ${question}
      `,
    };
    console.log('Email:', email, 'Question:', question);

    try {
      await sgMail.send(msg);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Support request sent successfully' }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'An error occurred while sending the support request' }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }
};