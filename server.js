import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const toEmail = process.env.email_to;

    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "Missing API Key" });
    }

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Use default testing domain or user's domain
            to: toEmail,
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
