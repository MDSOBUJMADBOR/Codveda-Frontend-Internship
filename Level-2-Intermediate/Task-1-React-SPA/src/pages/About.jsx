import React from 'react';
import { Target, Award, Users, Terminal } from 'lucide-react';

export default function About() {
  return (
    <div className="page-container">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <span className="section-tag">WHO WE ARE</span>
          <h1 className="section-title">Driving Front-End Innovation</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            NovaSphere was crafted during the Codveda Technologies Internship program to demonstrate advanced component architecture, modular design, and robust client routing.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.15)',
                color: '#818cf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Target size={20} />
              </div>
              <h3 style={{ fontSize: '1.3rem' }}>Our Engineering Mission</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
              To deliver fluid, accessible, and performant web interfaces that bridge complex cloud infrastructures with intuitive user experiences.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.3rem' }}>Quality Benchmarks</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
              Strict adherence to W3C accessibility, mobile-first responsive scaling, and predictable unidirectional data flow with 0% runtime memory leaks.
            </p>
          </div>
        </div>

        {/* Developer Spotlight Card */}
        <div className="card" style={{
          background: 'linear-gradient(135deg, rgba(22, 30, 48, 0.9) 0%, rgba(10, 14, 23, 0.9) 100%)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.4rem',
            fontWeight: 800
          }}>
            SM
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Md. Sobuj Madbor</h4>
            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>
              Front End Development Intern &bull; Codveda Technologies
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Demonstrating mastery in HTML5, CSS3, modern JavaScript ES6+, React 18, REST APIs, and responsive design systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

