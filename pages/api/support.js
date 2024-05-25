export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, question } = req.body;
  
      // Send email with the support request
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIEVER,
        subject: 'New Support Request',
        text: `
          Email: ${email}
          Question: ${question}
        `,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Support request sent successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while sending the support request' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }