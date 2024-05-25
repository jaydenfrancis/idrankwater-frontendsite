const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, question } = req.body;

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
      res.status(200).json({ message: 'Support request sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while sending the support request' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}