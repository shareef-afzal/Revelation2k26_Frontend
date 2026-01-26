import { useRef, useEffect } from "react";
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
      <div className="relative bg-neutral-900/40 border border-neutral-800 hover:shadow-[0_0_10px_#ef4444]  p-6 md:p-8 rounded-lg backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-red-600/50">

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