import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6 }
};

export function IntersectionSection() {
  const [selectedMoment, setSelectedMoment] = useState<number>(0);

  const conflictMoments = [
    {
      title: "The Australia Incident",
      timestamp: "March 2015",
      dialogue: "I'm not the one who threw bottles and cut off my finger... You cut your own finger off!",
      functional: false,
      stage: "differentiation",
      socialExchange: "Both parties focused on assigning blame (costs) rather than problem-solving. Heard's accusation attempts to shift cost responsibility. Depp's counter-accusation reveals zero-sum thinking: establishing her fault reduces his own. No attempt to restore equity through cooperation.",
      systems: "Positive feedback loop in full effect: accusation triggers counter-accusation, which triggers evidence citation, which triggers stronger rebuttal. System boundaries completely closed to external reality or objective truth. Each element amplifies rather than corrects the other's claims."
    },
    {
      title: "Recording Confrontation",
      timestamp: "Kitchen Cabinet Incident",
      dialogue: "You wanna see crazy? I'll give you fucking crazy... Are you taping me?",
      functional: false,
      stage: "initiation",
      socialExchange: "Depp's aggression represents costs spiraling beyond control. Heard's recording behavior shifts from relationship partner to evidence gatherer, treating interaction purely as cost documentation for future benefit (legal advantage). Neither investing in relational rewards.",
      systems: "Heard's recording fundamentally alters system boundaries by making private communication public/permanent. This boundary violation ensures system cannot return to previous equilibrium. Depp's awareness of recording creates meta-communication layer that further destabilizes system. Information meant to be processed internally is now routed externally."
    }
  ];

  const currentMoment = conflictMoments[selectedMoment];

  return (
    <motion.section className="section" {...fadeIn}>
      <h1 style={{ marginBottom: '1rem' }}>THE INTERSECTION</h1>
      <h3 style={{ color: '#FFD700', marginBottom: '3rem' }}>Where Two Theories Meet Reality</h3>

      <div className="avatar-card" style={{ borderColor: '#CC0000' }}>
        <div className="avatar-header">
          <div className="avatar-illustration" style={{ background: '#CC0000', color: 'white' }}>SG</div>
          <div className="avatar-info">
            <h3>Spencer Grimes</h3>
            <p>Comparative Analysis Lead</p>
          </div>
        </div>
        <div className="avatar-analysis">
          <p>Now we bring it all together. Abby showed you how Social Exchange Theory explains the cost-benefit calculations driving this conflict. Hazel demonstrated how Systems Theory reveals the feedback loops and boundary failures. But the real insight comes from seeing how these theories complement and contrast with each other. Let me walk you through the intersection.</p>
        </div>
      </div>

      <div className="explosive-box">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>VERDICT: DESTRUCTIVE COMMUNICATION PROCESS</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>Evidence from Social Exchange Theory:</strong> Both parties operated from zero-sum cost-benefit calculations. No attempts to restore equity through cooperation. Focus exclusively on maximizing own outcomes and punishing the other. Final legal costs and reputational damage exceeded any possible relationship or vindication rewards.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          <strong>Evidence from Systems Theory:</strong> Positive feedback loops dominated throughout. System boundaries became rigid and then collapsed entirely. No self-correcting mechanisms activated. Communication channels failed. System progressed from dysfunction to complete disintegration with no possibility of reorganization.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          <strong>Convergent Conclusion:</strong> Both theories independently identify this as a textbook case of destructive conflict communication. The relationship system failed to engage any productive conflict management mechanisms and instead amplified every destructive pattern available.
        </p>
      </div>
    </motion.section>
  );
}

export function ConclusionSection() {
  return (
    <motion.section className="section" {...fadeIn}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>CONCLUSION</h1>
      <h3 style={{ color: '#FFD700', marginBottom: '4rem', textAlign: 'center' }}>What We Learned &amp; Why It Matters</h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="avatar-card" style={{ borderColor: '#CC0000' }}>
          <div className="avatar-header">
            <div className="avatar-illustration" style={{ background: '#CC0000', color: 'white' }}>SG</div>
            <div className="avatar-info"><h3>Spencer</h3></div>
          </div>
        </div>
        <div className="avatar-card" style={{ borderColor: '#4169E1' }}>
          <div className="avatar-header">
            <div className="avatar-illustration" style={{ background: '#4169E1', color: 'white' }}>AB</div>
            <div className="avatar-info"><h3>Abby</h3></div>
          </div>
        </div>
        <div className="avatar-card" style={{ borderColor: '#228B22' }}>
          <div className="avatar-header">
            <div className="avatar-illustration" style={{ background: '#228B22', color: 'white' }}>HT</div>
            <div className="avatar-info"><h3>Hazel</h3></div>
          </div>
        </div>
      </div>

      <div style={{ background: 'white', padding: '3rem', border: '6px solid #1a1a1a', margin: '3rem 0' }}>
        <h2 style={{ marginBottom: '2rem' }}>What We Learned About Conflict Communication</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          The Depp versus Heard trial taught us that destructive conflict follows predictable patterns regardless of the actors involved. Whether in a celebrity courtroom or a family kitchen, dysfunctional communication exhibits the same markers: escalating costs without attention to rewards, rigid system boundaries that block corrective information, positive feedback loops that amplify problems, and zero-sum thinking that makes cooperation impossible.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Most importantly, we learned that conflict communication is not about who is right or wrong, victim or villain. It's about patterns, structures, and choices that either move toward resolution or destruction. Both parties contributed to dysfunctional cycles. Both parties had opportunities to choose differently.
        </p>
      </div>

      <div className="explosive-box" style={{ marginBottom: '4rem' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>WHY STUDYING CONFLICT MATTERS TO SOCIAL LIFE</h3>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Conflict is not optional in human relationships. Wherever people interact—families, workplaces, communities, nations—different interests and perspectives will collide. The question is never whether conflict occurs, but whether we manage it productively or destructively.
        </p>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Understanding conflict communication gives us power. We can recognize early warning signs: cost calculations turning negative, feedback loops shifting from corrective to amplifying, boundaries becoming rigid. We can identify turning points before they pass. We can choose responses that restore balance rather than escalate destruction.
        </p>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
          The Depp-Heard case shows us what happens when conflict communication goes completely wrong. Let it also show us what to avoid in our own conflicts, what patterns to interrupt, what choices to make differently. Theory gives us the tools. Application gives us the results. The rest is up to us.
        </p>
      </div>

      <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#1a1a1a', color: 'white', border: '8px double #FFD700' }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }}>END OF ANALYSIS</p>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          CMM 620: Conflict and Communication<br/>
          Spring 2026<br/>
          Team 2: Spencer Grimes, Abby Boya, Hazel Tuning
        </p>
        <p style={{ fontSize: '1.2rem', color: '#CC0000' }}>
          Dr. Branislav "Branko" Kovacic<br/>
          University of Hartford
        </p>
      </div>
    </motion.section>
  );
}
