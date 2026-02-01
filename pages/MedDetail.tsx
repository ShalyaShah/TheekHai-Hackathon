
import React from 'react';

interface MedDetailProps {
  onBack: () => void;
  onComplete: () => void;
}

const MedDetail: React.FC<MedDetailProps> = ({ onBack, onComplete }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-800 dark:text-slate-100">
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-icons-round text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">Routine</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-icons-round text-2xl">more_horiz</span>
        </button>
      </header>

      <main className="px-6 pb-24 max-w-md mx-auto">
        <div className="mt-4 mb-8 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 flex items-center justify-center mb-6 shadow-glow ring-1 ring-white/50 dark:ring-white/10">
            <span className="material-icons-round text-6xl text-primary">medication</span>
            <div className="absolute -bottom-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-700 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Due Now</span>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight">Amlodipine</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">5 mg Tablet</p>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm mb-6 border border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600">
              <span className="material-icons-round text-2xl">wb_sunny</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">8:00 AM</h3>
              <p className="text-slate-500 text-sm">Every day</p>
            </div>
          </div>
          <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
          <div className="flex items-center gap-3 mt-4 text-slate-600 dark:text-slate-300 font-medium">
            <span className="material-icons-round text-xl text-secondary">restaurant</span>
            <span>Take with breakfast</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-primary mb-1">14</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Day Streak</span>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-1">26</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pills Left</span>
          </div>
        </div>

        <div className="mb-24">
          <h4 className="text-sm font-bold uppercase text-slate-400 mb-3 tracking-wide">Instructions</h4>
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            Swallow the tablet whole with a drink of water. Do not chew or crush the tablet. It is best to take it at the same time each day to maintain even blood pressure.
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pb-8 z-20">
          <div className="max-w-md mx-auto flex flex-col gap-3">
            <button onClick={onComplete} className="w-full bg-primary hover:bg-violet-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 group">
              <span className="material-icons-round group-hover:scale-110 transition-transform">check_circle</span>
              Mark as Taken
            </button>
            <button onClick={onBack} className="w-full text-slate-500 font-bold text-sm py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              Skip this dose
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedDetail;
