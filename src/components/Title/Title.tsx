import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type TitleProps = PropsWithChildren;
export const Title = ({ children }: TitleProps) => {
  return (
    <motion.h2
      className="title"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      {children}
    </motion.h2>
  );
};
