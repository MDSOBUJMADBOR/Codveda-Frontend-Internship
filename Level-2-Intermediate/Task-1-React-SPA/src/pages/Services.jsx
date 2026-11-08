import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Cloud, ShieldCheck, Smartphone, Check, ArrowRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'frontend',
    category: 'Engineering',
    title: 'Modern Front-End Development',
    description: 'Component-driven Single Page Applications using React, Next.js, and TypeScript with fluid responsiveness and state isolation.',
    icon: Code2,
    deliverables: ['Custom Design Systems', 'Accessible ARIA Components', 'SEO & Core Web Vitals']
  },
  {
    id: 'cloud',
    category: 'Infrastructure',
    title: 'Cloud DevOps & CI/CD Pipelines',
    description: 'Automated build, test, and deployment orchestration across edge platforms (Vercel, AWS, Cloudflare Workers).',
    icon: Cloud,
    deliverables: ['Automated PR Previews', 'Zero-Downtime Rollouts', 'Edge Performance Caching']
  },
  {
    id: 'security',
    category: 'Security',
    title: 'Web Application Hardening',
    description: 'Strict input sanitization, CSP headers, zero-trust token authentication, and compliance auditing.',
    icon: ShieldCheck,
    deliverables: ['OWASP Top 10 Audits', 'Form Regex Validation', 'Encrypted State Storage']
  },
  {
    id: 'mobile',
    category: 'Design',
    title: 'Progressive Responsive Interfaces',
    description: 'Mobile-first layout engineering with adaptive typography, gesture navigation, and offline PWA capability.',
    icon: Smartphone,
    deliverables: ['Touch Gesture Navigation', 'Multi-Viewport Testing', 'Offline Fallback Screens']
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredServices = activeCategory === 'ALL'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="page-container">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <span className="section-tag">CAPABILITIES</span>
          <h1 className="section-title">Solutions &amp; Technical Capabilities</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
            Comprehensive full-spectrum front-end services designed to help enterprise products scale gracefully.
          </p>

          {/* Interactive Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['ALL', 'Engineering', 'Infrastructure', 'Security', 'Design'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: '1px solid var(--border-color)',
                  backgroundColor: activeCategory === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {filteredServices.map(service => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  color: 'var(--accent-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Icon size={22} />
                </div>

                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {service.category}
                </span>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {service.description}
                </p>

                <ul style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginBottom: '20px' }}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      <Check size={14} color="var(--accent-secondary)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="btn btn-outline"
                  style={{ width: '100%', fontSize: '0.85rem' }}
                >
                  <span>Request Solution</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

