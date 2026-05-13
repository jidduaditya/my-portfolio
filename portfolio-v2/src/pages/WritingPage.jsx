import { Link } from 'react-router-dom';

export default function WritingPage() {
  return (
    <>
      <section className="pf-section" style={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'normal', marginBottom: '12px' }}>
          Writing, soon
        </h1>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--ink-muted)',
          maxWidth: '40ch',
          lineHeight: 1.6,
        }}>
          Product thinking, AI-native building, and lessons from a decade of enterprise work. Check back.
        </p>
      </section>
      <div className="cs-back">
        <Link to="/" className="cs-back-link">← Home</Link>
      </div>
    </>
  );
}
