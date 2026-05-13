import { Link } from 'react-router-dom';
import { experience } from '../data/experience';
import SectionHeader from './SectionHeader';
import './Experience.css';

export default function Experience({ limit }) {
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <section className={limit ? undefined : 'pf-section'} id="experience" style={limit ? { padding: '0 48px 24px' } : undefined}>
      {!limit && <SectionHeader title="Experience" right={`${experience.length} roles`} />}
      {items.map((exp, i) => (
        <ExperienceRow key={exp.id} exp={exp} index={i} />
      ))}
    </section>
  );
}

function ExperienceRow({ exp, index }) {
  const inner = (
    <>
      <div className="pf-exp-left">
        {exp.products && (
          <span className="pf-exp-products">
            {exp.products.map((p, i) => (
              <span key={p.name}>
                {i > 0 && <span className="pf-exp-sep">|</span>}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-exp-product-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.name}
                </a>
              </span>
            ))}
          </span>
        )}
        <p className="pf-exp-company">{exp.company}</p>
        <p className="pf-exp-meta">
          {exp.client && <>{exp.client} · </>}
          {exp.role} · {exp.years}
        </p>
        <p className="pf-exp-note">{exp.description}</p>
      </div>
      {exp.stat && (
        <div className="pf-exp-right">
          <p className="pf-exp-stat">{exp.stat}</p>
          <p className="pf-exp-stat-lbl">{exp.statLabel}</p>
        </div>
      )}
    </>
  );

  const className = `pf-exp-row reveal`;

  if (exp.slug) {
    return (
      <Link to={`/products/${exp.slug}`} className={className} style={{ transitionDelay: `${index * 80}ms` }}>
        {inner}
      </Link>
    );
  }

  return <div className={className} style={{ transitionDelay: `${index * 80}ms` }}>{inner}</div>;
}
