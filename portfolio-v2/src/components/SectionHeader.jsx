import './SectionHeader.css';

export default function SectionHeader({ title, right }) {
  return (
    <div className="pf-section-header">
      <span className="section-title">{title}</span>
      {right && <span className="section-count">{right}</span>}
    </div>
  );
}
