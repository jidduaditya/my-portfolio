import { Link } from 'react-router-dom';
import ContactBlock from '../components/ContactBlock';

export default function ContactPage() {
  return (
    <>
      <ContactBlock />
      <div className="cs-back">
        <Link to="/" className="cs-back-link">← Home</Link>
      </div>
    </>
  );
}
