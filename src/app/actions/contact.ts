"use server";

import { formSchema } from "@/src/components/ContactForm";
import nodemailer from "nodemailer";
import * as v from "valibot";

export async function handleContact(values: v.InferOutput<typeof formSchema>) {
  const email = values.email;
  const phone = values.phone;
  const message = values.message;

  if (!phone || !email || !message) {
    return { success: false, error: "All fields are required." };
  }
  return { success: true, email };

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Use your email provider's SMTP server (e.g., smtp.gmail.com, smtp.office365.com)
    port: Number(process.env.SMTP_PORT), // Common SMTP port
    secure: true, // Use TLS (false for 587, true for 465)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Construct the email message
  const mailOptions = {
    from: "contact@khairislama.com", // Your email (sender)
    to: "contact@khairislama.com", // Your email (receiver)
    subject: `New Contact from ${email}`,
    text: `Email: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `
      <p><strong>Email:</strong> ${email}</p><br/>
      <p><strong>Phone:</strong> ${phone}</p><br/>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, email };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
