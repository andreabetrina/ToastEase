import React, { useState } from 'react';
import { APP_CONSTANTS } from '../constants';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleUpcomingFeatures = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        {/* Icon: Microphone */}
        <div className="icon-container">
          <div className="microphone-icon">
            <span className="mic-symbol">🎤</span>
          </div>
        </div>

        {/* App Name and Tagline */}
        <h1 className="welcome-title">ToastEase</h1>
        <p className="welcome-subtitle">Master the Art of Public Speaking</p>

        {/* Navigation Buttons */}
        <div className="nav-buttons-container">
          <button className="nav-btn primary-btn" onClick={onComplete}>
            <span className="btn-icon">📜</span>
            <span className="btn-text">Get the Scripts</span>
          </button>

          <button className="nav-btn secondary-btn" onClick={handleUpcomingFeatures}>
            <span className="btn-icon">🚀</span>
            <span className="btn-text">Upcoming Features</span>
          </button>
        </div>
      </div>

      {/* Modal for Upcoming Features */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Upcoming Features</h2>
            <p className="modal-message">Still working on adding features</p>
            <button className="modal-close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;

