import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");
  const phone = formData.get("phone");
  if (!email || typeof email !== "string") {
    throw new Error("Email field is required");
  }

  const msg = {
    to: "contact@fab619.tn",
    from: email,
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission from ${email}. Here are the details:\n\nEmail: ${email}\nPhone: ${phone}`,
    html: `<p>You have a new contact form submission from ${email}. Here are the details:</p><ul><li>Email: ${email}</li><li>Phone: ${phone}</li></ul>`,
  };
  try {
    await sgMail.send(msg);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submission successful.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Contact form submission failed.",
        error: error,
      }),
      { status: 400 }
    );
  }
}
