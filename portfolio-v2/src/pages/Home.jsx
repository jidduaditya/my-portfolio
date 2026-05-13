import Hero from '../components/Hero';
import Experience from '../components/Experience';
import WorkGrid from '../components/WorkGrid';
import ContactBlock from '../components/ContactBlock';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="pf-section" style={{ padding: 0 }}>
        <div style={{
          padding: '28px 48px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}>
          <span className="section-title">Experience</span>
          <Link to="/experience" className="section-count">View all →</Link>
        </div>
        <Experience limit={3} />
      </section>
      <section className="pf-section" style={{ padding: 0 }}>
        <div style={{
          padding: '28px 48px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}>
          <span className="section-title">Product Building</span>
          <Link to="/products" className="section-count">View all →</Link>
        </div>
        <WorkGrid limit={4} />
      </section>
      <ContactBlock />
    </>
  );
}
