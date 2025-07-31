import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI-Powered Code Completion',
    description: (
      <>
        Cursor's Tab completion understands BIM patterns and suggests entire code blocks
        for Revit API, IFC processing, and MEP coordination workflows.
      </>
    ),
  },
  {
    title: 'Natural Language Programming',
    description: (
      <>
        Describe what you want to build in plain English and Cursor generates
        the code using the latest AI models including GPT-4 and Claude.
      </>
    ),
  },
  {
    title: 'Codebase Understanding',
    description: (
      <>
        Cursor indexes your entire BIM project, understanding relationships between
        Revit families, IFC entities, and custom utilities for better suggestions.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        <div className={styles.cursorFeatures}>
          <h2>Why Cursor for BIM Development?</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>5x</span>
              <span className={styles.statLabel}>Faster Development</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>AI</span>
              <span className={styles.statLabel}>Code Generation</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>AI Assistant</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>Smart</span>
              <span className={styles.statLabel}>Auto-completion</span>
            </div>
          </div>
        </div>
        
        <div className={styles.promptExamples}>
          <h3>Prompt Engineering for BIM</h3>
          <div className={styles.promptGrid}>
            <div className={styles.promptCard}>
              <h4>Revit API Development</h4>
              <p><em>"Create a Revit external command that analyzes all walls and exports properties to Excel"</em></p>
            </div>
            <div className={styles.promptCard}>
              <h4>IFC Processing</h4>
              <p><em>"Build an IFC analyzer that extracts space data and generates a sustainability report"</em></p>
            </div>
            <div className={styles.promptCard}>
              <h4>MEP Coordination</h4>
              <p><em>"Develop a clash detection tool that categorizes conflicts by discipline"</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}