export const metadata = { title: 'Data Deletion — Vinn' }

export default function DataDeletionPage({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  const confirmationCode = searchParams?.code

  return (
    <main style={{ maxWidth: 720, margin: '60px auto', padding: '0 24px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1a1a1a' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Data Deletion Request</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Last updated: April 2025</p>

      {confirmationCode && (
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
          <p style={{ fontWeight: 600, margin: 0, marginBottom: 4, color: '#15803d' }}>Deletion Request Received</p>
          <p style={{ margin: 0, fontSize: 14, color: '#166534' }}>
            Confirmation code: <code style={{ background: '#dcfce7', padding: '2px 8px', borderRadius: 4, fontFamily: 'monospace' }}>{confirmationCode}</code>
          </p>
          <p style={{ margin: 0, marginTop: 8, fontSize: 14, color: '#166534' }}>
            Vinn stores all data locally on your device only. There is no server-side data to delete.
            To complete deletion, follow the steps below.
          </p>
        </div>
      )}

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>How Vinn Stores Your Data</h2>
        <p>
          Vinn stores all data <strong>locally on your computer only</strong>. There is no central
          server or cloud database. When you connect your Meta (Facebook/Instagram) account,
          your access token is encrypted and saved on your local device only.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>How to Delete Your Data</h2>
        <p>Because all data is local, you can delete it in three ways:</p>

        <div style={{ background: '#f9f6f3', border: '1px solid #e8e0d8', borderRadius: 8, padding: '20px 24px', marginTop: 16 }}>
          <p style={{ fontWeight: 600, marginBottom: 12 }}>Option 1 — Disconnect Meta from the App</p>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            <li>Open Vinn</li>
            <li>Go to Settings → Meta Integration</li>
            <li>Click "Disconnect" — this removes all stored Meta tokens from your device</li>
          </ol>
        </div>

        <div style={{ background: '#f9f6f3', border: '1px solid #e8e0d8', borderRadius: 8, padding: '20px 24px', marginTop: 12 }}>
          <p style={{ fontWeight: 600, marginBottom: 12 }}>Option 2 — Revoke App Access on Facebook</p>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            <li>Go to <a href="https://www.facebook.com/settings?tab=applications" style={{ color: '#3E2C1C' }}>Facebook Settings → Apps and Websites</a></li>
            <li>Find "Vinn" in the list</li>
            <li>Click "Remove" to revoke all permissions</li>
          </ol>
        </div>

        <div style={{ background: '#f9f6f3', border: '1px solid #e8e0d8', borderRadius: 8, padding: '20px 24px', marginTop: 12 }}>
          <p style={{ fontWeight: 600, marginBottom: 12 }}>Option 3 — Uninstall the App</p>
          <p style={{ margin: 0 }}>
            Uninstalling Vinn from your computer removes the application.
            To also remove all local data (database, stored credentials), delete the app data folder
            located at <code style={{ background: '#eee', padding: '2px 6px', borderRadius: 4 }}>%APPDATA%\vinn</code> on Windows.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Contact Us</h2>
        <p>
          If you have questions or need assistance with data deletion, contact us at:{' '}
          <a href="mailto:os744546@gmail.com" style={{ color: '#3E2C1C' }}>os744546@gmail.com</a>
        </p>
        <p style={{ marginTop: 8 }}>
          We will respond within 3 business days.
        </p>
      </section>
    </main>
  )
}
