import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './WorkGrid.css';

export default function WorkGrid({ limit }) {
  const visible = projects.filter((p) => !p.hidden);
  const items = limit ? visible.slice(0, limit) : visible;

  return (
    <div className="pf-work-grid">
      {items.map((p, i) => (
        <WorkCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
}

function WorkCard({ project, index }) {
  const isExternal = !!project.externalUrl;

  const content = (
    <>
      <p className="pf-work-tag">{project.tag}</p>
      <h3 className="pf-work-title">{project.title}</h3>
      <p className="pf-work-outcome">{project.outcome}</p>
      <span className="pf-work-link">{project.linkText} <span aria-hidden="true">→</span></span>
    </>
  );

  const className = `pf-work-card reveal`;
  const delay = { transitionDelay: `${index * 100}ms` };

  if (isExternal) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={delay}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={`/products/${project.slug}`} className={className} style={delay}>
      {content}
    </Link>
  );
}
