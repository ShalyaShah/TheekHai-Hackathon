
import React, { useState, useEffect } from 'react';
import { View } from './types';
import Splash from './pages/Splash';
import TailorExperience from './pages/TailorExperience';
import BuildCircle from './pages/BuildCircle';
import Dashboard from './pages/Dashboard';
import ActivityFeed from './pages/ActivityFeed';
import PharmacyHub from './pages/PharmacyHub';
import CareTimeline from './pages/CareTimeline';
import PrivacySettings from './pages/PrivacySettings';
import MedDetail from './pages/MedDetail';
import CareReminder from './pages/CareReminder';
import VitalsLog from './pages/VitalsLog';
import Chat from './pages/Chat';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.ONBOARDING_SPLASH);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderView = () => {
    switch (currentView) {
      case View.ONBOARDING_SPLASH:
        return <Splash onStart={() => setCurrentView(View.ONBOARDING_TAILOR)} />;
      case View.ONBOARDING_TAILOR:
        return <TailorExperience onContinue={() => setCurrentView(View.ONBOARDING_CIRCLE)} />;
      case View.ONBOARDING_CIRCLE:
        return <BuildCircle onContinue={() => setCurrentView(View.DASHBOARD)} onSkip={() => setCurrentView(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return <Dashboard onNavigate={(v) => setCurrentView(v)} />;
      case View.ACTIVITY:
        return <ActivityFeed onNavigate={(v) => setCurrentView(v)} />;
      case View.PHARMACY:
        return <PharmacyHub onNavigate={(v) => setCurrentView(v)} />;
      case View.TIMELINE:
        return <CareTimeline onNavigate={(v) => setCurrentView(v)} />;
      case View.SETTINGS:
        return <PrivacySettings onNavigate={(v) => setCurrentView(v)} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />;
      case View.MED_DETAIL:
        return <MedDetail onBack={() => setCurrentView(View.DASHBOARD)} onComplete={() => setCurrentView(View.DASHBOARD)} />;
      case View.REMINDER:
        return <CareReminder onBack={() => setCurrentView(View.DASHBOARD)} onComplete={() => setCurrentView(View.DASHBOARD)} />;
      case View.VITALS_LOG:
        return <VitalsLog onBack={() => setCurrentView(View.DASHBOARD)} onSave={() => setCurrentView(View.DASHBOARD)} />;
      case View.CHAT:
        return <Chat onBack={() => setCurrentView(View.TIMELINE)} />;
      default:
        return <Dashboard onNavigate={(v) => setCurrentView(v)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl">
      {renderView()}
    </div>
  );
};

export default App;
