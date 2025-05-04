"use client";
import { motion } from "framer-motion";

export default function AnimatedBreaker() {
  return (
    <div className="bg-[#161514] h-screen flex flex-col justify-center overflow-hidden">
      {/* First row - moving left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="whitespace-nowrap mb-12"
      >
        <span
          className="
            inline-block text-[#DBD5C6]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px]
          "
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          CREATIVITEIT | STRATEGIE | DESIGN | CREATIVITEIT | STRATEGIE | DESIGN
          |&nbsp;
        </span>
      </motion.div>

      {/* Second row - moving right */}
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="whitespace-nowrap mb-12"
      >
        <span
          className="
            inline-block text-[#DBD5C6]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px]
          "
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          PRECISIE | DESIGN | STRATEGIE | PRECISIE | DESIGN | STRATEGIE |&nbsp;
        </span>
      </motion.div>

      {/* Third row - moving left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="whitespace-nowrap"
      >
        <span
          className="
            inline-block text-[#DBD5C6]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px]
          "
          style={{ fontFamily: "'Aboreto', serif" }}
        >
          STRATEGIE | DESIGN | PRECISIE | STRATEGIE | DESIGN | PRECISIE |&nbsp;
        </span>
      </motion.div>
    </div>
  );
}
