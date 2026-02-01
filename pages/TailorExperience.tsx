
import React, { useState } from 'react';

interface TailorExperienceProps {
  onContinue: () => void;
}

const TailorExperience: React.FC<TailorExperienceProps> = ({ onContinue }) => {
  const [techComfort, setTechComfort] = useState('power');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 pt-8 pb-4 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <button className="p-2 -ml-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <span className="material-icons-round text-2xl">arrow_back</span>
        </button>
        <span className="font-display font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">TheekHai</span>
        <button className="p-2 -mr-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <span className="material-icons-round text-2xl">help</span>
        </button>
      </header>

      <main className="flex-1 px-6 pb-32 overflow-y-auto no-scrollbar">
        <div className="mb-8">
          <h1 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white mb-2">Tailor Your Experience</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Help us adjust the app to match your comfort level. You can change these anytime in settings.
          </p>
        </div>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">smartphone</span>
              Tech Comfort
            </h2>
            <span className="text-xs font-medium px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-primary">Required</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'simple', label: 'Simple & Calm', desc: 'Focus on essentials. Large buttons, fewer features.', icon: 'spa', color: 'text-green-600', bg: 'bg-green-50' },
              { id: 'balanced', label: 'Balanced', desc: 'Standard interface with helpful tooltips.', icon: 'tune', color: 'text-blue-600', bg: 'bg-blue-50' },
              { id: 'power', label: 'Power User', desc: 'Compact view, gestures, full dashboard.', icon: 'rocket_launch', color: 'text-purple-600', bg: 'bg-purple-50' },
            ].map((option) => (
              <label key={option.id} className="cursor-pointer group relative">
                <input 
                  type="radio" 
                  className="peer sr-only" 
                  name="tech_comfort" 
                  checked={techComfort === option.id}
                  onChange={() => setTechComfort(option.id)}
                />
                <div className={`p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border transition-all duration-300 flex items-center gap-4 ${techComfort === option.id ? 'border-primary bg-primary/5 shadow-soft' : 'border-gray-100 dark:border-gray-800'}`}>
                  <div className={`h-10 w-10 rounded-full ${option.bg} dark:bg-opacity-20 flex items-center justify-center shrink-0 ${option.color}`}>
                    <span className="material-symbols-outlined text-xl">{option.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors text-sm">{option.label}</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{option.desc}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${techComfort === option.id ? 'border-primary bg-primary' : 'border-gray-200 dark:border-gray-700'}`}>
                    {techComfort === option.id && <span className="material-symbols-outlined text-white text-[12px]">check</span>}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-display font-bold text-lg text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">text_fields</span>
            Text Size
          </h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="h-20 flex items-center justify-center mb-6 bg-background-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <p className="text-gray-800 dark:text-gray-200 font-medium text-sm text-center px-4">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <input type="range" className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" min="1" max="5" defaultValue="2" />
            <div className="text-center mt-4">
              <span className="text-sm font-medium text-gray-500">Current size: <span className="text-primary font-semibold">Small</span></span>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-secondary to-primary hover:brightness-110 text-white font-display font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Continue</span>
            <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TailorExperience;
