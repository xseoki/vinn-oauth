export const metadata = { title: 'Terms of Service — Vinn' }

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: '60px auto', padding: '0 24px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1a1a1a' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Terms of Service</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Last updated: April 2025</p>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. Acceptance of Terms</h2>
        <p>
          By installing or using Vinn ("the App"), you agree to these Terms of Service.
          If you do not agree, do not use the App.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. Description of Service</h2>
        <p>
          Vinn is a desktop application that provides AI-powered marketing analysis for
          photography and rental studio operators. The App integrates with Meta (Facebook/Instagram)
          APIs and OpenAI to generate business insights and recommendations.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. Meta Platform Usage</h2>
        <p>
          The App uses Meta APIs in compliance with Meta's{' '}
          <a href="https://developers.facebook.com/terms/" style={{ color: '#3E2C1C' }}>Platform Terms</a>{' '}
          and{' '}
          <a href="https://developers.facebook.com/devpolicy/" style={{ color: '#3E2C1C' }}>Developer Policies</a>.
          You are responsible for ensuring your use of Meta data through this App complies
          with applicable Meta policies.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. Data Responsibility</h2>
        <p>
          All business data entered into the App is stored locally on your device.
          You are responsible for maintaining backups of your local data.
          We are not liable for data loss due to device failure, uninstallation, or other causes.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>5. AI-Generated Content</h2>
        <p>
          The App uses OpenAI to generate marketing analysis and recommendations.
          AI-generated content is for informational purposes only and does not constitute
          professional marketing, legal, or financial advice. You are solely responsible
          for decisions made based on App recommendations.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>6. Limitation of Liability</h2>
        <p>
          The App is provided "as is" without warranties of any kind. We are not liable
          for any indirect, incidental, or consequential damages arising from use of the App,
          including but not limited to lost profits or business interruption.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>7. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of the App after changes
          constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>8. Contact</h2>
        <p>
          Questions about these Terms:{' '}
          <a href="mailto:os744546@gmail.com" style={{ color: '#3E2C1C' }}>os744546@gmail.com</a>
        </p>
      </section>
    </main>
  )
}
