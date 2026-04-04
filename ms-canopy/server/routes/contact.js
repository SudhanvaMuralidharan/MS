const express    = require('express')
const nodemailer = require('nodemailer')
const router     = express.Router()

/* ── Validation helper ── */
function validatePayload({ name, email, message }) {
  if (!name    || name.trim().length    < 2) return 'Name must be at least 2 characters.'
  if (!email   || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'A valid email is required.'
  if (!message || message.trim().length < 10) return 'Message must be at least 10 characters.'
  return null
}

/* ── POST /api/contact ── */
router.post('/', async (req, res) => {
  const { name, email, phone, enquiry, message } = req.body

  // Validate
  const validationError = validatePayload({ name, email, message })
  if (validationError) {
    console.log('⚠️  Validation failed:', validationError)
    return res.status(400).json({ error: validationError })
  }

  // Log the enquiry (always works — even without email configured)
  console.log('\n📩 New contact form submission:')
  console.log('  Name:    ', name)
  console.log('  Email:   ', email)
  console.log('  Phone:   ', phone || '—')
  console.log('  Enquiry: ', enquiry || '—')
  console.log('  Message: ', message)
  console.log('  Time:    ', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))

  // Try to send email if SMTP credentials are configured
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host:    process.env.SMTP_HOST || (process.env.SMTP_SERVICE ? undefined : 'smtp.gmail.com'),
        port:    process.env.SMTP_PORT || 587,
        secure:  process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        service: !process.env.SMTP_HOST ? (process.env.SMTP_SERVICE || 'gmail') : undefined,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from:    `"MS Canopy Website" <${process.env.SMTP_USER}>`,
        to:      process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
        subject: `New Enquiry from ${name} — ${enquiry || 'MS Canopy Website'}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e0e0e0;border-radius:12px;overflow:hidden;">
            <div style="background:#1a1f5e;padding:24px 32px;">
              <h2 style="color:#ffffff;margin:0;font-size:20px;">New Contact Form Submission</h2>
              <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:14px;">MS Canopy Website</p>
            </div>
            <div style="padding:28px 32px;background:#fafafa;">
              <table style="width:100%;border-collapse:collapse;font-size:15px;">
                <tr><td style="padding:8px 0;color:#666;width:120px;vertical-align:top;">Name</td><td style="padding:8px 0;font-weight:600;color:#1c1c1c;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#3db8c8;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Phone</td><td style="padding:8px 0;color:#1c1c1c;">${phone || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Enquiry</td><td style="padding:8px 0;color:#1c1c1c;">${enquiry || '—'}</td></tr>
              </table>
              <div style="margin-top:20px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:16px;">
                <p style="color:#666;font-size:13px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.06em;">Message</p>
                <p style="color:#1c1c1c;margin:0;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
              </div>
            </div>
            <div style="background:#f0ebe0;padding:16px 32px;font-size:12px;color:#999;text-align:center;">
              Sent from mscanopy.in · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </div>
          </div>
        `,
      })
      console.log('✅ Email sent successfully.')
    } catch (mailErr) {
      console.error('⚠️  Email failed (form data still saved above):', mailErr.message)
      // Don't fail the request — the data was logged
    }
  } else {
    console.log('ℹ️  No SMTP credentials in .env — email not sent.')
  }

  return res.status(200).json({ success: true, message: 'Your message has been received!' })
})

module.exports = router
