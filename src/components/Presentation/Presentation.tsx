import { SocialMedia } from "../SocialMedia/SocialMedia";
import { motion } from "framer-motion";
import "./Presentation.css";

export const Presentation = () => {
  // Animations
  const rightSlide = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.8 } },
  };

  const opacity = {
    hidden: { opacity: 0 },
    visible: ({ delay = 0, opacity = 1 }) => ({
      opacity: opacity,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    }),
  };

  const animationLabels = {
    initial: "hidden",
    animate: "visible",
  };

  return (
    <section className="presentation h-screen py-96">
      <p>
        <motion.span
          whileHover={{ scale: 1.1 }}
          {...animationLabels}
          custom={{ delay: 0 }}
          variants={opacity}
        >
          Hey,
        </motion.span>
        <motion.span
          {...animationLabels}
          variants={opacity}
          custom={{ delay: 0.5 }}
        >
          I'm
        </motion.span>
      </p>
      <motion.h1
        {...animationLabels}
        variants={rightSlide}
        className="main-title text-7xl font-bold my-5 mx-2 "
      >
        Valentin COULOMB
      </motion.h1>
      <motion.p {...animationLabels} variants={opacity} custom={{ delay: 1.3 }}>
        Web developer from France
      </motion.p>
      <motion.p
        {...animationLabels}
        variants={opacity}
        custom={{ delay: 1.7, opacity: 0.7 }}
        className="description opacity-70"
      >
        Passionate about design, code and learning new things!
      </motion.p>
      <SocialMedia />
    </section>
  );
};
