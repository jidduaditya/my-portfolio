import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './CaseStudy.css';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="cs-empty">
        <h1>This project doesn't exist</h1>
        <p className="cs-empty-sub">It may have been moved or the link is outdated.</p>
        <Link to="/products" className="cs-empty-link">Browse all work →</Link>
      </section>
    );
  }

  const { hero, sections, impact, skills } = project;

  return (
    <>
      <section className="cs-hero">
        <div className="cs-hero-left">
          <p className="label">{hero.role}</p>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-meta">{hero.location}</p>
        </div>
        <div className="cs-hero-right">
          <p className="cs-company">{hero.company}</p>
          <p className="cs-years">{hero.years}</p>
        </div>
      </section>

      {impact.length > 0 && (
        <section className="cs-impact">
          {impact.map((item, i) => (
            <div className="cs-impact-item" key={i}>
              <span className="cs-impact-num">{item.number}</span>
              <span className="cs-impact-lbl">{item.label}</span>
            </div>
          ))}
        </section>
      )}

      <div className="cs-body">
        {sections.map((section, i) => (
          <section className="cs-section" key={i}>
            <h2 className="cs-section-title">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="cs-list">
                {section.content.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="cs-text">{section.content}</p>
            )}
          </section>
        ))}

        {skills.length > 0 && (
          <section className="cs-section">
            <h2 className="cs-section-title">Skills</h2>
            <div className="cs-skills">
              {skills.map((skill) => (
                <span className="cs-skill" key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="cs-back">
        <Link
          to={project.hidden ? '/experience' : '/products'}
          className="cs-back-link"
        >
          {project.hidden ? '← Back to Experience' : '← Back to Product Building'}
        </Link>
      </div>
    </>
  );
}
