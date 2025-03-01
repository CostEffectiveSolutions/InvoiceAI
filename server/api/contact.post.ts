import nodemailer from 'nodemailer'

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'gkkirilov@gmail.com',
    pass: 'taaiplnmwcegbntr'
  }
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'All fields are required'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid email format'
      })
    }

    // Email content
    const mailOptions = {
      from: 'gkkirilov@gmail.com',
      to: 'info@empowerstudio.eu',
      replyTo: body.email,
      subject: `Contact Form: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      message: 'Email sent successfully'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error sending email'
    })
  }
}) 