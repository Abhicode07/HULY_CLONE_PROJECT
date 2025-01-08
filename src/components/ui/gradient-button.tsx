"use client";
import { PropsWithChildren, useRef } from "react";
import { motion } from "framer-motion";

const GradientButton = ({ children }: PropsWithChildren) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <motion.button
      ref={buttonRef}
      className="transition-all duration-200 uppercase font-bold flex items-center justify-center h-10 px-16 text-xs text-black -tracking-[0.015em] relative z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] space-x-1  sm:pl-[59px] sm:pr-[52px]"
    >
      <motion.div
        className="absolute -z-10 flex w-[204px] items-center justify-center"
        variants={{
          hover: {
            x: 0,
            y: 0,
          },
        }}
        animate="hover"
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        onMouseMove={(e) => {
          const rect = buttonRef.current?.getBoundingClientRect();
          if (rect) {
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
          }
        }}
      >
        <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]" />
        <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
      </motion.div>
    {children}
    </motion.button>
  );
};

export default GradientButton;
