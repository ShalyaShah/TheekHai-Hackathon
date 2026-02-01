
import React from 'react';

interface SplashProps {
  onStart: () => void;
}

const Splash: React.FC<SplashProps> = ({ onStart }) => {
  return (
    <div className="relative h-screen flex flex-col px-6 py-12">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <main className="relative z-10 flex flex-col h-full max-w-md mx-auto w-full">
        <div className="flex-1 flex flex-col justify-start items-center text-center pt-24">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-secondary">Theek</span><span className="text-primary">Hai</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-xl tracking-wide">
            Your Health, Our Care
          </p>
        </div>

        <div className="flex-none mb-24">
          <div className="bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-slate-700 shadow-sm">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="p-3 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full">
                <span className="material-icons-round text-primary text-3xl">favorite</span>
              </div>
              <div>
                <p className="text-2xl font-semibold leading-snug text-slate-700 dark:text-slate-200">
                  "Healthcare is <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-bold">shared</span>, everyday, and always <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary font-bold">changing</span>."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-none w-full space-y-6 mb-4">
          <button 
            onClick={onStart}
            className="group relative w-full flex items-center justify-center py-5 px-6 rounded-2xl overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform active:scale-[0.98]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary via-primary to-primary animate-gradient opacity-100"></div>
            <span className="relative flex items-center gap-2 text-white font-bold text-lg tracking-wide">
              Get Started
              <span className="material-icons-round text-xl group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </span>
          </button>
          
          <div className="text-center">
            <p className="text-base text-slate-500 dark:text-slate-400">
              Already have an account? 
              <button className="ml-1 font-bold text-primary hover:underline hover:text-secondary transition-colors">Log In</button>
            </p>
          </div>
          
          <p className="text-xs text-center text-slate-400 dark:text-slate-500 pt-4 px-8 leading-relaxed">
            By continuing, you agree to our 
            <a className="ml-1 underline decoration-slate-300 dark:decoration-slate-600" href="#">Terms of Service</a> 
            and 
            <a className="ml-1 underline decoration-slate-300 dark:decoration-slate-600" href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Splash;
