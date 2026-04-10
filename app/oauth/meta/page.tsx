export default function MetaOAuthCallback() {
  return (
    <html>
      <body>
        <p>로그인 완료. 이 창은 자동으로 닫힙니다.</p>
        <script dangerouslySetInnerHTML={{ __html: `window.close()` }} />
      </body>
    </html>
  )
}
