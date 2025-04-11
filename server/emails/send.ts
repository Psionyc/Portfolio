import { Resend } from 'resend'
import type { H3Event } from 'h3'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const { email, subject, message, phone, fullname } = body

  const toEmail = process.env.NUXT_PRIVATE_EMAIL

  if (!toEmail) return { error: 'You must set a correct email' }

  const { error } = await resend.emails.send({
    from: 'Psyone <onboarding@resend.dev>',
    to: [toEmail], // Replace with your desired recipient email address
    subject: 'New Message from Psyone',
    html: `
        <p>A new message has been submitted via the Psyone contact form.</p>
        <p>Here are the details:</p>
        <ul>
          <li>Name: ${fullname}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Subject: ${subject}</li>
          <li>Message: ${message}</li>
        </ul>
      `,
  })

  if (error) {
    console.error('Error sending email:', error)
    return { error: error.message || error }
  }
})
