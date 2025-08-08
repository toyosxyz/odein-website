import { WebClient } from '@slack/web-api'
import dotenv from 'dotenv'
import { NextRequest, NextResponse } from 'next/server'

dotenv.config()

const app = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function POST(request: NextRequest) {
  try {
    const { from_name, email, website, message, phone } = await request.json()

    const blocks = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `<!channel> \n*Nuevo mensaje web Odein:*\n\n*Nombre:* ${from_name}\n*Email:* ${email}\n*Web actual:* <${website.includes("https://") ? website : "https://" + website}|${website}>\n*Teléfono:* ${phone}\n*Mensaje:* \n${message}`
        }
      }
    ]

    await app.chat.postMessage({
      channel: process.env.SLACK_CHANNEL || "",
      text: `Nuevo mensaje a través del form de Odein`,
      blocks: blocks
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.log(e)
    return NextResponse.json({
      ok: false,
      error: e
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
} 