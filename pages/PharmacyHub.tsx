
import React from 'react';
import { View } from '../types';
import Navigation from '../components/Navigation';

interface PharmacyHubProps {
  onNavigate: (view: View) => void;
}

const PharmacyHub: React.FC<PharmacyHubProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-12 pb-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => onNavigate(View.DASHBOARD)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
        </button>
        <h1 className="text-lg font-extrabold tracking-tight">Pharmacy Hub</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </header>

      <main className="flex-1 px-6 pb-12 overflow-y-auto no-scrollbar">
        {/* Featured Pharmacy Card */}
        <div className="mt-6 p-6 bg-white dark:bg-surface-dark rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="flex items-start gap-5 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-blue-500/10 dark:from-secondary/20 p-0.5 shrink-0">
              <img alt="Pharmacy" className="w-full h-full object-cover rounded-[14px] border border-white dark:border-slate-700" src="https://picsum.photos/seed/medstore/200" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">Green Valley Care</h2>
                <div className="flex items-center gap-0.5 text-amber-500">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-[11px] font-bold">4.9</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Primary Pharmacy • 1.2 miles away</p>
              <div className="flex gap-2 mt-3">
                <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Open Now</span>
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Preferred Partner</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3 relative z-10">
            <button className="flex-1 bg-secondary text-white py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-secondary/20 active:scale-95 transition-all">Chat with Pharmacist</button>
            <button className="flex-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-2.5 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-700 active:scale-95 transition-all">View Details</button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <section className="mt-8">
          <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 px-1">Prescription Services</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Refill', icon: 'autorenew', color: 'text-secondary', bg: 'bg-secondary/10', desc: 'Active scripts' },
              { title: 'Transfer', icon: 'move_up', color: 'text-primary', bg: 'bg-primary/10', desc: 'Switch pharmacy' },
              { title: 'New Script', icon: 'add_task', color: 'text-amber-500', bg: 'bg-amber-500/10', desc: 'Scan paper Rx' },
              { title: 'Price Check', icon: 'payments', color: 'text-emerald-500', bg: 'bg-emerald-500/10', desc: 'Coupon lookup' },
            ].map((item, i) => (
              <button key={i} className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-left group active:scale-95 transition-all">
                <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-xl font-bold">{item.icon}</span>
                </div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">{item.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Pending Orders */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Active Orders</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">1 Item</span>
          </div>
          
          <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 shrink-0">
              <span className="material-symbols-outlined text-2xl">pill</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Atorvastatin 20mg</h4>
                <span className="text-primary font-bold text-xs">$12.40</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Refill #2412 • Processing</p>
              <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="mt-8 pb-10">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl p-5 text-white flex items-center justify-between">
            <div className="flex-1 pr-4">
              <h4 className="font-bold text-sm">Need Meds Delivered?</h4>
              <p className="text-[10px] text-slate-400 mt-1">Our partners offer free delivery for orders over $25.</p>
            </div>
            <button className="bg-white text-slate-900 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-all">Setup</button>
          </div>
        </section>
      </main>

      <Navigation currentView={View.PHARMACY} onNavigate={onNavigate} />
    </div>
  );
};

export default PharmacyHub;
