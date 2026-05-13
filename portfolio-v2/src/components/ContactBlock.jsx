import { contact } from '../data/meta';
import './ContactBlock.css';

export default function ContactBlock() {
  return (
    <section className="pf-contact reveal">
      <div className="pf-contact-left">
        <p className="label">Get in touch</p>
        <h2 className="pf-contact-big">Let's talk<br />product.</h2>
        {contact.status && <p className="pf-contact-sub">{contact.status}</p>}
      </div>
      <div className="pf-contact-right">
        <div className="pf-contact-item">
          <span className="pf-contact-lbl">Email</span>
          <a href={`mailto:${contact.email}`} className="pf-contact-val">{contact.email}</a>
        </div>
        <div className="pf-contact-item">
          <span className="pf-contact-lbl">LinkedIn</span>
          <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="pf-contact-val">
            {contact.linkedin.label}
          </a>
        </div>
        <div className="pf-contact-item">
          <span className="pf-contact-lbl">GitHub</span>
          <a href={contact.github.url} target="_blank" rel="noopener noreferrer" className="pf-contact-val">
            {contact.github.label}
          </a>
        </div>
        <div className="pf-contact-item">
          <span className="pf-contact-lbl">Location</span>
          <span className="pf-contact-val">{contact.location}</span>
        </div>
      </div>
    </section>
  );
}
