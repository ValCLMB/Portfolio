import "./SocialMedia.css";
import { Github, LucideIcon, Send } from "lucide-react";
import { motion } from "framer-motion";
import { popUp } from "../../animation/pop";

type SocialMediaTagProps = {
  Icon: LucideIcon;
  text: string;
  href: string;
  mail?: boolean;
  delay: number;
};

const SocialMediaTag = ({
  Icon,
  text,
  href,
  mail,
  delay,
}: SocialMediaTagProps) => {
  const animationLabels = {
    initial: "hidden",
    animate: "visible",
  };

  return (
    <motion.a
      {...animationLabels}
      variants={popUp}
      custom={delay}
      className="socialmedia-tag flex gap-2.5 py-2 text-xl"
      href={mail ? `mailto:${href}` : href}
      target="_blank"
    >
      <Icon size={24} strokeWidth={1.5} />
      {text}
    </motion.a>
  );
};

const socialMedia = [
  {
    Icon: Github,
    text: "My Github",
    href: "https://github.com/ValCLMB",
  },
  {
    Icon: Send,
    text: "Contact me",
    href: "valclmb.dev@gmail.com",
    mail: true,
  },
];

export const SocialMedia = () => {
  return (
    <section className="flex gap-5 mt-2.5">
      {socialMedia.map((socialMediaTag, key) => (
        <SocialMediaTag
          key={socialMediaTag.text}
          Icon={socialMediaTag.Icon}
          text={socialMediaTag.text}
          href={socialMediaTag.href}
          mail={socialMediaTag.mail}
          delay={1.9 + (key + 1) * 0.2}
        />
      ))}
    </section>
  );
};
