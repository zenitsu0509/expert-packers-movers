"use server";

import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  pickupCity: string;
  dropCity: string;
  pickupAddress?: string;
  deliveryAddress?: string;
  movingDate?: string;
  moveType: string;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Expert Packers & Movers Form" <${process.env.SMTP_USER}>`,
      to: "expertpackersandmover@gmail.com",
      replyTo: data.email,
      subject: `New Relocation Query from ${data.name} (${data.moveType})`,
      text: `
New Relocation Query Details:
-----------------------------
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Move Type: ${data.moveType}
Moving Date: ${data.movingDate || "N/A"}

Route Information:
------------------
Pickup City: ${data.pickupCity}
Drop City: ${data.dropCity}
Pickup Address: ${data.pickupAddress || "N/A"}
Delivery Address: ${data.deliveryAddress || "N/A"}

Additional Message:
-------------------
${data.message || "No message provided."}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #0B3C6D; border-bottom: 2px solid #FF7A00; padding-bottom: 10px;">New Relocation Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; width: 150px;">Full Name:</td>
              <td style="padding: 10px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px;">
                <a href="tel:${data.phone}" style="color: #FF7A00; text-decoration: none; font-weight: bold;">${data.phone}</a>
              </td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px;">
                <a href="mailto:${data.email}" style="color: #0B3C6D; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Type of Move:</td>
              <td style="padding: 10px;"><span style="background-color: #e6ecf3; color: #0B3C6D; padding: 3px 8px; border-radius: 4px; font-size: 0.9em; font-weight: bold;">${data.moveType}</span></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Moving Date:</td>
              <td style="padding: 10px;">${data.movingDate || "Not Specified"}</td>
            </tr>
          </table>

          <h3 style="color: #0B3C6D; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Route Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; width: 150px;">Pickup City:</td>
              <td style="padding: 10px;">${data.pickupCity}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Drop City:</td>
              <td style="padding: 10px;">${data.dropCity}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold;">Pickup Address:</td>
              <td style="padding: 10px;">${data.pickupAddress || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Delivery Address:</td>
              <td style="padding: 10px;">${data.deliveryAddress || "N/A"}</td>
            </tr>
          </table>

          <h3 style="color: #0B3C6D; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Additional Message</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; font-style: italic; white-space: pre-wrap;">
            ${data.message || "No special instructions provided."}
          </div>
          
          <div style="margin-top: 25px; text-align: center; font-size: 0.8em; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the Expert Packers & Movers Website Contact Form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: (error as Error).message || "Unknown error" };
  }
}
