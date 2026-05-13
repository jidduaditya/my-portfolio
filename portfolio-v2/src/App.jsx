import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';

const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WritingPage = lazy(() => import('./pages/WritingPage'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

if (typeof window !== 'undefined') {
  console.log(
    '%cBuilt by Aditya Jiddu',
    'font-size: 16px; font-family: Georgia, serif; color: #C41E3A; font-style: italic;'
  );
  console.log(
    '%cLike what you see? Let\'s talk product. → jiddu.aditya@gmail.com',
    'font-size: 12px; font-family: system-ui; color: #5A5754;'
  );
}

function Layout() {
  return (
    <>
      <Nav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/products" element={<WorkPage />} />
          <Route path="/products/:slug" element={<CaseStudy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/writing" element={<WritingPage />} />
        </Route>
      </Routes>
    </>
  );
}
