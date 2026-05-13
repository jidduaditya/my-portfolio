import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/products', label: 'Product Building' },
    { to: '/writing', label: 'Writing' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="pf-nav">
      <Link to="/" className="pf-nav-logo">AJ</Link>
      <ul className="pf-nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={pathname === to ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            Resume ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
