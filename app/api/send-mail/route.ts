import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../../../utils/sendMail'

export async function POST(request: NextRequest) {
  try {
    const { name, email, budget, message, website } = await request.json()
    const mailSent = await sendEmail({ name, email, website, message })
    return NextResponse.json(mailSent)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
} 