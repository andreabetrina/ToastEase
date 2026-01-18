import React from 'react';
import { APP_CONSTANTS } from '../constants';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        {/* Icon: Microphone with "TE" initials */}
        <div className="icon-container">
          <div className="microphone-icon">
            <span className="mic-symbol">🎤</span>
            <div className="initials-badge">
              <span className="initials-text">TE</span>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="welcome-title">Welcome to ToastEase</h1>
        <p className="welcome-subtitle">Master the Art of Public Speaking</p>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card clickable" onClick={onComplete}>
            <div className="feature-icon">📥</div>
            <div className="feature-title">Download Once</div>
            <div className="feature-text">All scripts available offline</div>
          </div>

          <div className="feature-card clickable" onClick={onComplete}>
            <div className="feature-icon">🔍</div>
            <div className="feature-title">Quick Search</div>
            <div className="feature-text">Find roles and tips instantly</div>
          </div>

          <div className="feature-card clickable" onClick={onComplete}>
            <div className="feature-icon">⭐</div>
            <div className="feature-title">Save Favorites</div>
            <div className="feature-text">Mark and organize your roles</div>
          </div>

          <div className="feature-card clickable" onClick={onComplete}>
            <div className="feature-icon">🖨️</div>
            <div className="feature-title">Print Ready</div>
            <div className="feature-text">Export scripts for practice</div>
          </div>
        </div>

        {/* Call to Action Button */}
        <button className="get-started-btn" onClick={onComplete}>
          Get Started
        </button>

        {/* Footer Text */}
        <p className="welcome-footer">
          Learn the 8 standard Toastmasters roles with scripts and tips
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;

