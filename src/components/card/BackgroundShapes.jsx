import { Star, Triangle, Plus, User } from "lucide-react";

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden md:block overflow-hidden">

      {/* 🔴 BIG RED (with star) */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-red-500 rounded-full shadow-[10px_10px_0px_#b91c1c]">
        <Star className="absolute top-[40%] left-[40%] text-yellow-300 w-6 h-6" />
      </div>

      {/* 🔵 LEFT CYAN SHAPE */}
      <div className="absolute left-[-80px] bottom-[20%] w-[200px] h-[200px] bg-cyan-400 rounded-[60%] shadow-[8px_8px_0px_#0891b2]">
        <Triangle className="absolute bottom-10 left-12 text-yellow-300 w-6 h-6" />
      </div>

      {/* 🟣 PURPLE CIRCLE */}
      <div className="absolute left-[20%] top-[60%] w-24 h-24 bg-purple-500 rounded-full shadow-[6px_6px_0px_#6b21a8]" />

      {/* 🔴 SMALL RING */}
      <div className="absolute left-[25%] top-[75%] w-10 h-10 border-4 border-red-400 rounded-full" />

      {/* ➕ PLUS ICON */}
      <div className="absolute left-[35%] bottom-[10%] text-green-400">
        <Plus size={30} />
      </div>

      {/* 🟡 TOP RIGHT BIG */}
      <div className="absolute right-[10%] top-[10%] w-[180px] h-[180px] bg-yellow-400 rounded-full shadow-[8px_8px_0px_#ca8a04]" />

      {/* 🟡 RING */}
      <div className="absolute right-[15%] top-[30%] w-16 h-16 border-4 border-yellow-300 rounded-full" />

      {/* 🟠 SMALL ORANGE */}
      <div className="absolute right-[12%] top-[40%] w-14 h-14 bg-orange-400 rounded-full opacity-80" />

      {/* 🔺 TRIANGLE */}
      <div className="absolute right-[10%] bottom-[35%] text-red-500">
        <Triangle size={40} />
      </div>

      {/* ✨ STAR */}
      <div className="absolute right-[18%] bottom-[25%] text-cyan-400">
        <Star size={20} />
      </div>

      {/* 🟦 FLOATING SQUARE */}
      <div className="absolute right-[20%] bottom-[15%] w-12 h-12 bg-cyan-500 rounded-lg rotate-12 shadow-[5px_5px_0px_#0e7490]" />

      {/* 🟢 BIG GREEN BLOB */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[280px] h-[280px] bg-green-500 rounded-full shadow-[10px_10px_0px_#15803d]" />

      
      

    </div>
  );
}