import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import NormalDayLeft from "./NormalDayLeft";
import NormalDayRight from "./NormalDayRight";
import HighlightedDay from "./HighlightedDay";
import { useRef } from "react"; 
import axios from "axios";
import { API_URL } from '../config/config';

const eventSchedule = [
    {
        EventId:1, name: "Build with us", startTime: "11:00 AM ", endTime: " 3:00 PM", isLive: false, img: "src/assets/Event_img/BloodDonation.webp", id: '67dabbd1c4b1123c4c064648' ,date:"21ST March 2026"
    },
    { 
        EventId:2, name: "Inauguration", startTime: "5:00 PM ", endTime: " 7:00 PM", isLive: false, gif: "vite.svg", id: '67d8365d1fac73aa4df88cb1', flag: true  ,date:"21ST March 2026"
    },
    {
        EventId:3, name: "Root Access", startTime: "6:00 PM ", endTime: "-----", isLive: false, img: "src/assets/Event_img/RootAccess.webp", id: '67dabd1bc4b1123c4c064663'  ,date:"21ST March 2026"
    },
    { 
        EventId:4, name: "Brain Dead", startTime: "6:00 PM", endTime: "------", isLive: false, img: "src/assets/Event_img/BrainDead.webp", id: '67dabe0fc4b1123c4c0646d9'  ,date:"21ST March 2026"
    },
    { 
        EventId:5, name: "Ganitam", startTime: "7:00 PM ", endTime: " 9:00 PM", isLive: false, img: "src/assets/Event_img/Ganitam.webp", id: '67dac16ac4b1123c4c064a15'  ,date:"21ST March 2026"
    },
    {   
        EventId:6, name: "Ludo", startTime: "2:00 PM ", endTime: " 10:00 PM", isLive: false, img: "src/assets/Event_img/Ludo.webp", id:'67dacfb5c4b1123c4c065989' ,date:"21ST March 2026"
    },
    {
        EventId:7, name: "Codestorm", startTime: "3:00 PM ", endTime: " 5:00 PM", isLive: false, img: "src/assets/Event_img/codeStorm.webp",id:'67dab7f3c4b1123c4c064560'  ,date:"21ST March 2026"
    },
    {
        EventId:8, name: "Techno Quiz", startTime: "5:00 PM ", endTime: " 8:00 PM", isLive: false, img: "src/assets/Event_img/TechnoQuiz.webp",id:'67dabb39c4b1123c4c064638'  ,date:"21ST March 2026"
    },
    {
        EventId:9, name: "FIFA", startTime: "8:00 PM ", endTime: " 10:00 PM", isLive: false, img: "src/assets/Event_img/Fifa.webp",id:'67daba91c4b1123c4c064629'  ,date:"21ST March 2026"
    },
    {
        EventId:10, name: "BGMI", startTime: "11:00 PM ", endTime: " 2:00 PM", isLive: false, img: "src/assets/Event_img/Bgmi.webp",id:'67dabfa6c4b1123c4c0648c6'  ,date:"21ST March 2026"
    },
    { 
        EventId:11, name: "HackQuest", startTime: "9:00 AM", endTime: "", isLive: false, img: "src/assets/Event_img/HackQuest.webp",id:'67dac264c4b1123c4c064b3f'  ,date:"21ST March 2026"
    },
    {
        EventId:12, name: "Valorant", startTime: "10:00 AM ", endTime: " 2:00 PM", isLive: false, img: "src/assets/Event_img/Valorant.webp",id:'67dac30fc4b1123c4c064b5b'  ,date:"21ST March 2026"
    },
    {
        EventId:13, name: "Murder Mystery", startTime: "2:00 PM ", endTime: " 5:30 PM", isLive: false, img: "src/assets/Event_img/MurderMystery.webp",id:'67dac075c4b1123c4c0648f6'  ,date:"21ST March 2026"
    },
    {
        EventId:14, name: "Cultural Events", startTime: "6:00 PM ", endTime: "-----", isLive: false, gif: "vite.svg",id:'67d6a6134d8c2fab9eabc65a' ,  flag: true  ,date:"21ST March 2026"
    },
    {
        EventId:15, name: "Closing Ceremony", startTime: "6:00 PM ", endTime: "------", isLive: false, img: "",id:'67d6a6134d8c2fab9eabc65a', flag: true  ,date:"21ST March 2026"
    },
];
const events=eventSchedule;



const EventList = () => {
    // 1. Start with a default (e.g., true for Desktop layout, or false for Mobile)
// DO NOT put window.innerWidth here.
const [isDesktop, setIsDesktop] = React.useState(true);

React.useEffect(() => {
  // 2. Only access 'window' once the component is mounted (Client-side)
  if (typeof window !== "undefined") {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    
    checkScreen(); // Run once immediately
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }
}, []);
    return (
        
        <div className="relative w-full bg-transparent min-h-screen text-white flex flex-col items-center overflow-hidden pb-20 font-goldman">
            
            
            {/* CHANGED FROM 'fixed' TO 'absolute' to save your Footer */}
<div className="absolute inset-0 z-0 h-full w-full">
    <img 
        src="backgroundpunith.png"   /* 👈 Uses the import variable (Fixes the path) */
        alt="Background" 
        className="w-full h-full object-cover " 
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/80"></div>
</div>


            {/* 2. HEADER SECTION */}
            <div className="text-center mt-[60px] mb-16 z-10 px-4 pt-10">
                <h2 className="text-[#E7E7E7] text-[20px] md:text-[30px] font-bold tracking-wide uppercase font-title pt-20px">
                    Explore the Marvellous
                </h2>
                <h1 className="text-[#EE0000] text-[50px] md:text-[90px] font-title font-black tracking-tighter leading-none mt-2">
                    EVENTS
                </h1>
            </div>

            {/* 3. ZIG-ZAG LIST CONTAINER */}
            <div className="w-[92%] md:w-full flex flex-col gap-6 z-10" key={isDesktop}>
               
                
                {events.map((event, index) => {
                    
                  
                    const isEven = index % 2 === 0;

                    return (
                        
                        <motion.div 
                            key={event.id}
                            // ANIMATION LOGIC:
                            // 1. Initial Position: -100px (Left) or 100px (Right)
                            
                            initial={
                                    isDesktop 
                                       ? { opacity: 0, x: isEven ? -100 : 100 } // Desktop: Start Invisible & Slide
                               : { opacity: 1, x: 0, y: 0 }             // Mobile: Start Visible (STATIC)
                                }

                              whileInView={{ opacity: 1, x: 0, y: 0 }}
  
  /* Kill the transition duration on mobile to prevent any glitches */
                             transition={{ duration: isDesktop ? 0.6 : 0 }} 
  
                          viewport={{ once: true, margin: "-50px" }}
                            
                          
                            className={`
                                relative flex flex-col ${isEven ? 'md:flex-row md:self-start' : 'md:flex-row-reverse md:self-end'} 
                                items-stretch md:items-stretch
                                w-[95%] mx-auto md:mx-0 md:w-[90%] lg:w-[68%] 
                                bg-white/5 backdrop-blur-xl border-y border-white/10 shadow-2xl overflow-hidden relative
                                
                                /* DYNAMIC CORNERS & BORDERS */
                                ${isEven 
                                    ? 'rounded-r-3xl rounded-l-3xl md:rounded-l-none border-l-0 border-r' // Attached Left
                                    : 'rounded-l-3xl rounded-r-3xl md:rounded-r-none border-r-0 border-l' // Attached Right
                                }
                            `}
                        >
                            
                            
                            <div className={`
                                w-full md:w-[25%] p-4 flex flex-row md:flex-col justify-center gap-6 items-center 
                                order-3 md:order-none
                                
                                ${isEven ? ' border-white/10' : ' border-white/10'}
                            `}>

                                
                                <button className="text-xl md:text-xl group p-4 rounded-3xl border border-yellow-500/50 text-white hover:bg-gray-600 hover:text-white  transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                                   Details
                                   </button>

                                <button className="text-xl md:text-2xl tracking-wider group p-4 rounded-3xl border border-red-500/50 text-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                                   Register
                                </button>
                             
                            </div>


                            
                            <div className={`
                                w-full md:w-[40%] flex flex-col justify-center items-center text-center p-6 md:p-10 space-y-5
                                order-2 md:order-none
                            `}>
                                <h2 className="text-4xl md:text-5xl font-black bold tracking-tighter uppercase leading-[0.9] bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent pr-2 [-webkit-text-stroke:1px_white]">
                                    {event.name}
                                </h2>

                                <div className="grid grid-cols-2 ml-10 md:ml-0 md:flex md:flex-col  gap-3">
                                    <div className="text-sm flex items-center gap-2 px-3 py-1 md:text-xl font-bold uppercase tracking-wider">
                                        <img src="calendar-regular-full.svg" 
                                        alt="date"
                                        className="w-8 h-8 object-contain invert"/> {event.date}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 text-sm md:text-xl font-bold uppercase tracking-wider">
                                        <img src="clock-regular-full.svg" 
                                        alt="Time"
                                        className="w-8 h-8 object-contain invert"/> {event.startTime}
                                    </div>
                                     <div className="flex items-center gap-2 px-3 py-1 text-sm md:text-xl font-bold uppercase tracking-wider">
                                        <img src="location-dot-solid-full.svg" 
                                        alt="Venue"
                                        className="w-8 h-8 object-contain invert"/> {event.venue||"Institue hall"}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 text-sm md:text-xl font-bold uppercase tracking-wider">
                                        <img src="trophy-solid-full.svg" 
                                        alt="PrizeMoney"
                                        className="w-8 h-8 object-contain invert"/> {event.prizeMoney||"20000/-"}
                                    </div>
                                    
                                </div>

                               
                            </div>


                       
                         <div className={`
                          w-full md:w-[35%] 
                          max-w-[200px] md:max-w-none mx-auto md:mx-0
                          aspect-square shrink-0
                          relative group 
                          order-1 md:order-none
                         flex items-center justify-center p-4
                        `}>
    
    {/* THE INNER FRAME */}
                <div className="relative w-full aspect-square h-full rounded-2xl overflow-hidden border-[1px] border-white shadow-2xl">
        
        {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                     <img 
                      src={event.img || "vite.svg"} 
                       alt={event.name} 
                        className="absolute inset-0 w-full h-full object-cover transition duration-700 md:group-hover:scale-110"
                     />
        
        
                         </div>

                        </div>

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventList;