import React, { useState, useEffect } from 'react'
import { IoWifi, IoCellular, IoBatteryFull } from "react-icons/io5";

import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playgroundImg from '../assets/playground.png'

export default function Qzone() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="flex justify-center items-center py-12 bg-transparent">
      
      {/* --- Modern Flagship Device Frame --- */}
      <div className="relative mx-auto bg-[#080808] border-[10px] border-[#1a1a1a] rounded-[3.2rem] h-[650px] w-[380px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] outline outline-1 outline-white/10">
        
        {/* Antenna Lines (Modern Detail) */}
        <div className="absolute top-10 -left-[10px] w-1 h-4 bg-white/5"></div>
        <div className="absolute bottom-10 -left-[10px] w-1 h-4 bg-white/5"></div>

        {/* Side Buttons - Integrated & Sleek */}
        <div className="absolute -right-[12px] top-28 w-[3px] h-10 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-sm"></div>
        <div className="absolute -right-[12px] top-44 w-[4px] h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-sm shadow-sm"></div>

        {/* Dynamic Island Style / Punch Hole */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40">
          <div className="w-20 h-5 bg-black rounded-3xl flex items-center justify-center border border-white/5">
             {/* Tiny Camera Lens */}
             <div className="absolute right-4 w-2 h-2 bg-[#0d0d0d] rounded-full border border-blue-900/30">
                <div className="w-0.5 h-0.5 bg-blue-400/20 rounded-full m-auto mt-0.5"></div>
             </div>
          </div>
        </div>
        
        {/* Inner Screen Glow Effect */}
        <div className="w-full h-full bg-base-100 rounded-[2.5rem] overflow-hidden flex flex-col relative border border-black/20">
          
          {/* Status Bar - Clean & Modern */}
          <div className="h-12 flex justify-between items-end px-8 pb-1.5 text-[13px] font-bold z-20 bg-base-100/40 backdrop-blur-xl">
            <span className="tracking-tighter">{formattedTime}</span>
            <div className="flex items-center gap-1.5 opacity-80">
              <IoCellular size={14} className="text-primary" />
              <IoWifi size={15} />
              <div className="relative">
                <IoBatteryFull size={18} className="text-success" />
              </div>
            </div>
          </div>

          {/* Main App Content */}
          <div className="flex-1 overflow-y-auto p-5 scrollbar-hide">
            <div className="flex flex-col items-center mb-8 mt-2">
                <span className="px-3 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full mb-1 tracking-widest uppercase">Premium Access</span>
                <h2 className="text-2xl font-black text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-base-content to-base-content/60">
                Q-ZONE
                </h2>
            </div>

            <div className="space-y-6 pb-6">
              {[
                { img: swimmingImg, label: "Blue Waves Pool", tag: "Open" },
                { img: classImg, label: "Smart Classroom", tag: "Live" },
                { img: playgroundImg, label: "Main Playground", tag: "Safe" }
              ].map((item, index) => (
                <div key={index} className="group flex flex-col items-center bg-base-200/50 hover:bg-base-200 transition-colors duration-500 rounded-[1.8rem] overflow-hidden border border-base-300 shadow-sm">
                  <div className="relative w-full overflow-hidden">
                    <img 
                        src={item.img} 
                        alt={item.label} 
                        className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <span className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md text-white text-[9px] rounded-lg font-bold uppercase">{item.tag}</span>
                  </div>
                  <div className="py-4 px-4 w-full flex justify-between items-center">
                     <p className="text-xs font-black opacity-80 uppercase tracking-widest">{item.label}</p>
                     <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-primary rotate-45 ml-[-2px]"></div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Bar - Pill Shape Style */}
          <div className="h-14 bg-base-200/30 backdrop-blur-2xl flex justify-around items-center px-12">
             <div className="w-1.5 h-4 bg-base-content/20 rounded-full transition-all hover:bg-primary"></div> {/* Vertical Back Bar */}
             <div className="w-10 h-10 border border-base-content/10 bg-base-100 rounded-2xl shadow-sm flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-primary/60 rounded-full"></div>
             </div> {/* Home Button */}
             <div className="grid grid-cols-2 gap-0.5 opacity-30">
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
             </div> {/* Recent Task Grid */}
          </div>

          {/* Bottom Swipe Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-base-content/10 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}