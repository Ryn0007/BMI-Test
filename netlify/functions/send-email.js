import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, context) => {
    // Only allow POST
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const { firstName, lastName, email, phone, message } = await req.json();
        const toEmail = process.env.email_to;

        if (!process.env.RESEND_API_KEY) {
            return new Response(JSON.stringify({ error: "Missing API Key" }), { status: 500 });
        }

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
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

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error('Email sending error:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
