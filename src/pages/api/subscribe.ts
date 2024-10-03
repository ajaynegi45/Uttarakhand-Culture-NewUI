import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body; 

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 587,
        secure: false, 
        auth: {
          user: process.env.SMTP_USER, 
          pass: process.env.SMTP_PASSWORD, 
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER, 
        to: email, 
        subject: 'Welcome to our Uttarakhand Culture Newsletter!',
        text: 'Thank you for subscribing to our Uttarakhand Culture! Stay tuned for updates...',
        html: '<p>Thank you for subscribing to our newsletter! Stay tuned for updates.</p>',
      };

   
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }

  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
