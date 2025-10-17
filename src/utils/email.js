import sgMail from '@sendgrid/mail';

/**
 * Send contact form email using SendGrid
 * @param {object} formData - The form data from the contact form
 * @returns {Promise<object>} SendGrid response
 */
export const sendContactEmail = async (formData) => {
  const { name, phone, queries, location } = formData;
  
  // Set SendGrid API key (WARNING: This exposes your API key in frontend code)
  sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);
  
  // Create email content
  const msg = {
    to: import.meta.env.VITE_CONTACT_EMAIL_TO || import.meta.env.VITE_CONTACT_EMAIL,
    from: import.meta.env.VITE_CONTACT_EMAIL, // Must be a verified sender in SendGrid
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Queries:</strong> ${queries || 'None provided'}</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          This message was sent from the contact form on your website.
        </p>
      </div>
    `,
  };
  
  try {
    // Send email via SendGrid
    const response = await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid');
    return response;
  } catch (error) {
    console.error('Error sending email via SendGrid:', error);
    if (error.response) {
      console.error('SendGrid API Response Error:', error.response.body);
    }
    throw error;
  }
};