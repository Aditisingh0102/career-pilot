import React, { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import RunwayLookbook from './RunwayLookbook';
import ResumeCTA from './ResumeCTA';

const NAV_LINKS = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'lookbook', label: 'Lookbook' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
];

function NavBar({ active, onNav }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#faf9f7', borderBottom: '1px solid #e0dbd4',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '56px',
    }}>
      <span style={{ fontFamily: 'serif', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.15em', color: '#0a0a0a', textTransform: 'uppercase' }}>
        High Fashion
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {NAV_LINKS.map(({ id, label }) => (
          <button key={id} onClick={() => onNav(id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: active === id ? '#c9a84c' : '#1a1a1a',
              borderBottom: active === id ? '2px solid #c9a84c' : '2px solid transparent',
              paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s',
            }}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function HighFashion() {
  const [active, setActive] = useState('hero');

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(`hf-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#faf9f7', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>
      <NavBar active={active} onNav={scrollTo} />
      <section id="hf-hero"><Hero /></section>
      <section id="hf-about"><About /></section>
      <section id="hf-lookbook"><RunwayLookbook /></section>
      <section id="hf-projects"><Projects /></section>
      <section id="hf-contact"><Contact /></section>
      <ResumeCTA />
    </div>
  );
}
