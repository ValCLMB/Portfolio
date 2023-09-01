import { motion } from "framer-motion";
export const Icon = () => {
  return (
    <motion.svg
      initial={{ scale: 8, x: 500, y: 500 }}
      animate={{ scale: 1, x: 0, y: 0 }}
      transition={{
        duration: 1,
        delay: 1.2,
        ease: "easeOut",
      }}
      width="44"
      height="43"
      viewBox="0 0 44 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        d="M10.3747 5.13818C2.20802 11.1382 -7.32531 25.0381 13.8747 40.6382C5.37469 18.1382 17.8747 12.6382 22.8747 24.1382C26.8747 33.3382 28.0414 38.9715 27.8747 41.1382C19.708 35.3048 8.87469 24.1382 32.8747 22.1382C41.208 21.6382 46.8747 5.63818 23.8747 1.13818C8.87469 -0.361811 30.2312 10.8049 40.0645 12.6382C50.8747 39.1382 28.3747 25.1382 10.3747 5.13818Z"
        stroke="white"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0 2000"
          dur="5s"
          repeatCount="indefinite"
        />
      </motion.path>
    </motion.svg>
  );
};
