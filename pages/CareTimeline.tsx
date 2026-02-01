
import React, { useState, useEffect } from 'react';
import { View } from '../types';
import Navigation from '../components/Navigation';
import { generateHealthInsight } from '../services/geminiService';

interface CareTimelineProps {
  onNavigate: (view: View) => void;
}

const CareTimeline: React.FC<CareTimelineProps> = ({ onNavigate }) => {
  const [insight, setInsight] = useState<string>("Reviewing activity history...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInsight() {
      setIsLoading(true);
      try {
        const mockData = "Patient completed 4,000 steps daily for the last 5 days. Blood pressure has stabilized at 128/82. Missed 1 medication dose today.";
        const result = await generateHealthInsight(mockData);
        setInsight(result);
      } catch (e) {
        setInsight("Stability observed in vitals. Recent activity trends show improved morning mobility.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchInsight();
  }, []);

  const intensityData = [
    { month: 'Apr', value: 42, display: '4.2', active: false },
    { month: 'May', value: 58, display: '5.8', active: false },
    { month: 'Jun', value: 72, display: '7.2', active: false },
    { month: 'Jul', value: 65, display: '6.5', active: false },
    { month: 'Aug', value: 92, display: '9.2', active: true },
    { month: 'Sep', value: 50, display: '5.0', active: false, dashed: true },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-28">
      <header className="sticky top-0 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate(View.DASHBOARD)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined font-bold">arrow_back</span>
          </button>
          <div>
            <h1 className="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-tight">Care Journey</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Evolution of Wellness</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
        </div>
      </header>

      <main className="px-6 pt-6 space-y-8 overflow-y-auto no-scrollbar">
        {/* Gemini AI Insight Section */}
        <section>
          <div className="bg-gradient-to-br from-indigo-500/10 to-primary/10 dark:from-indigo-500/20 dark:to-primary/20 p-6 rounded-3xl border border-primary/20 dark:border-primary/30 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl transition-transform group-hover:scale-125 duration-1000"></div>
            
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="bg-white dark:bg-surface-dark p-2 rounded-xl shadow-sm text-primary">
                  <span className="material-symbols-outlined text-xl font-bold">auto_awesome</span>
                </div>
                <span className="font-display font-bold text-slate-700 dark:text-slate-200 uppercase text-[10px] tracking-widest">Smart Care Advisor</span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase">Updated Just Now</span>
            </div>

            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mb-2">Health Pattern Analysis</h2>
              {isLoading ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                </div>
              ) : (
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 font-medium">
                  {insight}
                </p>
              )}
              <div className="flex gap-2">
                <button className="flex-1 bg-white dark:bg-slate-800 text-primary dark:text-white font-bold text-[11px] px-4 py-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
                  Full Analysis
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
                <button onClick={() => onNavigate(View.CHAT)} className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm">chat</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Charts Section */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">Care Intensity</h3>
            <div className="flex bg-slate-100 dark:bg-slate-800/50 rounded-xl p-1 gap-1">
              {['W', 'M', 'Y'].map(t => (
                <button key={t} className={`w-8 h-7 flex items-center justify-center rounded-lg text-[10px] font-bold transition-all ${t === 'M' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="h-52 w-full flex items-end justify-between px-2 gap-2">
              {intensityData.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end">
                  {/* Value Label on Top */}
                  <span className={`text-[9px] font-bold mb-2 transition-opacity ${bar.active ? 'text-primary' : 'text-slate-300 group-hover:opacity-100 opacity-0'}`}>
                    {bar.display}
                  </span>
                  
                  {/* The Bar */}
                  <div className="relative w-full flex justify-center items-end" style={{ height: '70%' }}>
                    <div 
                      className={`w-4 rounded-full transition-all duration-700 group-hover:w-5 ${
                        bar.active 
                        ? 'bg-gradient-to-t from-primary to-indigo-400 shadow-lg shadow-primary/30' 
                        : bar.dashed ? 'bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                      style={{ height: `${bar.value}%` }}
                    >
                      {bar.active && (
                        <div className="absolute -top-1 right-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-sm ring-2 ring-primary"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Month Label */}
                  <span className={`mt-3 text-[10px] font-extrabold uppercase tracking-widest ${bar.active ? 'text-primary' : 'text-slate-400'}`}>
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-[11px] text-slate-500 font-bold">Wellness Trend: <span className="text-emerald-600">+12% Monthly</span></p>
              </div>
              <button className="text-[10px] font-extrabold text-secondary hover:underline tracking-widest uppercase">Details</button>
            </div>
          </div>
        </section>

        {/* Routine Milestones Timeline */}
        <section>
          <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white mb-6 px-1">Milestones & Adjustments</h3>
          <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
            {[
              { 
                date: 'AUG 15', 
                title: 'Medication Adjusted', 
                desc: 'BP dosage reduced by 2.5mg following specialist consultation.', 
                icon: 'edit_calendar', 
                color: 'bg-indigo-500', 
                label: 'Stable' 
              },
              { 
                date: 'CURRENT', 
                title: 'Mobility Goal reached', 
                desc: 'Hit 4,000 steps daily average for the first time this year!', 
                icon: 'auto_graph', 
                color: 'bg-emerald-500', 
                progress: 100,
                label: 'Target Hit'
              },
              { 
                date: 'SEP 01', 
                title: 'Upcoming: Quarterly Review', 
                desc: 'Schedule physiotherapy follow-up at the Southside Clinic.', 
                icon: 'notifications_active', 
                color: 'bg-slate-400', 
                disabled: true 
              },
            ].map((m, i) => (
              <div key={i} className={`relative flex items-start gap-4 ${m.disabled ? 'opacity-50' : ''}`}>
                <div className={`w-9 h-9 rounded-full ${m.color} text-white flex items-center justify-center shrink-0 z-10 border-4 border-white dark:border-background-dark shadow-md`}>
                  <span className="material-symbols-outlined text-sm font-bold">{m.icon}</span>
                </div>
                <div className="flex-1 bg-white dark:bg-surface-dark p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-slate-200 dark:hover:border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{m.date}</span>
                    {m.label && <span className={`${i === 1 ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'} dark:bg-opacity-20 text-[8px] px-2 py-0.5 rounded font-bold uppercase`}>{m.label}</span>}
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{m.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{m.desc}</p>
                  
                  {m.progress !== undefined && (
                    <div className="mt-4">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${m.progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Navigation currentView={View.TIMELINE} onNavigate={onNavigate} />
    </div>
  );
};

export default CareTimeline;
