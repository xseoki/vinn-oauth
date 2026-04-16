import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

/**
 * Meta Data Deletion Callback API
 *
 * Meta가 사용자의 데이터 삭제 요청 시 이 엔드포인트에 POST 요청을 보냅니다.
 * signed_request를 파싱하여 confirmation_code와 status URL을 반환해야 합니다.
 *
 * 참고: https://developers.facebook.com/docs/development/build-and-test
 */

const APP_SECRET = process.env.META_APP_SECRET ?? ''

function parseSignedRequest(signedRequest: string, secret: string) {
  const [encodedSig, payload] = signedRequest.split('.')

  // Base64url 디코드
  const decode = (str: string) =>
    Buffer.from(str.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')

  const data = JSON.parse(decode(payload))

  // 서명 검증
  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')

  if (encodedSig !== expectedSig) {
    throw new Error('Invalid signed_request signature')
  }

  return data
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData()
    const signedRequest = body.get('signed_request') as string | null

    if (!signedRequest) {
      return NextResponse.json({ error: 'Missing signed_request' }, { status: 400 })
    }

    // APP_SECRET 미설정 환경(개발/테스트)에서는 서명 검증 건너뜀
    let userId = 'unknown'
    if (APP_SECRET) {
      const data = parseSignedRequest(signedRequest, APP_SECRET)
      userId = data.user_id ?? 'unknown'
    }

    // confirmation_code: 요청을 추적할 수 있는 고유 코드
    const confirmationCode = crypto
      .createHash('sha256')
      .update(`${userId}-${Date.now()}`)
      .digest('hex')
      .slice(0, 16)

    // Vinn은 로컬 앱이므로 서버에 저장된 데이터가 없음을 안내하는 status URL
    const statusUrl = `${req.nextUrl.origin}/data-deletion?code=${confirmationCode}`

    return NextResponse.json({
      url: statusUrl,
      confirmation_code: confirmationCode,
    })
  } catch (err) {
    console.error('[data-deletion callback error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Meta가 GET으로 접근할 때도 200 반환 (헬스체크용)
export async function GET() {
  return NextResponse.json({ status: 'Data deletion callback endpoint is active' })
}
