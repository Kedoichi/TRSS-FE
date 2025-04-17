import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

import formidable from "formidable";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const form = new formidable.IncomingForm({ maxFileSize: 25 * 1024 * 1024 });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: "Form parsing error" });

    const { firstName, lastName, email, phone, message } = fields;
    const file = files.resume;

    try {
      const attachment = fs.readFileSync(file.filepath).toString("base64");

      await sgMail.send({
        to: "your@email.com",
        from: "noreply@yourdomain.com",
        subject: "New Contact Form Submission",
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
        attachments: [
          {
            content: attachment,
            filename: file.originalFilename,
            type: file.mimetype,
            disposition: "attachment",
          },
        ],
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ message: "Email send failed" });
    }
  });
}