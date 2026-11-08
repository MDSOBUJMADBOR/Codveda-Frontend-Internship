import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '50px 0 25px',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px',
        marginBottom: '40px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}>
              <Layers size={18} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>
              Nova<strong>Sphere</strong>
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '280px' }}>
            Next-generation enterprise Single Page Application built with modern React 18, React Router v6, and centralized Context API.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px' }}>Quick Navigation</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/about">Our Company &amp; Team</Link></li>
            <li><Link to="/services">Solutions &amp; Capabilities</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px' }}>Developer Credentials</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <li>Developer: <strong>Md. Sobuj Madbor</strong></li>
            <li>Internship: <strong>Codveda Technologies</strong></li>
            <li>Level: <strong>Level 2 (Intermediate) — Task 1</strong></li>
            <li>Framework: <strong>React 18 + React Router</strong></li>
          </ul>
        </div>
      </div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '20px',
        fontSize: '0.82rem',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; 2026 NovaSphere Technologies. All rights reserved.</p>
        <p>Built with ❤️ for Codveda Front-End Internship Submission.</p>
      </div>
    </footer>
  );
}

