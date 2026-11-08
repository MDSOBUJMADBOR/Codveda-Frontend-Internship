import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight, Zap, Shield, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { inquiries } = useApp();

  return (
    <div className="page-container">
      <div className="container">
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 70px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--accent-secondary)',
            marginBottom: '20px'
          }}>
            <Sparkles size={16} /> Single Page Application Architecture
          </div>

          <h1 className="section-title" style={{ fontSize: '3rem', lineHeight: 1.15 }}>
            Seamless Navigation &amp; <span className="gradient-text">State Mastery</span>
          </h1>

          <p className="section-subtitle" style={{ margin: '0 auto 30px' }}>
            Experience lightning-fast client-side routing with React Router DOM v6 and cross-page state persistence powered by React Context.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary btn-large">
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline btn-large">
              <span>Submit Inquiry</span>
            </Link>
          </div>
        </div>

        {/* Live Context State Monitor Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '60px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px' }}>
              ⚡ Global State Synchronizer (React Context)
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Currently managing <strong>{inquiries.length} active client inquiries</strong> stored in memory across all routes.
            </p>
          </div>
          <Link to="/contact" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
            View Inquiries Log &rarr;
          </Link>
        </div>

        {/* Three Pillar Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div className="card">
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(99, 102, 241, 0.15)',
              color: '#818cf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px'
            }}>
              <Zap size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Zero-Reload Routing</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Page transitions occur instantaneously without blank screens or network round-trips via React Router DOM.
            </p>
          </div>

          <div className="card">
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(6, 182, 212, 0.15)',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px'
            }}>
              <Cpu size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Context State Engine</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Centralized state allows seamless data hand-off between separate pages, such as theme toggling and form payloads.
            </p>
          </div>

          <div className="card">
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px'
            }}>
              <Shield size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Production Ready</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Optimized Vite bundler produces ultra-compact chunks ready for zero-config deployment on Vercel or Netlify.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

