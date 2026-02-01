
import React from 'react';

interface CareReminderProps {
  onBack: () => void;
  onComplete: () => void;
}

const CareReminder: React.FC<CareReminderProps> = ({ onBack, onComplete }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden min-h-[750px] flex flex-col">
        <div className="flex justify-between items-center p-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold text-xs shadow-md">
              <span className="material-icons-round text-sm">medical_services</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              Theek<span className="text-primary">Hai</span>
            </span>
          </div>
          <button onClick={onBack} className="text-slate-400 hover:text-slate-600 transition-colors">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center px-6 pt-4 pb-8 relative z-10">
          <div className="relative mb-6 mt-4">
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl transform scale-150"></div>
            <div className="w-32 h-32 rounded-full bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-lg flex items-center justify-center relative z-10">
              <img alt="Pills" className="w-16 h-16 object-contain" src="https://picsum.photos/seed/meds/100" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center text-white shadow-lg">
                <span className="material-icons-round text-lg">schedule</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2 mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-secondary">Time for your meds</p>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Metformin 500mg
            </h1>
            <p className="text-slate-500 text-lg">Take 1 tablet with food</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-secondary rounded-full text-sm mt-2 font-bold">
              <span className="material-icons-round text-sm">restaurant</span>
              <span>Just after lunch</span>
            </div>
          </div>

          <div className="w-full mb-8">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl flex items-start gap-3 border border-slate-100 dark:border-slate-800">
              <img alt="Sarah" className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-700 shadow-sm" src="https://picsum.photos/seed/sarah/50" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                  <span className="font-bold text-slate-900 dark:text-white">Sarah (Daughter)</span> says:
                  "Don't forget to drink a full glass of water with this one, Dad! ❤️"
                </p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 mt-auto">
            <button onClick={onComplete} className="w-full relative flex items-center justify-center gap-3 bg-secondary hover:brightness-110 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all active:scale-95">
              <span className="material-icons-round text-2xl">check_circle</span>
              <span className="text-lg">I've Taken It</span>
            </button>
            <button onClick={onBack} className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold py-4 px-6 rounded-2xl transition-colors">
              <span className="material-icons-round">snooze</span>
              <span>Snooze for 15m</span>
            </button>

            <div className="relative pt-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-slate-800"></div></div>
              <div className="relative flex justify-center"><span className="px-2 bg-white dark:bg-surface-dark text-xs text-slate-400 font-bold uppercase tracking-widest">Need Support?</span></div>
            </div>

            <button className="w-full flex items-center justify-between p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-icons-round">campaign</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 dark:text-white">Ask for Help</p>
                  <p className="text-xs text-slate-500">Notifies your Care Circle</p>
                </div>
              </div>
              <span className="material-icons-round text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareReminder;
