
import React from 'react';
import { View } from '../types';
import Navigation from '../components/Navigation';

interface PrivacySettingsProps {
  onNavigate: (view: View) => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const PrivacySettings: React.FC<PrivacySettingsProps> = ({ onNavigate, toggleDarkMode, isDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="pt-12 pb-5 px-6 flex items-center justify-between bg-white dark:bg-surface-dark sticky top-0 z-40 border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => onNavigate(View.DASHBOARD)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
        </button>
        <h1 className="text-lg font-extrabold tracking-tight">App Settings</h1>
        <div className="w-8"></div>
      </header>

      <main className="flex-1 px-6 py-8 overflow-y-auto space-y-8 no-scrollbar">
        {/* Profile Card */}
        <section className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
          <div className="relative">
            <img src="https://picsum.photos/seed/sarah/100" alt="Sarah" className="w-16 h-16 rounded-2xl object-cover" />
            <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-lg shadow-md border-2 border-white dark:border-surface-dark">
              <span className="material-symbols-outlined text-[12px] block font-bold">edit</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">Sarah Jennings</h2>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Primary Caregiver</p>
          </div>
        </section>

        {/* Demo Quick Access */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-extrabold text-primary uppercase tracking-widest px-1">Demo Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => onNavigate(View.REMINDER)}
              className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl border border-primary/20 text-left active:scale-95 transition-all"
            >
              <span className="material-icons-round text-primary mb-2 block">alarm</span>
              <span className="text-xs font-bold text-slate-800 dark:text-white">Care Reminder</span>
            </button>
            <button 
              onClick={() => onNavigate(View.MED_DETAIL)}
              className="bg-secondary/10 dark:bg-secondary/20 p-4 rounded-2xl border border-secondary/20 text-left active:scale-95 transition-all"
            >
              <span className="material-icons-round text-secondary mb-2 block">medication</span>
              <span className="text-xs font-bold text-slate-800 dark:text-white">Med Routine</span>
            </button>
          </div>
        </section>

        {/* Global Controls */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">App Customization</h3>
          <div className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm divide-y divide-slate-50 dark:divide-slate-800">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined text-xl">dark_mode</span>
                </div>
                <div>
                  <p className="font-extrabold text-slate-800 dark:text-white text-sm">Dark Theme</p>
                  <p className="text-[10px] text-slate-400 font-medium">Eye comfort for night usage</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined text-xl">vibration</span>
                </div>
                <div>
                  <p className="font-extrabold text-slate-800 dark:text-white text-sm">Haptic Feedback</p>
                  <p className="text-[10px] text-slate-400 font-medium">Tactile response on actions</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Data & Security */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Security & Circle</h3>
          <div className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm divide-y divide-slate-50 dark:divide-slate-800">
            {['Manage Care Circle', 'Privacy Policy', 'Export Health Data'].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50 dark:active:bg-slate-800 transition-colors">
                <span className="font-bold text-slate-800 dark:text-white text-sm">{item}</span>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-4 pb-10">
          <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-rose-100 dark:border-rose-900/30 rounded-2xl text-rose-500 font-extrabold text-xs uppercase tracking-widest hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
          </button>
          <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-6">TheekHai Companion • v1.2.4-Demo</p>
        </section>
      </main>

      <Navigation currentView={View.SETTINGS} onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacySettings;
