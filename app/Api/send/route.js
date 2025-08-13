import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { email, subject, message } = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Okasha <onboarding@resend.dev>',
      to: ['okasha.masood7@gmail.com'],
      subject,
      react: (
        <div>
          <p><strong>From:</strong> {email}</p>
          <p>{message}</p>
        </div>
      ),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
