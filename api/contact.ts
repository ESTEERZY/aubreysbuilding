import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const BUDGET_MAP: Record<string, string> = {
  'under_50k': 'Under $50,000',
  '50k_150k': '$50,000 – $150,000',
  '150k_350k': '$150,000 – $350,000',
  'over_350k': '$350,000+',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, budget, message } = req.body || {};

    // Validate fields
    if (!name || !email || !budget || !message) {
      return res.status(400).json({ error: 'All fields (name, email, budget, message) are required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured on the server.');
      return res.status(500).json({ error: 'Email service configuration error.' });
    }

    const resend = new Resend(apiKey);
    const friendlyBudget = BUDGET_MAP[budget] || budget;

    // SECURITY REQUIREMENT: Immediately redirect all submissions to elijahsteers02@gmail.com.
    // Do not send any data to jacob@aubreysbuilding.com.au until explicitly confirmed.
    const senderEmail = 'noreply@aubreysbuilding.com.au';
    const recipientEmail = 'elijahsteers02@gmail.com';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Consultation Request</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #121212; color: #e5e5e5; padding: 30px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1e1e1e; border: 1px solid #BAA892; padding: 40px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
          <div style="border-bottom: 1px solid #2d2d2d; padding-bottom: 20px; margin-bottom: 25px;">
            <h2 style="color: #BAA892; margin: 0 0 10px 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">New Consultation Request</h2>
            <p style="color: #a3a3a3; margin: 0; font-size: 14px;">A new project inquiry has been submitted via the website form.</p>
          </div>
          
          <div style="margin-top: 30px;">
            <div style="margin-bottom: 25px;">
              <strong style="color: #BAA892; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Full Name</strong>
              <span style="font-size: 16px; color: #ffffff; font-weight: 500;">${name}</span>
            </div>
            
            <div style="margin-bottom: 25px;">
              <strong style="color: #BAA892; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Email Address</strong>
              <span style="font-size: 16px;"><a href="mailto:${email}" style="color: #ffffff; text-decoration: underline; font-weight: 500;">${email}</a></span>
            </div>
            
            <div style="margin-bottom: 25px;">
              <strong style="color: #BAA892; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Estimated Budget</strong>
              <span style="font-size: 16px; color: #ffffff; font-weight: 500;">${friendlyBudget}</span>
            </div>
            
            <div style="margin-bottom: 25px;">
              <strong style="color: #BAA892; display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Project Vision</strong>
              <div style="font-size: 15px; color: #d4d4d4; white-space: pre-wrap; background-color: #262626; border-left: 3px solid #BAA892; padding: 20px; border-radius: 2px; margin-top: 8px; line-height: 1.6; font-family: inherit;">${message}</div>
            </div>
          </div>
          
          <div style="margin-top: 40px; border-top: 1px solid #2d2d2d; padding-top: 20px; text-align: center;">
            <p style="color: #737373; font-size: 12px; margin: 0;">This inquiry was sent automatically from aubreysbuilding.com.au</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: `Aubreys Building <${senderEmail}>`,
      to: [recipientEmail],
      subject: `New Consultation Request from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend SDK error:', error);
      return res.status(502).json({
        error: 'Failed to send notification email via Resend SDK.',
        details: error.message,
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Serverless function execution exception:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
