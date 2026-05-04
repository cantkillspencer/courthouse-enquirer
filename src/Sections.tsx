// ============================================================================
// SECTION COMPONENTS
// ============================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6 }
};

// ============================================================================
// INTRO SECTION
// ============================================================================

export function IntroSection() {
  return (
    <motion.section className="section" {...fadeIn}>
      <h1 style={{ marginBottom: '2rem' }}>
        EXPLOSIVE COURTROOM DRAMA:<br/>
        <span style={{ color: '#1a1a1a', fontSize: '0.7em' }}>
          How Conflict Theory Explains Depp v. Heard
        </span>
      </h1>

      <div className="starburst">
        <div className="starburst-text">
          CMM 620<br/>ANALYSIS
        </div>
      </div>

      <div style={{
        background: 'white',
        padding: '3rem',
        border: '6px solid #1a1a1a',
        margin: '3rem 0'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Why This Matters</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>
          The Johnny Depp versus Amber Heard defamation trial captured global attention in 2022. Millions watched as two celebrities battled in court, their personal conflict exposed for public consumption. But beneath the tabloid headlines and social media frenzy lies something far more valuable: a textbook case of conflict communication in action.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>
          This analysis applies rigorous academic theory to understand how conflicts escalate, why communication breaks down, and what separates productive disagreement from destructive warfare. We examine this high-profile case through two theoretical frameworks: Social Exchange Theory and Systems Theory.
        </p>
        <p style={{ fontSize: '1.3rem' }}>
          Our findings reveal patterns that exist far beyond celebrity courtrooms. The same dynamics that destroyed this relationship play out in boardrooms, family dinners, and political debates. Understanding how conflict works gives us power to manage it better.
        </p>
      </div>

      <div className="explosive-box">
        <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>MAIN FINDINGS</h3>
        <ul style={{ listStyle: 'none', fontSize: '1.2rem', lineHeight: '2' }}>
          <li>✓ Both parties exhibited classic dysfunctional conflict cycles</li>
          <li>✓ Escalation patterns matched theoretical predictions precisely</li>
          <li>✓ Communication shifted from productive to destructive at identifiable turning points</li>
          <li>✓ Social Exchange and Systems theories provide complementary insights</li>
          <li>✓ Public nature of conflict altered traditional communication patterns</li>
        </ul>
      </div>

      <div style={{
        background: 'white',
        padding: '3rem',
        border: '6px solid #1a1a1a',
        margin: '3rem 0',
        borderLeft: '20px solid #CC0000'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Project Limitations</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
          <strong>Mediated Evidence:</strong> Our analysis relies on courtroom testimony, depositions, and public recordings. We cannot access private conversations or internal motivations that were not documented.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
          <strong>Performance Context:</strong> Both parties knew their communication would be publicly scrutinized. This awareness likely altered their natural conflict patterns, making it difficult to distinguish authentic communication from strategic performance.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
          <strong>Theoretical Scope:</strong> We focus on two conflict theories. Other frameworks (Attribution Theory, Face Negotiation Theory, Attachment Theory) might reveal additional dimensions not captured here.
        </p>
        <p style={{ fontSize: '1.2rem' }}>
          <strong>Sample Size:</strong> This is a single case study of a unique relationship. Generalization to other conflicts must be done cautiously, recognizing the specific context of celebrity relationships and public litigation.
        </p>
      </div>

      <div style={{
        textAlign: 'center',
        margin: '4rem 0',
        padding: '2rem',
        background: 'rgba(204, 0, 0, 0.1)',
        border: '4px double #CC0000'
      }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '2rem',
          color: '#CC0000'
        }}>
          CLICK THROUGH THE NAVIGATION ABOVE TO EXPLORE<br/>
          THE COMPLETE THEORETICAL ANALYSIS
        </p>
      </div>
    </motion.section>
  );
}

// ============================================================================
// SOCIAL EXCHANGE THEORY SECTION
// ============================================================================

export function SocialExchangeSection() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [processType, setProcessType] = useState<'productive' | 'destructive'>('productive');

  const productiveStages = {
    prelude: "Partners maintain positive cost-benefit ratio. Both parties perceive relationship rewards (affection, status, companionship) as exceeding costs (time, effort, compromise). Trust and goodwill act as relational capital.",
    trigger: "Precipitating event introduces costs (betrayal, financial strain, public embarrassment) but parties still believe in net positive relationship value. Initial response focuses on preserving accumulated relational investments.",
    initiation: "Both parties engage in rational assessment of costs versus benefits. Communication remains strategic but oriented toward mutual gain. Parties signal willingness to negotiate and restore balance.",
    differentiation: "Open exchange of perspectives with focus on recalibrating the reward-cost equation. Each party seeks to maximize their outcomes while maintaining relationship viability. Compromise negotiations dominate.",
    resolution: "New equilibrium reached where both parties perceive acceptable benefit-cost ratio. Relationship continues with adjusted expectations. Relational capital rebuilt through demonstrated commitment to fairness."
  };

  const destructiveStages = {
    prelude: "One or both parties perceive costs exceeding rewards but remain due to comparison level for alternatives (CLalt). Resentment accumulates as perceived inequity grows. No deposits into relational bank account.",
    trigger: "Precipitating event tips cost-benefit analysis decisively negative. Parties focus on past costs (sunk costs) rather than future potential. Desire for retaliation or compensation emerges.",
    initiation: "Communication becomes transactional and vindictive. Each party seeks to maximize their own outcomes at the expense of the other. Zero-sum mindset dominates: your loss is my gain.",
    differentiation: "Escalating pattern of punishment and retaliation. Each negative action increases the other's costs, creating downward spiral. Attempts to 'even the score' replace cooperative problem solving.",
    resolution: "Relationship terminates when costs become unbearable or better alternatives emerge. Final interactions focus on minimizing own losses and maximizing other's costs. No concern for mutual welfare."
  };

  const stages = processType === 'productive' ? productiveStages : destructiveStages;

  return (
    <motion.section className="section" {...fadeIn}>
      <h1 style={{ marginBottom: '1rem' }}>
        SOCIAL EXCHANGE THEORY
      </h1>
      <h3 style={{ color: '#FFD700', marginBottom: '3rem' }}>
        The Cost-Benefit Analysis of Conflict
      </h3>

      {/* Avatar Introduction */}
      <div className="avatar-card" style={{ borderColor: '#4169E1' }}>
        <div className="avatar-header">
          <div className="avatar-illustration" style={{ background: '#4169E1', color: 'white' }}>
            AB
          </div>
          <div className="avatar-info">
            <h3>Abby Boya</h3>
            <p>Social Exchange Theory Expert</p>
          </div>
        </div>
        <div className="avatar-analysis">
          <p>
            Hi, I'm Abby, and I'll be walking you through Social Exchange Theory. This framework treats relationships like economic transactions where people weigh rewards against costs. When conflict emerges, parties calculate whether continuing the relationship (or the conflict) is worth the investment. Let me show you how this played out in the Depp-Heard case.
          </p>
        </div>
      </div>

      {/* Theory Overview */}
      <div style={{
        background: 'white',
        padding: '3rem',
        border: '6px solid #4169E1',
        margin: '3rem 0'
      }}>
        <h2 style={{ borderColor: '#4169E1', marginBottom: '2rem' }}>Theory Overview</h2>

        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Social Exchange Theory (Thibaut & Kelley, 1959) posits that human relationships operate on principles of economic exchange. People enter and maintain relationships when perceived rewards exceed costs, and they exit when costs outweigh benefits.
        </p>

        <div style={{
          background: 'rgba(65, 105, 225, 0.1)',
          padding: '2rem',
          margin: '2rem 0',
          borderLeft: '6px solid #4169E1'
        }}>
          <h3>Key Concepts:</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <strong>Rewards:</strong> Positive outcomes from relationship (affection, support, status, resources)<br/>
            <strong>Costs:</strong> Negative aspects (time, effort, stress, sacrifices)<br/>
            <strong>Comparison Level (CL):</strong> Expected standard for outcomes based on past experiences<br/>
            <strong>Comparison Level for Alternatives (CLalt):</strong> Best available alternative relationship<br/>
            <strong>Outcome = Rewards − Costs</strong>
          </p>
        </div>

        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Conflict emerges when parties perceive inequity in the exchange or when accumulated costs threaten the relationship's viability. How people manage this imbalance determines whether conflict becomes functional or dysfunctional.
        </p>

        <div style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '2rem' }}>
          <p><strong>Scholarly Sources:</strong></p>
          <p>Thibaut, J. W., & Kelley, H. H. (1959). <em>The social psychology of groups.</em> New York: Wiley.</p>
          <p>Roloff, M. E., & Miller, C. W. (2006). Social exchange and equity theories. In D. O. Braithwaite & L. A. Baxter (Eds.), <em>Engaging theories in interpersonal communication</em> (pp. 243-257). Sage.</p>
          <p>Cropanzano, R., & Mitchell, M. S. (2005). Social exchange theory: An interdisciplinary review. <em>Journal of Management, 31</em>(6), 874-900.</p>
        </div>
      </div>

      {/* Video Clip Example */}
      <div className="video-container">
        <ReactPlayer
          className="video-player"
          url="https://www.youtube.com/watch?v=xsBN_7vUP0U"
          controls
          width="100%"
          height="100%"
        />
        <div className="video-caption">
          Kitchen Cabinet Incident: Escalating Costs
        </div>
      </div>

      {/* Avatar Analysis of Video */}
      <div className="avatar-card" style={{ borderColor: '#4169E1' }}>
        <div className="avatar-header">
          <div className="avatar-illustration" style={{ background: '#4169E1', color: 'white' }}>
            AB
          </div>
          <div className="avatar-info">
            <h3>Abby's Analysis</h3>
            <p>Social Exchange Perspective</p>
          </div>
        </div>
        <div className="avatar-analysis">
          <p style={{ marginBottom: '1rem' }}>
            Watch how the costs escalate in this exchange. Both parties are calculating in real time: Is this fight worth the emotional toll? Notice how Depp's cabinet slamming and Heard's recording both represent attempts to shift the cost-benefit balance in their favor.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            From a Social Exchange view, Heard's decision to record represents her attempt to create evidence (a future reward) that might outweigh current costs. Depp's aggressive behavior suggests he's operating from a position where he perceives the relationship costs as already too high to manage his responses carefully.
          </p>
          <p>
            The key insight: Both parties have stopped investing in the relationship's reward pool and started focusing exclusively on cost management and protection. This is a classic marker of dysfunctional conflict cycles in Social Exchange Theory.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

// ============================================================================
// SYSTEMS THEORY SECTION
// ============================================================================

export function SystemsTheorySection() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [processType, setProcessType] = useState<'productive' | 'destructive'>('productive');

  const productiveStages = {
    prelude: "System maintains homeostasis through negative feedback loops. Deviations from equilibrium trigger corrective responses. Open communication channels allow information flow that prevents escalation.",
    trigger: "Disturbance to system equilibrium occurs but system boundaries remain permeable. External inputs (stressors) are processed through existing communication patterns. System adapts without fundamental restructuring.",
    initiation: "System members acknowledge disturbance and engage adaptive mechanisms. Feedback loops identify source of imbalance. Communication increases to process new information and restore equilibrium.",
    differentiation: "System reorganizes around new equilibrium point. Positive feedback temporarily amplifies change to reach new stable state. Subsystems remain integrated while adapting to new conditions.",
    resolution: "New homeostatic balance achieved at different equilibrium point. System has evolved but maintains core functions and boundaries. Communication patterns stabilize around new norms."
  };

  const destructiveStages = {
    prelude: "System develops rigid boundaries and closed feedback loops. Information cannot flow effectively between subsystems. Homeostasis maintained through increasing rigidity rather than flexibility.",
    trigger: "System disruption overwhelms existing regulatory mechanisms. Rigid boundaries prevent adaptation. Closed feedback loops amplify rather than dampen disturbance.",
    initiation: "Positive feedback loops dominate, escalating initial disturbance. Communication breakdowns isolate subsystems. System becomes increasingly unstable and chaotic.",
    differentiation: "Escalating spiral as each response amplifies the problem. Subsystems work at cross purposes. System loses ability to self-regulate. Entropy increases dramatically.",
    resolution: "System disintegrates or reaches catastrophic failure point. Boundaries dissolve entirely or become impermeable. Communication ceases. No return to previous equilibrium possible."
  };

  const stages = processType === 'productive' ? productiveStages : destructiveStages;

  return (
    <motion.section className="section" {...fadeIn}>
      <h1 style={{ marginBottom: '1rem' }}>
        SYSTEMS THEORY
      </h1>
      <h3 style={{ color: '#FFD700', marginBottom: '3rem' }}>
        The Interconnected Web of Conflict
      </h3>

      <div className="avatar-card" style={{ borderColor: '#228B22' }}>
        <div className="avatar-header">
          <div className="avatar-illustration" style={{ background: '#228B22', color: 'white' }}>
            HT
          </div>
          <div className="avatar-info">
            <h3>Hazel Tuning</h3>
            <p>Systems Theory Expert</p>
          </div>
        </div>
        <div className="avatar-analysis">
          <p>
            Hello, I'm Hazel. Systems Theory views relationships not as transactions between individuals, but as complex interconnected systems where every action ripples through the entire network. When conflict erupts, we're not just seeing two people fighting, we're witnessing an entire system struggling to maintain balance. Let me show you how this perspective illuminates the Depp-Heard case.
          </p>
        </div>
      </div>

      {/* Same Video, Different Analysis */}
      <div className="video-container">
        <ReactPlayer
          className="video-player"
          url="https://www.youtube.com/watch?v=xsBN_7vUP0U"
          controls
          width="100%"
          height="100%"
        />
        <div className="video-caption">
          Kitchen Cabinet Incident: Feedback Loop Escalation
        </div>
      </div>
    </motion.section>
  );
}
