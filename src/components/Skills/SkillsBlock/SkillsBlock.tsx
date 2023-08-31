import "./SkillsBlock.css";
import { LucideIcon } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type SkillsBlockProps = {
  title: string;
  skills: {
    name: string;
    Icon: LucideIcon | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    highlight?: boolean;
  }[];
};

export const SkillsBlock = ({ title, skills }: SkillsBlockProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const control = useAnimation();

  const animationLabels = {
    initial: "hidden",
    animate: control,
  };

  const blockAppear = {
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, y: -10 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section>
      <motion.h3
        ref={ref}
        {...animationLabels}
        variants={blockAppear}
        className="text-2xl mb-4 font-bold"
      >
        {title}
      </motion.h3>
      {skills.map(({ Icon, name, highlight }, key) => {
        return (
          <motion.p
            key={name}
            ref={ref}
            {...animationLabels}
            variants={blockAppear}
            custom={key + 1}
            className={`skill ${highlight ? "highlight" : ""}`}
          >
            {Icon ? <Icon /> : null}
            {name}
          </motion.p>
        );
      })}
    </section>
  );
};
