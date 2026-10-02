const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* -----------------------------
   Gmail SMTP Configuration
----------------------------- */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/* -----------------------------
   Test SMTP Connection
----------------------------- */

transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:", error.message);
  } else {
    console.log("SMTP connection ready");
  }
});

/* -----------------------------
   Enquiry API
----------------------------- */

app.post("/api/enquiry", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      grade,
      message,
    } = req.body;

    /* Validate required fields */
    if (!name || !email || !phone || !grade) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required enquiry fields.",
      });
    }

    /* Send enquiry email */
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ENQUIRY_TO,

      replyTo: email,

      subject: `New Admission Enquiry - ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Admission Enquiry</title>
          </head>

          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

            <h2 style="color: #0c2249;">
              New Admission Enquiry
            </h2>

            <hr />

            <p>
              <strong>Parent / Guardian Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Phone Number:</strong>
              ${phone}
            </p>

            <p>
              <strong>Email Address:</strong>
              ${email}
            </p>

            <p>
              <strong>Grade Applying For:</strong>
              ${grade}
            </p>

            ${
              message
                ? `
                  <p>
                    <strong>Message:</strong>
                  </p>

                  <p>
                    ${message}
                  </p>
                `
                : ""
            }

            <hr />

            <p style="font-size: 12px; color: #777;">
              This enquiry was submitted through the school website.
            </p>

          </body>
        </html>
      `,
    });

    console.log(`Enquiry email sent successfully for: ${name}`);

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry. Please try again later.",
    });
  }
});

/* -----------------------------
   Start Server
----------------------------- */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SMTP server running on http://localhost:${PORT}`);
});