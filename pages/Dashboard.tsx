
import React, { useState } from 'react';
import { View } from '../types';
import Navigation from '../components/Navigation';

interface DashboardProps {
  onNavigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Morning Meds for Dad', time: '8:00 AM', status: 'completed', desc: 'Amlodipine 5mg' },
    { id: '2', title: 'Glucose Check', time: '9:30 AM', status: 'completed', desc: 'Logged: 105 mg/dL' },
    { id: '3', title: 'Pharmacist Follow-up', time: '2:00 PM', status: 'pending', urgent: true },
    { id: '4', title: 'Evening Walk', time: '5:30 PM', status: 'pending', desc: '20 mins goal' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t));
  };

  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 relative flex items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary shadow-lg text-white">
            <span className="material-icons-round text-2xl">favorite</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-secondary dark:text-secondary">Theek</span><span className="text-primary dark:text-primary">Hai</span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Good Morning, Sarah</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <span className="material-icons-round text-gray-600 dark:text-gray-300">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-background-dark"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-300 dark:border-slate-600">
            <img src="https://picsum.photos/seed/sarah/100" alt="Sarah" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="px-6 space-y-6 pt-2">
        {/* Urgent Focus Card */}
        <section>
          <div className="bg-gradient-to-br from-indigo-600 to-primary rounded-2xl p-6 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-lg text-yellow-300">event_note</span>
                  <h2 className="text-sm font-bold opacity-90 uppercase tracking-wider">Upcoming Event</h2>
                </div>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">High Priority</span>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-2xl font-extrabold leading-tight">Dad's Cardiology Visit</h3>
                <p className="text-white/80 text-sm flex items-center font-medium">
                  <span className="material-icons-round text-sm mr-1">schedule</span> 
                  10:30 AM • St. Jude Medical Center
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-white text-primary py-3 px-4 rounded-xl font-bold text-xs shadow-sm hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span className="material-icons-round text-sm">directions_car</span>
                  <span>Navigate</span>
                </button>
                <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-3 px-4 rounded-xl font-bold text-xs hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/30">
                  <span className="material-icons-round text-sm">assignment</span>
                  <span>Prep Notes</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo: Next Medication Trigger */}
        <section onClick={() => onNavigate(View.REMINDER)} className="cursor-pointer">
          <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl border border-secondary/20 shadow-sm flex items-center justify-between group active:bg-slate-50 dark:active:bg-slate-800 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center animate-pulse">
                <span className="material-icons-round text-2xl">notifications_active</span>
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Next Due: Metformin</h4>
                <p className="text-[11px] font-bold text-slate-400 uppercase">Incoming in 5 mins • Tap to View</p>
              </div>
            </div>
            <span className="material-icons-round text-slate-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
        </section>

        {/* Quick Vitals Snapshot - Clickable to VITALS_LOG */}
        <section className="grid grid-cols-2 gap-3">
          <div onClick={() => onNavigate(View.VITALS_LOG)} className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer active:scale-95 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Blood Pressure</span>
              <span className="material-icons-round text-emerald-500 text-sm">trending_down</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-800 dark:text-white">128/82</span>
              <span className="text-[10px] text-slate-400 font-bold">mmHg</span>
            </div>
            <div className="mt-2 w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[70%]"></div>
            </div>
          </div>
          <div onClick={() => onNavigate(View.VITALS_LOG)} className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer active:scale-95 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Heart Rate</span>
              <span className="material-icons-round text-slate-300 text-sm">horizontal_rule</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-800 dark:text-white">72</span>
              <span className="text-[10px] text-slate-400 font-bold">BPM</span>
            </div>
            <div className="mt-2 w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[45%]"></div>
            </div>
          </div>
        </section>

        {/* Care Circle */}
        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-lg font-extrabold text-gray-800 dark:text-white">Care Circle</h3>
            <button className="text-secondary dark:text-secondary text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
            {[
              { name: 'Dad', img: 'https://picsum.photos/seed/dad/200', active: true, status: 'Resting' },
              { name: 'Mom', img: 'https://picsum.photos/seed/mom/200', status: 'At Grocery' },
              { name: 'Nurse Joy', img: 'https://picsum.photos/seed/nurse/200', status: 'Off-duty' },
            ].map((p, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 min-w-[5rem]">
                <div className={`h-16 w-16 rounded-full p-0.5 relative ${p.active ? 'bg-gradient-to-tr from-secondary to-primary shadow-glow' : 'bg-slate-200 dark:bg-slate-700'}`}>
                  <img alt={p.name} className="h-full w-full rounded-full object-cover border-2 border-white dark:border-background-dark" src={p.img} />
                  {p.active && <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-background-dark"></div>}
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-slate-800 dark:text-white truncate w-20">{p.name}</p>
                  <p className="text-[9px] font-medium text-slate-400">{p.status}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center space-y-2 min-w-[5rem]">
              <button onClick={() => onNavigate(View.ONBOARDING_CIRCLE)} className="h-16 w-16 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all">
                <span className="material-icons-round">add</span>
              </button>
              <span className="text-[11px] font-bold text-slate-500">Invite</span>
            </div>
          </div>
        </section>

        {/* Interactive Today's Tasks */}
        <section>
          <div className="flex justify-between items-end mb-4 px-1">
            <h3 className="text-lg font-extrabold text-gray-800 dark:text-white">Daily Tasks</h3>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">{completedCount} of {tasks.length} Done</span>
          </div>
          <div className="flex flex-col space-y-3">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`p-4 rounded-2xl shadow-sm border transition-all duration-300 ${
                task.status === 'completed' 
                  ? 'bg-slate-50/50 dark:bg-surface-dark/40 border-slate-100 dark:border-slate-800' 
                  : task.urgent 
                    ? 'bg-white dark:bg-surface-dark border-l-4 border-l-primary shadow-md' 
                    : 'bg-white dark:bg-surface-dark border-slate-100 dark:border-slate-800'
              }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => toggleTask(task.id)}
                      className={`h-6 w-6 rounded-full flex items-center justify-center border-2 transition-all ${
                      task.status === 'completed' ? 'bg-secondary border-secondary' : 'border-slate-300 dark:border-slate-600 hover:border-secondary'
                    }`}>
                      {task.status === 'completed' && <span className="material-icons-round text-white text-xs">check</span>}
                    </button>
                    <div onClick={() => task.title.includes('Meds') ? onNavigate(View.MED_DETAIL) : null} className="cursor-pointer">
                      <h4 className={`font-bold text-sm transition-all ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-800 dark:text-white'}`}>
                        {task.title}
                      </h4>
                      <p className={`text-[10px] font-bold flex items-center ${task.urgent && task.status !== 'completed' ? 'text-primary' : 'text-slate-400'}`}>
                        <span className="material-icons-round text-[10px] mr-1">schedule</span>
                        {task.time} {task.desc && <span className="mx-1">•</span>} {task.desc}
                      </p>
                    </div>
                  </div>
                  {!task.status && <span className="material-icons-round text-slate-300">chevron_right</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goal Card */}
        <section className="pb-10">
          <div className="bg-secondary/10 dark:bg-secondary/20 rounded-2xl p-5 border border-secondary/20 flex items-center justify-between group cursor-pointer hover:bg-secondary/15 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-secondary/30 p-2.5 rounded-xl text-secondary shadow-sm">
                <span className="material-icons-round">water_drop</span>
              </div>
              <div>
                <h4 className="font-extrabold text-secondary text-sm">Hydration Goal</h4>
                <p className="text-[11px] text-secondary/70 font-bold">5 of 8 glasses today</p>
              </div>
            </div>
            <div className="w-14 h-14 relative">
              <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 36 36">
                <path className="text-secondary/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                <path className="text-secondary transition-all duration-1000" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="62, 100" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-secondary">62%</span>
            </div>
          </div>
        </section>
      </main>

      <Navigation currentView={View.DASHBOARD} onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;
