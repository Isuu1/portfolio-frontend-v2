"use server";

import { ContactFormState } from "../../types/contactForm";
import nodemailer from "nodemailer";

export async function sendContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  console.log("Sending contact form data:", data);

  if (!data.name || !data.email || !data.message) {
    console.error("Missing required fields in contact form data:", data);
    return {
      success: false,
      data,
      error: "Please fill in all required fields.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  // --- Nodemailer Configuration for SendGrid ---
  // Make sure the Gmail config (if present) is commented out or removed
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net", // SendGrid SMTP server
    port: 587, // Port for TLS (recommended)
    secure: false, // false for TLS, true for SSL (port 465)
    auth: {
      user: "apikey", // Use the literal string 'apikey'
      pass: process.env.SENDGRID_API_KEY, // Your SendGrid API Key from .env.local
    },
  });

  const sender = process.env.SENDER_EMAIL; // Your verified sender email
  const recipient = process.env.RECIPIENT_EMAIL; // Your receiving email

  if (!process.env.SENDGRID_API_KEY || !sender || !recipient) {
    console.error("SendGrid configuration missing in .env.local");
    return {
      success: false,
      data,
      error: "Server configuration error. Email service not set up.",
    };
  }

  const mailOptions = {
    from: `"${data.name}" <${sender}>`, // Use the verified sender email
    replyTo: data.email, // User's email
    to: recipient, // Your inbox
    subject: `New Contact Form Submission from ${data.name}`,
    text: `You received a new message from your portfolio contact form:\n\nName: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${data.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully via SendGrid to:", recipient);
    return { success: true, data: data, error: null };
  } catch (error) {
    console.error("Error sending email via SendGrid:", error);

    return {
      success: false,
      data: data,
      error: `Failed to send message: "Unknown server error."}`,
    };
  }
}
