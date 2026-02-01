
import React from 'react';
import { View } from '../types';
import Navigation from '../components/Navigation';

interface ActivityFeedProps {
  onNavigate: (view: View) => void;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 pt-12 pb-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">Activity Log</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Real-time Care Updates</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-xl">filter_list</span>
          </button>
          <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
        </div>
      </header>

      <main className="px-6 py-6 space-y-8 overflow-y-auto no-scrollbar">
        {/* Active Alerts Row */}
        <section className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-rose-500 text-white p-2 rounded-xl shadow-lg shadow-rose-500/20">
              <span className="material-symbols-outlined block">notification_important</span>
            </div>
            <div>
              <p className="text-sm font-extrabold text-rose-900 dark:text-rose-100 leading-tight">1 Missed Medication</p>
              <p className="text-[10px] font-bold text-rose-600/70 dark:text-rose-400/70 uppercase">Action required</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate(View.REMINDER)}
            className="bg-white dark:bg-slate-800 text-rose-600 px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-sm active:scale-95 transition-all"
          >
            Fix Now
          </button>
        </section>

        {/* Date Group: Today */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Today</h2>
            <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800"></div>
          </div>

          <div className="space-y-4 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
            {[
              { 
                time: '10:30 AM', 
                type: 'Medication', 
                title: 'Metformin 500mg Taken', 
                user: 'Priya (Daughter)', 
                icon: 'medication', 
                color: 'text-secondary', 
                bg: 'bg-secondary/10',
                note: 'Dad ate well before taking it.'
              },
              { 
                time: '09:15 AM', 
                type: 'Symptom', 
                title: 'Mild Dizziness Reported', 
                user: 'Dad', 
                icon: 'warning', 
                color: 'text-amber-500', 
                bg: 'bg-amber-500/10',
                urgent: true
              },
              { 
                time: '08:00 AM', 
                type: 'Medication', 
                title: 'Multivitamin Taken', 
                user: 'Dad', 
                icon: 'check_circle', 
                color: 'text-emerald-500', 
                bg: 'bg-emerald-500/10'
              },
            ].map((item, i) => (
              <div key={i} className="relative flex gap-4 items-start group">
                <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center shrink-0 z-10 border-4 border-white dark:border-background-dark shadow-sm`}>
                  <span className="material-symbols-outlined text-lg font-bold">{item.icon}</span>
                </div>
                <div className="flex-1 bg-white dark:bg-surface-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all group-hover:shadow-md">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{item.time} • {item.type}</span>
                    {item.urgent && <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter">Follow up</span>}
                  </div>
                  <h3 className="font-extrabold text-slate-800 dark:text-white text-sm">{item.title}</h3>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <img src={`https://i.pravatar.cc/50?u=${item.user}`} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">By {item.user}</span>
                  </div>
                  {item.note && (
                    <div className="mt-3 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-2 border-slate-200 dark:border-slate-700">
                      <p className="text-[10px] text-slate-500 italic font-medium">"{item.note}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Date Group: Yesterday */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Yesterday</h2>
            <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800"></div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">5 more entries recorded</p>
            <button className="text-xs font-bold text-primary mt-2 hover:underline">View History</button>
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 right-6 z-50">
        <button className="bg-primary text-white h-14 w-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center active:scale-90 transition-all hover:brightness-110">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>

      <Navigation currentView={View.ACTIVITY} onNavigate={onNavigate} />
    </div>
  );
};

export default ActivityFeed;
