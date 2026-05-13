import { Link } from 'react-router-dom';
import WorkGrid from '../components/WorkGrid';
import { projects } from '../data/projects';

export default function WorkPage() {
  return (
    <section className="pf-section" style={{ padding: 0 }}>
      <div style={{
        padding: '56px 48px 24px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
      }}>
        <span className="section-title">Product Building</span>
        <span className="section-count">{projects.filter((p) => !p.hidden).length} projects</span>
      </div>
      <WorkGrid />
      <div className="cs-back">
        <Link to="/" className="cs-back-link">← Home</Link>
      </div>
    </section>
  );
}
