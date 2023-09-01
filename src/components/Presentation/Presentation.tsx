import { motion } from "framer-motion";
import "./Presentation.css";

export const Presentation = () => {
  const initalDelay = 2.5;
  const opacity = {
    hidden: { opacity: 0 },
    visible: ({ delay = 0, opacity = 1 }) => ({
      opacity: opacity,
      transition: {
        duration: 0.3,
        delay: initalDelay + delay,
      },
    }),
  };

  const animationLabels = {
    initial: "hidden",
    animate: "visible",
  };

  return (
    <section className="presentation h-screen py-96">
      <motion.h2
        {...animationLabels}
        variants={opacity}
        custom={{ delay: 0 }}
        className="font-bold text-4xl mb-4"
      >
        Valentin COULOMB
      </motion.h2>
      <motion.p {...animationLabels} variants={opacity} custom={{ delay: 0.3 }}>
        Web developer from France.
      </motion.p>
      <motion.p
        {...animationLabels}
        variants={opacity}
        custom={{ delay: 0.6, opacity: 0.7 }}
      >
        Passionate about design, code and learning new things!
      </motion.p>
    </section>
  );
};
