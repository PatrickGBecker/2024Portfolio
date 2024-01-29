// import { sendEmail } from '../../lib/sendgrid.js';

// export default async (req, res) => {
//     const { email } = req.body;

//     try {
//         await sendEmail(email, 'Test Email', 'This is a test email from Next.js!');
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }
import axios from 'axios';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (inputs) => {
    try {
        const { data } = await axios.post(`/api/send-email`, inputs);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export default function handler(req,res) {

    console.log('req body', req.body)

    if (req.method === 'POST') {
        const msg = {
            to: process.env.EMAIL, // Change to your recipient
            from: process.env.VERIFIED_EMAIL, // Change to your verified sender
            replyTo: req.body.email,
            subject: `Contact form from ${req.body.name}`,
            text: req.body.message,
        };
        sgMail.send(msg).then(() => {
            console.log('Email sent');
        });
        return res.status(200);
    } else {
        res.status(500).send(error);
    }
    return res.status(404)
}