import { User, Linkedin, MessageSquare } from 'lucide-react';

export default function AlumniCard({ member }: { member: any }) {
  return (
    <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500">
      <div className="flex items-start justify-between mb-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border-2 border-white overflow-hidden shadow-inner">
          {member.profile_pic ? (
            <img src={member.profile_pic} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#006837]">
              <User size={32} />
            </div>
          )}
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getHouseStyle(member.house)}`}>
          {member.house}
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#006837] transition-colors">
          {member.full_name}
        </h3>
        <p className="text-sm text-slate-500 font-medium">{member.profession}</p>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-[#006837] text-white py-3 rounded-xl text-xs font-bold hover:bg-green-800 transition shadow-lg shadow-green-100 flex items-center justify-center gap-2">
          <MessageSquare size={14} /> Message
        </button>
        <button className="w-12 h-12 flex items-center justify-center border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-100 transition">
          <Linkedin size={18} />
        </button>
      </div>
    </div>
  );
}

const getHouseStyle = (house: string) => {
  switch(house) {
    case 'Green': return 'bg-green-100 text-green-700';
    case 'Red': return 'bg-red-100 text-red-700';
    case 'Blue': return 'bg-blue-100 text-blue-700';
    case 'Yellow': return 'bg-yellow-100 text-yellow-700';
    default: return 'bg-slate-100 text-slate-700';
  }
}