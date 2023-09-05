import { Figma, GitCommit } from "lucide-react";
import "./Skills.css";
import { SkillsBlock } from "./SkillsBlock/SkillsBlock";
import { ReactComponent as Mysql } from "./../../assets/icons/mysql.svg";
import { ReactComponent as Php } from "./../../assets/icons/php.svg";
import { ReactComponent as React } from "./../../assets/icons/react.svg";
import { ReactComponent as Typescript } from "./../../assets/icons/typescript.svg";
import { ReactComponent as Tailwind } from "./../../assets/icons/tailwindcss.svg";
import { Title } from "../Title/Title";
// import { Title } from "../Title/Title";

export const Skills = () => {
  const skills = {
    Design: [
      { name: "figma", Icon: Figma },
      { name: "tailwind", Icon: Tailwind },
    ],
    "Front-end": [
      { name: "react", Icon: React, highlight: true },
      { name: "typescript", Icon: Typescript },
    ],
    "Back-end": [
      { name: "php", Icon: Php },
      { name: "mysql", Icon: Mysql },
    ],
    Others: [{ name: "git", Icon: GitCommit }],
  };

  return (
    <section className="skills py-60">
      {/* <Title>Skills</Title> */}
      <div className="flex  justify-between">
        {Object.entries(skills).map(([title, skills]) => (
          <SkillsBlock key={title} title={title} skills={skills} />
        ))}
      </div>
    </section>
  );
};
