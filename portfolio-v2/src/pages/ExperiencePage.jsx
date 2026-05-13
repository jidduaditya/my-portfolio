import { Link } from 'react-router-dom';
import Experience from '../components/Experience';

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <div className="cs-back">
        <Link to="/" className="cs-back-link">← Home</Link>
      </div>
    </>
  );
}
