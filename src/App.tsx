import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { IntroSection, SocialExchangeSection, SystemsTheorySection } from './Sections';
import { IntersectionSection, ConclusionSection } from './MoreSections';

// ============================================================================
// TYPES
// ============================================================================

type Section = 'intro' | 'social-exchange' | 'systems-theory' | 'intersection' | 'conclusion';
type ConflictStage = 'prelude' | 'trigger' | 'initiation' | 'differentiation' | 'resolution';
type ProcessType = 'productive' | 'destructive';

interface Avatar {
  name: string;
  role: string;
  color: string;
}

interface VideoClip {
  id: string;
  url: string;
  title: string;
  timestamp: string;
  description: string;
}

interface TheoryAnalysis {
  theory: string;
  avatar: Avatar;
  functional: string[];
  dysfunctional: string[];
  productiveStages: Record<ConflictStage, string>;
  destructiveStages: Record<ConflictStage, string>;
}

// ============================================================================
// AVATAR DEFINITIONS
// ============================================================================

const AVATARS: Record<string, Avatar> = {
  spencer: {
    name: 'Spencer Grimes',
    role: 'Lead Analyst',
    color: '#CC0000'
  },
  abby: {
    name: 'Abby Boya',
    role: 'Social Exchange Theory Expert',
    color: '#FFD700'
  },
  hazel: {
    name: 'Hazel Tuning',
    role: 'Systems Theory Expert',
    color: '#9370DB'
  }
};

// ============================================================================
// VIDEO CLIPS (Real trial footage)
// ============================================================================

const VIDEO_CLIPS: VideoClip[] = [
  {
    id: 'clip1',
    url: 'https://www.youtube.com/watch?v=xsBN_7vUP0U',
    title: 'Kitchen Cabinet Incident',
    timestamp: '0:00',
    description: 'Video shows Depp slamming cabinets during argument with Heard'
  },
  {
    id: 'clip2',
    url: 'https://www.youtube.com/watch?v=RcKfBIu8jQs',
    title: 'Australia Incident - Amber Heard Testimony',
    timestamp: '0:00',
    description: 'Heard testifies about the incident that severed Depp\'s finger'
  },
  {
    id: 'clip3',
    url: 'https://www.youtube.com/watch?v=GqWvGcmW7PE',
    title: 'Australia Incident - Johnny Depp Testimony',
    timestamp: '0:00',
    description: 'Depp demonstrates how the injury occurred during argument'
  }
];

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('intro');
  const [presentationMode, setPresentationMode] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentVideoClip, setCurrentVideoClip] = useState<VideoClip | null>(null);
  const [showAvatarAnalysis, setShowAvatarAnalysis] = useState(false);
  const [selectedTheory, setSelectedTheory] = useState<'social-exchange' | 'systems' | 'both'>('both');

  // Timer for presentation mode
  useEffect(() => {
    if (presentationMode) {
      const interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [presentationMode]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --tabloid-red: #CC0000;
          --tabloid-black: #1a1a1a;
          --tabloid-gold: #FFD700;
          --aged-paper: #f5f0e8;
          --deep-burgundy: #5C0A0A;
          --cream: #FFF8DC;
          --ink-blue: #1B1464;
        }

        @font-face {
          font-family: 'Crimson Pro';
          font-weight: 400 900;
          font-style: normal;
          src: url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700;900&display=swap');
        }

        @font-face {
          font-family: 'Bebas Neue';
          src: url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        }

        body {
          font-family: 'Crimson Pro', Georgia, serif;
          background: var(--aged-paper);
          color: var(--tabloid-black);
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          position: relative;
        }

        /* Tabloid Newspaper Texture Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.03) 2px,
              rgba(0,0,0,0.03) 4px
            );
          pointer-events: none;
          z-index: 1;
        }

        /* Headline Typography */
        h1, h2, h3 {
          font-family: 'Bebas Neue', Impact, sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        h1 {
          font-size: clamp(3rem, 8vw, 8rem);
          line-height: 0.9;
          color: var(--tabloid-red);
          text-shadow: 3px 3px 0 var(--tabloid-black);
        }

        h2 {
          font-size: clamp(2rem, 5vw, 4rem);
          color: var(--tabloid-black);
          border-bottom: 4px solid var(--tabloid-red);
          padding-bottom: 0.5rem;
        }

        h3 {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: var(--deep-burgundy);
        }

        /* Body Text */
        p {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          line-height: 1.6;
          font-weight: 400;
        }

        /* Navigation */
        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--tabloid-black);
          border-bottom: 6px solid var(--tabloid-red);
          padding: 1rem 2rem;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          color: var(--aged-paper);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: var(--tabloid-gold);
          border-bottom: 2px solid var(--tabloid-gold);
        }

        .nav-link.active {
          color: var(--tabloid-red);
          border-bottom: 2px solid var(--tabloid-red);
        }

        /* Presentation Mode Controls */
        .presentation-controls {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: rgba(26, 26, 26, 0.95);
          padding: 1rem 2rem;
          border-radius: 50px;
          border: 3px solid var(--tabloid-red);
          z-index: 1000;
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .timer {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: var(--tabloid-gold);
        }

        .control-btn {
          background: var(--tabloid-red);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          cursor: pointer;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: var(--tabloid-gold);
          color: var(--tabloid-black);
          transform: scale(1.05);
        }

        /* Main Content Container */
        .content {
          padding: 8rem 2rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Section Containers */
        .section {
          min-height: 80vh;
          padding: 4rem 0;
        }

        /* Video Player Wrapper */
        .video-container {
          position: relative;
          background: var(--tabloid-black);
          border: 8px solid var(--tabloid-red);
          border-radius: 4px;
          overflow: hidden;
          margin: 3rem 0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .video-player {
          width: 100%;
          aspect-ratio: 16/9;
        }

        .video-caption {
          background: var(--tabloid-red);
          color: white;
          padding: 1rem 2rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
        }

        /* Avatar Card */
        .avatar-card {
          background: white;
          border: 4px solid var(--tabloid-black);
          border-radius: 8px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow:
            8px 8px 0 rgba(204, 0, 0, 0.2),
            16px 16px 0 rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .avatar-card::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(135deg, var(--tabloid-gold), var(--tabloid-red));
          z-index: -1;
          border-radius: 8px;
        }

        .avatar-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid var(--tabloid-black);
          padding-bottom: 1rem;
        }

        .avatar-illustration {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 4px solid var(--tabloid-black);
          background: var(--aged-paper);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .avatar-info h3 {
          margin: 0;
          font-size: 1.8rem;
        }

        .avatar-info p {
          margin: 0.25rem 0 0;
          font-size: 1rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .avatar-analysis {
          font-size: 1.2rem;
          line-height: 1.8;
        }

        /* 5-Stage Conflict Model */
        .conflict-model {
          display: flex;
          gap: 1rem;
          margin: 3rem 0;
          flex-wrap: wrap;
        }

        .stage-card {
          flex: 1;
          min-width: 200px;
          background: white;
          border: 4px solid var(--tabloid-black);
          padding: 2rem 1rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .stage-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .stage-card.active {
          background: var(--tabloid-red);
          color: white;
        }

        .stage-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          color: var(--tabloid-gold);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stage-card.active .stage-number {
          color: white;
        }

        .stage-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .stage-description {
          font-size: 0.95rem;
          line-height: 1.4;
        }

        /* Split Comparison View */
        .split-view {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 3rem 0;
        }

        .theory-panel {
          background: white;
          border: 6px solid var(--tabloid-black);
          padding: 2rem;
          position: relative;
        }

        .theory-panel.social-exchange {
          border-color: #4169E1;
        }

        .theory-panel.systems {
          border-color: #228B22;
        }

        .theory-header {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 3px solid currentColor;
        }

        /* Tabloid Box Design Elements */
        .explosive-box {
          background: var(--tabloid-red);
          color: white;
          padding: 2rem;
          border: 6px double var(--tabloid-gold);
          margin: 2rem 0;
          position: relative;
          font-size: 1.3rem;
          line-height: 1.6;
        }

        .explosive-box::before {
          content: '★';
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 3rem;
          color: var(--tabloid-gold);
        }

        /* Starburst Element */
        .starburst {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem auto;
        }

        .starburst::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--tabloid-gold);
          clip-path: polygon(
            50% 0%, 61% 35%, 98% 35%, 68% 57%,
            79% 91%, 50% 70%, 21% 91%, 32% 57%,
            2% 35%, 39% 35%
          );
        }

        .starburst-text {
          position: relative;
          z-index: 1;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          color: var(--tabloid-black);
          text-align: center;
          font-weight: bold;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .split-view {
            grid-template-columns: 1fr;
          }

          .conflict-model {
            flex-direction: column;
          }

          .nav-links {
            flex-direction: column;
            gap: 0.5rem;
          }

          h1 {
            font-size: 3rem;
          }
        }

        /* Animation Keyframes */
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-links">
          <span
            className={`nav-link ${currentSection === 'intro' ? 'active' : ''}`}
            onClick={() => setCurrentSection('intro')}
          >
            Introduction
          </span>
          <span
            className={`nav-link ${currentSection === 'social-exchange' ? 'active' : ''}`}
            onClick={() => setCurrentSection('social-exchange')}
          >
            Social Exchange Theory
          </span>
          <span
            className={`nav-link ${currentSection === 'systems-theory' ? 'active' : ''}`}
            onClick={() => setCurrentSection('systems-theory')}
          >
            Systems Theory
          </span>
          <span
            className={`nav-link ${currentSection === 'intersection' ? 'active' : ''}`}
            onClick={() => setCurrentSection('intersection')}
          >
            The Intersection
          </span>
          <span
            className={`nav-link ${currentSection === 'conclusion' ? 'active' : ''}`}
            onClick={() => setCurrentSection('conclusion')}
          >
            Conclusion
          </span>
        </div>
        <button
          className="control-btn"
          onClick={() => setPresentationMode(!presentationMode)}
        >
          {presentationMode ? 'Exit' : 'Present'}
        </button>
      </nav>

      {/* Presentation Controls */}
      {presentationMode && (
        <div className="presentation-controls">
          <div className="timer">{formatTime(elapsedTime)}</div>
          <button className="control-btn" onClick={() => {
            const sections: Section[] = ['intro', 'social-exchange', 'systems-theory', 'intersection', 'conclusion'];
            const currentIndex = sections.indexOf(currentSection);
            if (currentIndex > 0) setCurrentSection(sections[currentIndex - 1]);
          }}>← Previous</button>
          <button className="control-btn" onClick={() => {
            const sections: Section[] = ['intro', 'social-exchange', 'systems-theory', 'intersection', 'conclusion'];
            const currentIndex = sections.indexOf(currentSection);
            if (currentIndex < sections.length - 1) setCurrentSection(sections[currentIndex + 1]);
          }}>Next →</button>
        </div>
      )}

      {/* Main Content */}
      <div className="content">
        <AnimatePresence mode="wait">
          {currentSection === 'intro' && <IntroSection key="intro" />}
          {currentSection === 'social-exchange' && <SocialExchangeSection key="social" />}
          {currentSection === 'systems-theory' && <SystemsTheorySection key="systems" />}
          {currentSection === 'intersection' && <IntersectionSection key="intersection" />}
          {currentSection === 'conclusion' && <ConclusionSection key="conclusion" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
