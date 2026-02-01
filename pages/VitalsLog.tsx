
import React from 'react';

interface VitalsLogProps {
  onBack: () => void;
  onSave: () => void;
}

const VitalsLog: React.FC<VitalsLogProps> = ({ onBack, onSave }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-surface-dark">
      <header className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
        </button>
        <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">Log Vitals</h1>
        <div className="w-8"></div>
      </header>

      <main className="px-6 py-4 space-y-8 flex-1 overflow-y-auto">
        <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="text-xs text-primary font-bold">Ensure the patient is in a relaxed state before measuring.</p>
        </div>

        <div className="space-y-6">
          <section>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Blood Pressure (mmHg)</label>
            <div className="flex items-center gap-4">
              <input type="number" placeholder="120" className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 px-6 text-xl font-bold focus:ring-2 focus:ring-primary dark:text-white" />
              <span className="text-slate-300">/</span>
              <input type="number" placeholder="80" className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 px-6 text-xl font-bold focus:ring-2 focus:ring-primary dark:text-white" />
            </div>
          </section>

          <section>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Heart Rate (BPM)</label>
            <input type="number" placeholder="72" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 px-6 text-xl font-bold focus:ring-2 focus:ring-secondary dark:text-white" />
          </section>

          <section>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Blood Glucose (mg/dL)</label>
            <div className="space-y-3">
              <input type="number" placeholder="95" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 px-6 text-xl font-bold focus:ring-2 focus:ring-tertiary dark:text-white" />
              <div className="flex gap-2">
                {['Before Meal', 'After Meal', 'Fasting'].map((tag) => (
                  <button key={tag} className="flex-1 py-2 rounded-xl text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="p-6 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800">
        <button onClick={onSave} className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all">
          Save Record
        </button>
      </footer>
    </div>
  );
};

export default VitalsLog;
