import React from 'react';

const StartPage = ({ onGetStarted }) => (
  <div>
    <div
      style={{
        width: '100%',
        minHeight: '340px',
        background: 'linear-gradient(90deg, #7c3aed 0%, #3498db 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: '48px 0'
      }}
    >
      <h1 style={{ fontWeight: 700, fontSize: '3rem', marginBottom: '16px' }}>
        Deepfake Detector
      </h1>
      <p style={{ fontSize: '1.3rem', maxWidth: 700, marginBottom: '32px' }}>
        Analyze images for deepfake content with our powerful AI-driven tool. Upload an image and get instant results.
      </p>
      <button
        onClick={onGetStarted}
        style={{
          background: '#fff',
          color: '#7c3aed',
          fontWeight: 700,
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '24px',
          padding: '12px 36px',
          boxShadow: '0 2px 8px rgba(44,62,80,0.12)',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
      >
        Get Started
      </button>
    </div>
    {/* How It Works Section */}
    <div style={{ background: '#f8f9fa', padding: '48px 0' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: '40px', color: '#23232b' }}>
        How It Works
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(44,62,80,0.08)',
          padding: '32px',
          width: '280px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🖼️</div>
          <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>Upload Image</h4>
          <p>Choose an image you want to analyze for deepfake content.</p>
        </div>
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(44,62,80,0.08)',
          padding: '32px',
          width: '280px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🤖</div>
          <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>AI Analysis</h4>
          <p>Our AI model analyzes the image and detects deepfake characteristics.</p>
        </div>
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(44,62,80,0.08)',
          padding: '32px',
          width: '280px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📊</div>
          <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>Get Results</h4>
          <p>Instantly view the prediction and confidence score for your image.</p>
        </div>
      </div>
    </div>
  </div>
);

export default StartPage;