"use server";

import { formSchema } from "@/src/components/contact/RequestForm";
import nodemailer from "nodemailer";
import * as v from "valibot";

export async function handleContact(values: v.InferOutput<typeof formSchema>) {
  const name = values.name;
  const email = values.email;
  const phone = values.phone;
  const company = values.company;
  const request = values.request;

  if (!name || !phone || !email || !company || !request) {
    return { success: false, error: "All fields are required." };
  }

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
    from: "contact@fab619.tn", // Your email (sender)
    to: "contact@fab619.tn", // Your email (receiver)
    subject: `New Contact from ${email}`,
    text: `Email: ${email}\nName: ${name}\nPhone: ${phone}\nCompany: ${company}\nRequest: ${request}`,
    html: `
      <p><strong>Email:</strong> ${email}</p><br/>
      <p><strong>Name:</strong> ${name}</p><br/>
      <p><strong>Phone:</strong> ${phone}</p><br/>
      <p><strong>Company:</strong> ${company}</p><br/>
      <p><strong>Request:</strong> ${request}</p><br/>
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
