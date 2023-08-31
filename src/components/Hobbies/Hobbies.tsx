import {
  ChefHat,
  Footprints,
  Gamepad2,
  LucideIcon,
  MountainSnow,
  Music,
} from "lucide-react";
import "./Hobbies.css";
import { Title } from "../Title/Title";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { popUp } from "../../animation/pop";

type HobbiesPartProps = {
  name: string;
  Icon: LucideIcon;
  delay: number;
};
const Hobby = ({ name, Icon, delay }: HobbiesPartProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const control = useAnimation();

  const animationLabels = {
    initial: "hidden",
    animate: control,
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      {...animationLabels}
      variants={popUp}
      custom={delay}
      className="hobby flex items-center gap-2.5 text-xl "
    >
      <Icon size={32} strokeWidth={1.5} />
      {name}
    </motion.div>
  );
};
export const Hobbies = () => {
  const hobbies = [
    { name: "Climbing", Icon: MountainSnow },
    { name: "Hiking", Icon: Footprints },
    { name: "Cooking", Icon: ChefHat },
    { name: "Gaming", Icon: Gamepad2 },
    { name: "Music", Icon: Music },
  ];
  return (
    <section className="hobbies pb-40">
      <Title>Hobbies</Title>
      <div className="flex justify-between">
        {hobbies.map((hobby, key) => (
          <Hobby
            key={hobby.name}
            name={hobby.name}
            Icon={hobby.Icon}
            delay={key * 0.1}
          />
        ))}
      </div>
    </section>
  );
};
