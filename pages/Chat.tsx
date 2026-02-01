
import React from 'react';

interface ChatProps {
  onBack: () => void;
}

const Chat: React.FC<ChatProps> = ({ onBack }) => {
  const messages = [
    { id: 1, sender: 'Priya (Daughter)', text: 'Hey everyone, Dad finished his morning walk! He seems very energetic today.', time: '09:00 AM', isMe: false, avatar: 'https://i.pravatar.cc/150?u=priya' },
    { id: 2, sender: 'You', text: 'That is great news. Did he take his vitamins with breakfast?', time: '09:15 AM', isMe: true },
    { id: 3, sender: 'Mom', text: 'Yes, I made sure of it. I am taking him to the cardiology visit at 10:30.', time: '09:20 AM', isMe: false, avatar: 'https://i.pravatar.cc/150?u=mom' },
    { id: 4, sender: 'You', text: 'Thanks Mom! I’ll check the notes from the doctor later.', time: '09:25 AM', isMe: true },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-background-dark">
      <header className="px-6 pt-12 pb-4 bg-white dark:bg-surface-dark flex items-center gap-4 shadow-sm relative z-10">
        <button onClick={onBack} className="p-1 -ml-2 text-slate-500"><span className="material-symbols-outlined font-bold">arrow_back</span></button>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/150?u=mom" className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark" alt="" />
            <img src="https://i.pravatar.cc/150?u=priya" className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-dark" alt="" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-slate-900 dark:text-white">Care Circle Group</h1>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">3 Members Online</p>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.isMe ? 'justify-end' : 'justify-start'} items-end gap-2`}>
            {!m.isMe && m.avatar && (
              <img src={m.avatar} alt={m.sender} className="w-6 h-6 rounded-full" />
            )}
            <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
              m.isMe ? 'bg-secondary text-white rounded-br-none' : 'bg-white dark:bg-surface-dark text-slate-800 dark:text-white rounded-bl-none'
            }`}>
              {!m.isMe && <p className="text-[9px] font-bold mb-1 opacity-60 uppercase">{m.sender}</p>}
              <p className="text-sm leading-relaxed">{m.text}</p>
              <p className={`text-[8px] mt-1 text-right ${m.isMe ? 'text-white/60' : 'text-slate-400'}`}>{m.time}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="p-4 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800 pb-safe">
        <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-2xl p-2 px-4 border border-slate-100 dark:border-slate-700">
          <button className="text-slate-400"><span className="material-symbols-outlined">add_circle</span></button>
          <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 dark:text-white" />
          <button className="text-primary"><span className="material-symbols-outlined">send</span></button>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
