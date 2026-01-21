import React, { useState, useEffect } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RoleScriptsScreen from './src/screens/RoleScriptsScreen';
import { APP_CONSTANTS } from './src/constants';
import './App.css';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  const checkIfFirstLaunch = async () => {
    try {
      const hasSeenWelcome = localStorage.getItem('toastease_welcome_seen');
      if (hasSeenWelcome === 'true' && APP_CONSTANTS.WELCOME_ENABLED) {
        setShowWelcome(false);
      }
    } catch (error) {
      console.error('Error checking welcome status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWelcomeComplete = async () => {
    try {
      localStorage.setItem('toastease_welcome_seen', 'true');
      setShowWelcome(false);
    } catch (error) {
      console.error('Error saving welcome status:', error);
      setShowWelcome(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: APP_CONSTANTS.COLORS.LIGHT_BG,
      }}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="branded-header" onClick={() => setShowWelcome(true)} style={{ cursor: 'pointer' }}>
        <div className="branded-header-logo">🎤</div>
        <h1 className="branded-header-title">ToastEase</h1>
      </div>
      {showWelcome ? (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      ) : (
        <RoleScriptsScreen onGoHome={() => setShowWelcome(true)} />
      )}
    </div>
  );
}

