
process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('💥 Unhandled Rejection:', err);
});
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use(express.json());

// Email configuration using .env
const emailConfig = {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_PASS
};

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass
  }
});
// Simple subscribers array for testing (replace with DB in production)
const subscribers = [];


// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, number, subject, message } = req.body;

    const validationErrors = [];
    if (!name) validationErrors.push('Name is required');
    if (!email) validationErrors.push('Email is required');
    if (!number) validationErrors.push('Phone number is required');
    if (!subject) validationErrors.push('Subject is required');
    if (!message) validationErrors.push('Message is required');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      validationErrors.push('Invalid email format');
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (number && !phoneRegex.test(number)) {
      validationErrors.push('Phone number must be 10 digits');
    }

    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validationErrors
      });
    }

    const teamMailOptions = {
      from: emailConfig.user,
      to: ['dsclub.cluster@vips.edu', emailConfig.user],
      subject: `[CLUSTER] New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background: linear-gradient(to right, #0ea5e9, #3b82f6); padding: 20px; border-radius: 5px 5px 0 0; margin: -20px -20px 20px -20px;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <p style="color: #666;">A new query has been submitted through the CLUSTER website contact form.</p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 5px;">
            <h3 style="color: #0f172a;">Query Details:</h3>
            <table style="width: 100%;">
              <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>+91 ${number}</td></tr>
              <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
            </table>
          </div>
          <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #0f172a;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; border-top: 1px solid #e0e0e0; font-size: 0.9em; color: #666;">
            <p>This is an automated message from the CLUSTER website contact form.</p>
          </div>
        </div>
      `
    };

    const userMailOptions = {
      from: emailConfig.user,
      to: email,
      subject: 'Thank you for contacting CLUSTER',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background: linear-gradient(to right, #0ea5e9, #3b82f6); padding: 20px; border-radius: 5px 5px 0 0; margin: -20px -20px 20px -20px;">
            <h2 style="color: white; margin: 0;">Thank you for contacting CLUSTER!</h2>
          </div>
          <p style="color: #0f172a;">Dear ${name},</p>
          <p style="color: #0f172a;">We have received your message and appreciate your interest. Our team will get back to you as soon as possible.</p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 5px;">
            <h3>Your Message Details:</h3>
            <table style="width: 100%;">
              <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
              <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
            </table>
          </div>
          <div style="margin-top: 20px; background: #f0f9ff; padding: 15px; border-radius: 5px;">
            <p style="color: #0369a1;">If you have any additional information, you can reply directly to this email.</p>
          </div>
          <div style="margin-top: 20px; border-top: 1px solid #e0e0e0;">
            <p>Best regards,</p>
            <p><strong>The CLUSTER Team</strong></p>
            <p style="font-size: 0.9em;">Vivekananda Institute of Professional Studies</p>
          </div>
        </div>
      `
    };

    try {
      await Promise.all([
        transporter.sendMail(teamMailOptions),
        transporter.sendMail(userMailOptions)
      ]);
    } catch (emailError) {
      console.error('Email error:', emailError);
      return res.status(500).json({
        error: 'Failed to send email',
        details: emailError.message || 'Email service error',
        code: emailError.code || 'UNKNOWN_ERROR'
      });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Server error',
      details: error.message || 'Unexpected error occurred',
      code: error.code || 'UNKNOWN_ERROR'
    });
  }
});
// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  console.log("➡️  Incoming subscribe request:", req.body);
  const { email } = req.body;

  // Basic format check
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  // Check if already subscribed
  const already = subscribers.find(sub => sub.email === email);
  if (already) {
    return res.status(400).json({ message: 'You’re already subscribed!' });
  }

  // Save to array
  const token = Math.random().toString(36).substring(2);
  subscribers.push({ email, token });

  // Send confirmation email
try {
  console.log("Sending email:", email);
  const transporter = nodemailer.createTransport
  await transporter.sendMail({
    to: email,
    from: emailConfig.user,
    subject: 'Thanks for subscribing!',
    html: `
      <p>You’re now subscribed to CLUSTER updates!</p>
      <p><a href="http://localhost:5000/api/unsubscribe?token=${token}">Unsubscribe anytime</a></p>

    `
  });
} catch (error) {
  console.error("SendMail error:", error);
  return res.status(500).json({
    message: 'Failed to send subscription email',
    details: error.message || 'Email send failed'
  });
}


  res.json({ message: 'Thanks for subscribing!' });
});
// Unsubscribe endpoint
app.get('/api/unsubscribe', (req, res) => {
  const { token } = req.query;
  const index = subscribers.findIndex(sub => sub.token === token);

  if (index !== -1) {
    subscribers.splice(index, 1);
    res.send('You have been unsubscribed.');
  } else {
    res.send('Invalid unsubscribe link.');
  }
});



transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter error:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});
