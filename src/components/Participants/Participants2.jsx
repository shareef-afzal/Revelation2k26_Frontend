

import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const StatBlock = ({ number, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(number);
    }
  }, [isInView, number, springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="relative group cursor-pointer"
    >
      {/* Terminal-style container */}
      <div className="relative bg-neutral-900/40 border border-neutral-800 p-6 md:p-8 rounded-lg backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-red-600/50">

        {/* Decorative "Code" elements */}
        <div className="absolute top-2 right-3 font-mono text-[10px] text-neutral-700 select-none">
          0x00{index + 1}
        </div>

        {/* Red Accent Corner */}
        <div className="absolute top-0 left-0 w-10 h-[3px] bg-red-600 shadow-[0_0_10px_#ef4444]" />
        <div className="absolute top-0 left-0 w-[3px] h-10 bg-red-600 shadow-[0_0_10px_#ef4444]" />

        {/* Label as a "Comment" */}
        <p className="font-mono text-red-500/80 text-sm md:text-base mb-2">
          <span className="opacity-50">//</span> {label.replace(" ", "_").toLowerCase()}
        </p>

        {/* Animated Number */}
        <div className="flex items-baseline gap-1">
          <motion.span className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {displayValue}
          </motion.span>
          <span className="text-red-600 font-black text-4xl md:text-6xl">+</span>
        </div>

        {/* Tech Footer */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="h-full bg-gradient-to-r from-red-600 to-red-400"
            />
          </div>
          <span className="text-xs md:text-sm font-mono text-neutral-500 italic">READY</span>
        </div>
      </div>
    </motion.div>
  );
};

const Participants = () => {
  const stats = [
    { number: 40, label: "Years of Legacy" },
    { number: 12, label: "Events" },
    { number: 5000, label: "Participants" },
    { number: 20, label: "Colleges" },
  ];

  return (
    <div className="w-full bg-black py-20 px-6 relative overflow-hidden">
      {/* Background Grid Pattern - Very subtle */}
      <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: `radial-gradient(#ef4444 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatBlock
              key={index}
              index={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participants;

// import React, { useRef, useEffect, useState } from "react";
// import { motion, useInView, useSpring, useTransform } from "framer-motion";

// const StatHexagon = ({ number, label, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const springValue = useSpring(0, {
//     stiffness: 40,
//     damping: 20,
//   });

//   const displayValue = useTransform(springValue, (latest) => Math.round(latest));
//   const [renderValue, setRenderValue] = useState(0);

//   useEffect(() => {
//     if (isInView) springValue.set(number);
//   }, [isInView, number, springValue]);

//   useEffect(() => {
//     return displayValue.on("change", (latest) => setRenderValue(latest));
//   }, [displayValue]);

//   return (
//     <div ref={ref} className="relative w-full max-w-[240px] aspect-[1/1.1] flex items-center justify-center group mx-auto">
//       {/* SVG Border Trace */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 115" fill="none">
//         <motion.polygon
//           points="50,2 98,28 98,87 50,113 2,87 2,28"
//           stroke="#ef4444"
//           strokeWidth="1.5"
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
//           transition={{ duration: 2, ease: "easeInOut", delay: index * 0.2 }}
//           style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))" }}
//         />
//       </svg>

//       {/* Hexagon Background */}
//       <div 
//         className="absolute inset-2 bg-neutral-900/60 backdrop-blur-sm group-hover:bg-red-950/20 transition-all duration-500 border border-white/5"
//         style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
//       />

//       {/* Content */}
//       <div className="relative z-30 flex flex-col items-center text-center px-2">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           className="text-4xl lg:text-5xl font-black text-white tracking-tighter flex items-baseline gap-1"
//         >
//           {renderValue.toLocaleString()}
//           <span className="text-red-500 text-4xl lg:text-5xl">+</span>
//         </motion.div>

//         <p className="font-mono text-red-500 text-[8px] md:text-xs mt-2 tracking-[0.1em] uppercase font-bold leading-tight">
//           {`//_${label.replace(/\s+/g, '_').toLowerCase()}_`}
//         </p>


//         <div className="mt-3 font-mono text-[8px] md:text-sm text-green-500 font-bold border border-green-500/30 px-2 py-0.5 rounded flex items-center gap-1">
//           [success : OK ]
//         </div>
//       </div>
//       <div className="absolute w-32 h-32 bg-red-600/5 rounded-full blur-[50px] group-hover:bg-red-600/10 transition-all duration-700" />
//     </div>
//   );
// };

// const Participants = () => {
//   const stats = [
//     { number: 40, label: "Years of Legacy" },
//     { number: 12, label: "Events" },
//     { number: 5000, label: "Participants" },
//     { number: 20, label: "Colleges" },
//   ];

//   return (
//     <div className="w-full bg-[#050505] py-20 px-4 relative overflow-hidden">
//       {/* Subtle Background Grid */}
//       <div 
//         className="absolute inset-0 opacity-[0.15] pointer-events-none" 
//         style={{ 
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
//           backgroundSize: '120px 120px' 
//         }} 
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
       

//         {/* 4 In A Row Grid Logic */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-4">
//           {stats.map((stat, index) => (
//             <StatHexagon 
//               key={index} 
//               index={index} 
//               number={stat.number} 
//               label={stat.label} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Participants;