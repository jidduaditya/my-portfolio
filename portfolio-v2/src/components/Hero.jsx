import { metrics, bio } from '../data/meta';
import './Hero.css';

export default function Hero() {
  return (
    <section className="pf-hero">
      <div className="pf-hero-left">
        <img
          src="/photo.jpg"
          alt="Aditya Jiddu"
          className="pf-photo anim-fade-up anim-stagger-1"
          width="180"
          height="220"
          fetchPriority="high"
        />
        <div className="pf-intro">
          <h1 className="pf-name anim-fade-up anim-stagger-2">Aditya<br />Jiddu</h1>
          <p className="label anim-fade-up anim-stagger-3">Product Manager</p>
          <p className="pf-tagline anim-fade-up anim-stagger-4">Shipping things that matter.</p>
        </div>
      </div>
      <div className="pf-hero-right">
        <p className="pf-bio anim-fade-up anim-stagger-3">{bio}</p>
        <div className="pf-metrics anim-fade-up anim-stagger-5">
          {metrics.map((m, i) => (
            <div className="pf-metric" key={i}>
              <span className="pf-metric-num">{m.number}</span>
              <span className="pf-metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
