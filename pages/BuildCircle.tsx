
import React from 'react';

interface BuildCircleProps {
  onContinue: () => void;
  onSkip: () => void;
}

const BuildCircle: React.FC<BuildCircleProps> = ({ onContinue, onSkip }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-surface-dark">
      <div className="px-6 pt-12 pb-6 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-center mb-3 text-slate-800 dark:text-white tracking-tight leading-tight">
          Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Care Circle</span>
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-base px-2 max-w-sm">
          Let's set up the team. Add family members or caregivers to start coordinating care together.
        </p>
      </div>

      <div className="flex-1 px-6 py-4 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Members</h2>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-secondary">2 Added</span>
        </div>

        <div className="space-y-4">
          <div className="group relative flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-xl font-bold">
                ME
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-1 shadow-sm">
                <span className="material-icons-round text-emerald-500 text-sm">verified</span>
              </div>
            </div>
            <div className="ml-5 flex-1">
              <h3 className="font-bold text-lg leading-tight">You</h3>
              <p className="text-sm text-primary font-bold flex items-center mt-0.5">
                <span className="material-icons-round text-xs mr-1.5">healing</span>
                Primary Caregiver
              </p>
            </div>
            <button className="text-slate-400 p-2"><span className="material-icons-round">edit</span></button>
          </div>

          <div className="group relative flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
            <div className="relative">
              <img alt="Dad" className="h-14 w-14 rounded-full object-cover border-2 border-white dark:border-slate-700" src="https://picsum.photos/seed/dad2/100" />
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-1 shadow-sm">
                <span className="material-icons-round text-rose-500 text-sm">favorite</span>
              </div>
            </div>
            <div className="ml-5 flex-1">
              <h3 className="font-bold text-lg leading-tight">Dad</h3>
              <p className="text-sm text-rose-500 font-bold flex items-center mt-0.5">
                <span className="material-icons-round text-xs mr-1.5">medical_services</span>
                Needs Care
              </p>
            </div>
            <button className="text-slate-400 p-2"><span className="material-icons-round">more_vert</span></button>
          </div>

          <button className="w-full h-20 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all group">
            <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 flex items-center justify-center mb-1">
              <span className="material-icons-round text-xl">add</span>
            </div>
            <span className="text-sm font-bold tracking-wide">Add Person</span>
          </button>
        </div>
      </div>

      <div className="p-6 border-t border-gray-100 dark:border-gray-800 mt-auto bg-white dark:bg-surface-dark">
        <div className="flex items-center justify-center mb-6 text-sm">
          <div className="flex items-center text-slate-500">
            <span className="material-icons-round text-primary mr-2 text-lg">info</span>
            <span>You can add more people later.</span>
          </div>
        </div>
        <button 
          onClick={onContinue}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-secondary to-primary text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center group mb-2"
        >
          Continue
          <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <button 
          onClick={onSkip}
          className="w-full py-3 text-slate-400 font-bold text-sm hover:text-primary transition-colors"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default BuildCircle;
