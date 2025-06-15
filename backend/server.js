const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration - Replace these with your actual Gmail credentials
const emailConfig = {
  user: '',     // Replace with your Gmail address
  pass: ''         // Replace with your App Password
};

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, number, subject, message } = req.body;

    // Validate input with specific error messages
    const validationErrors = [];
    if (!name) validationErrors.push('Name is required');
    if (!email) validationErrors.push('Email is required');
    if (!number) validationErrors.push('Phone number is required');
    if (!subject) validationErrors.push('Subject is required');
    if (!message) validationErrors.push('Message is required');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      validationErrors.push('Invalid email format');
    }

    // Validate phone number format (10 digits)
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

    // Team notification email
    const teamMailOptions = {
      from: emailConfig.user,
      to: ['dsclub.cluster@vips.edu', 'utsavsinghal26@gmail.com'],
      subject: `[CLUSTER] New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background: linear-gradient(to right, #0ea5e9, #3b82f6); padding: 20px; border-radius: 5px 5px 0 0; margin: -20px -20px 20px -20px;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="color: #666; margin: 0;">A new query has been submitted through the CLUSTER website contact form.</p>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #0f172a; margin-top: 0;">Query Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; color: #475569;"><strong>Name:</strong></td>
                <td style="padding: 8px; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #475569;"><strong>Email:</strong></td>
                <td style="padding: 8px; color: #0f172a;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #475569;"><strong>Phone:</strong></td>
                <td style="padding: 8px; color: #0f172a;">+91 ${number}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #475569;"><strong>Subject:</strong></td>
                <td style="padding: 8px; color: #0f172a;">${subject}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 5px;">
            <h3 style="color: #0f172a; margin-top: 0;">Message:</h3>
            <p style="color: #0f172a; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 0.9em;">
            <p style="margin: 0;">This is an automated message from the CLUSTER website contact form.</p>
          </div>
        </div>
      `
    };

    // User confirmation email
    const userMailOptions = {
      from: emailConfig.user,
      to: email,
      subject: 'Thank you for contacting CLUSTER',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="background: linear-gradient(to right, #0ea5e9, #3b82f6); padding: 20px; border-radius: 5px 5px 0 0; margin: -20px -20px 20px -20px;">
            <h2 style="color: white; margin: 0;">Thank you for contacting CLUSTER!</h2>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="color: #0f172a;">Dear ${name},</p>
            <p style="color: #0f172a;">We have received your message and would like to thank you for writing to us. Our team will review your query and get back to you as soon as possible.</p>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #0f172a; margin-top: 0;">Your Message Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; color: #475569;"><strong>Subject:</strong></td>
                <td style="padding: 8px; color: #0f172a;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #475569;"><strong>Message:</strong></td>
                <td style="padding: 8px; color: #0f172a;">${message}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 5px; border: 1px solid #bae6fd;">
            <p style="color: #0369a1; margin: 0;">If you have any additional information to add to your query, please reply to this email.</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #0f172a; margin: 0;">Best regards,</p>
            <p style="color: #0f172a; margin: 0;"><strong>The CLUSTER Team</strong></p>
            <p style="color: #475569; margin: 5px 0 0 0; font-size: 0.9em;">Vivekananda Institute of Professional Studies</p>
          </div>
        </div>
      `
    };

    // Send both emails with better error handling
    try {
      await Promise.all([
        transporter.sendMail(teamMailOptions),
        transporter.sendMail(userMailOptions)
      ]);
    } catch (emailError) {
      console.error('Detailed email error:', emailError);
      return res.status(500).json({
        error: 'Failed to send email',
        details: emailError.message || 'Email service error occurred',
        code: emailError.code || 'UNKNOWN_ERROR'
      });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message || 'An unexpected error occurred',
      code: error.code || 'UNKNOWN_ERROR'
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 