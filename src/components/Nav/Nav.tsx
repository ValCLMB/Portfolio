import "./Nav.css";
import { motion } from "framer-motion";
import { popUp } from "../../animation/pop";

type SocialMediaTagProps = {
  text: string;
  href: string;
  delay: number;
};

const NavItem = ({ text, href, delay }: SocialMediaTagProps) => {
  const animationLabels = {
    initial: "hidden",
    animate: "visible",
  };

  return (
    <motion.li
      {...animationLabels}
      variants={popUp}
      custom={delay}
      className="nav-item text-xl"
    >
      <a href={href} className="flex">
        {text}
      </a>
    </motion.li>
  );
};

const socialMedia = [
  {
    text: "About",
    href: "#",
  },
  {
    text: "Project",
    href: "#",
  },
  {
    text: "Contact me",
    href: "#",
    mail: true,
  },
];

export const Nav = () => {
  return (
    <section className="flex gap-5 mt-2.5">
      <ol className="flex gap-5">
        {socialMedia.map((socialMediaTag, key) => (
          <NavItem
            key={socialMediaTag.text}
            text={socialMediaTag.text}
            href={socialMediaTag.href}
            delay={1.9 + (key + 1) * 0.2}
          />
        ))}
      </ol>
    </section>
  );
};
