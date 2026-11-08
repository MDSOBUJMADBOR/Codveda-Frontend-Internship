import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Layers, Menu, X, Bell } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, inquiries } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(10, 14, 23, 0.85)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <Layers size={20} />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700 }}>
            Nova<strong>Sphere</strong>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              fontWeight: 600,
              fontSize: '0.92rem',
              color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
              transition: 'color 0.2s'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: 600,
              fontSize: '0.92rem',
              color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
              transition: 'color 0.2s'
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => ({
              fontWeight: 600,
              fontSize: '0.92rem',
              color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
              transition: 'color 0.2s'
            })}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontWeight: 600,
              fontSize: '0.92rem',
              color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            })}
          >
            <span>Contact</span>
            {inquiries.length > 0 && (
              <span style={{
                background: 'var(--accent-primary)',
                color: '#fff',
                fontSize: '0.7rem',
                padding: '1px 6px',
                borderRadius: '10px',
                fontWeight: 700
              }}>
                {inquiries.length}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-secondary)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/contact" className="btn btn-primary" style={{ display: 'none' }} id="navCta">
            Get Started
          </Link>

          {/* Hamburger Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="mobile-toggle-btn"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '20px',
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <NavLink to="/" onClick={closeMenu} style={{ fontSize: '1rem', fontWeight: 600 }}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} style={{ fontSize: '1rem', fontWeight: 600 }}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu} style={{ fontSize: '1rem', fontWeight: 600 }}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu} style={{ fontSize: '1rem', fontWeight: 600 }}>
            Contact ({inquiries.length} inquiries)
          </NavLink>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          #navCta { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

