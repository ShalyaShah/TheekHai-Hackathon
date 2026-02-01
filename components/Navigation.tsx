
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: View.DASHBOARD, label: 'Home', icon: 'home' },
    { view: View.ACTIVITY, label: 'Activity', icon: 'history' },
    { view: View.PHARMACY, label: 'Pharmacy', icon: 'assignment' },
    { view: View.TIMELINE, label: 'Timeline', icon: 'show_chart' },
    { view: View.SETTINGS, label: 'Settings', icon: 'settings' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pb-safe pt-2 px-2 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`flex flex-col items-center justify-center flex-1 transition-colors ${
              currentView === item.view ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            <span className="material-icons-round text-2xl">{item.icon}</span>
            <span className="text-[10px] font-bold tracking-tight mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
