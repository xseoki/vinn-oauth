export const metadata = { title: 'Privacy Policy — Vinn' }

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '60px auto', padding: '0 24px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1a1a1a' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Last updated: April 2025</p>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. Overview</h2>
        <p>
          Vinn ("the App") is a desktop application for photography and rental studio operators.
          This Privacy Policy explains how the App handles information when you connect it to
          Meta (Facebook / Instagram) services.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. Data We Access via Meta API</h2>
        <p>When you authorize the App with your Meta account, the App may access:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Facebook Page information (name, ID)</li>
          <li>Instagram Business Account information (username, follower count, media count)</li>
          <li>Ad account performance metrics (impressions, spend, clicks, conversions)</li>
          <li>Instagram insights and engagement data</li>
        </ul>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. How We Store Data</h2>
        <p>
          <strong>All data is stored locally on your computer only.</strong> The App uses a local
          SQLite database on your device. No data is transmitted to or stored on any external
          server operated by Vinn. Your Meta credentials (access tokens) are encrypted using
          your operating system's secure storage.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. How We Use Data</h2>
        <p>Data accessed from Meta APIs is used solely to:</p>
        <ul style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Display your ad account performance within the App</li>
          <li>Generate AI-powered marketing analysis reports</li>
          <li>Provide advertising strategy recommendations</li>
        </ul>
        <p style={{ marginTop: 8 }}>
          Data is never sold, shared with third parties, or used for any purpose outside the App.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>5. Third-Party Services</h2>
        <p>
          The App sends data to <strong>OpenAI API</strong> solely to generate analysis reports.
          OpenAI's privacy policy applies to that data: <a href="https://openai.com/policies/privacy-policy" style={{ color: '#3E2C1C' }}>openai.com/policies/privacy-policy</a>.
          No other third-party services receive your data.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>6. Data Retention</h2>
        <p>
          Data is retained locally on your device for as long as you use the App.
          You can delete all data at any time by uninstalling the App or using the
          in-app backup/restore feature to clear your local database.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>7. Data Deletion</h2>
        <p>
          To delete all data associated with your Meta connection, you can:
        </p>
        <ol style={{ paddingLeft: 24, marginTop: 8 }}>
          <li>Disconnect Meta from the App's Settings page (this removes stored tokens)</li>
          <li>Revoke app access from your <a href="https://www.facebook.com/settings?tab=applications" style={{ color: '#3E2C1C' }}>Facebook App Settings</a></li>
          <li>Uninstall the App to remove all locally stored data</li>
        </ol>
        <p style={{ marginTop: 8 }}>
          You may also submit a data deletion request via our{' '}
          <a href="/data-deletion" style={{ color: '#3E2C1C' }}>Data Deletion page</a>.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>8. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:os744546@gmail.com" style={{ color: '#3E2C1C' }}>os744546@gmail.com</a>
        </p>
      </section>
    </main>
  )
}
