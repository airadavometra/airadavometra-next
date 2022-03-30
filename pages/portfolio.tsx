import { ExperienceInfo } from "@/types/experienceInfo";
import { ProjectInfo } from "@/types/projectInfo";
import { SkillInfo } from "@/types/skillInfo";
import classNames from "classnames";
import type { NextPage } from "next";
import s from "@/pagesStyles/Portfolio.module.css";
import { useMedia } from "react-use";
import { SkillList } from "@/components/SkillList/SkillList";
import { ExperienceList } from "@/components/ExperienceList/ExperienceList";
import { ProjectList } from "@/components/ProjectList/ProjectList";
import { Csharp } from "@/icons/skills/Csharp";
import { DotNet } from "@/icons/skills/DotNet";
import { Html5 } from "@/icons/skills/Html5";
import { Css3 } from "@/icons/skills/Css3";
import { JavaScript } from "@/icons/skills/JavaScript";
import { TypeScript } from "@/icons/skills/TypeScript";
import { React } from "@/icons/skills/React";
import { Redux } from "@/icons/skills/Redux";
import { Sass } from "@/icons/skills/Sass";
import { Photoshop } from "@/icons/skills/Photoshop";
import { Figma } from "@/icons/skills/Figma";
import { Github } from "@/icons/contacts/Github";
import watchList from "@/public/projects/watchList.jpg";
import typesCoersion from "@/public/projects/typesCoersion.jpg";

const experienceInfoArray: ExperienceInfo[] = [
  {
    isOpen: true,
    year: "2021",
    title: "Started doing front-end",
    text: "I realized that I am actually very interested in front-end development, especially in accessibility, usability and design. So I started working with a poor and ugly CRM UI, written on .NET legacy technologies in a back-end style. I made a React components library and a pipeline based on semantic versioning rules to automatically publish it to NPM. I also created a new web app using React, Redux and TypeScript as a first example. After that I conducted a demo to my teammates. I hope I set the direction of web development.",
  },
  {
    isOpen: false,
    year: "2019",
    title: "Became a back-end developer",
    text: "I had been working on a CRM system for about two years. I had been doing new features and a lot of refactoring, because it was a really old and confusing code base... Also there was a big refactoring project for order documents processes, I had to not only rewrite existing code with new process engine but also make it process multiple customers in one request and deal with high load. That was a knotty problem! I also had been participating in architecturing and some mentoring and management.",
  },
  {
    isOpen: false,
    year: "2017",
    title: "Became a QA automation engeneer",
    text: "I started my carrier as a QA automation engeneer in CRM system just after my university graduation. I had been studying documentation and code, creating test cases, writing tests and analysing test runs. I had covered the whole code base with autotests for a year. After that I had been helping to create new team of engineers and participated in the improvement of autotesting process and tools.",
  },
  {
    isOpen: false,
    year: "2017",
    title: "Got my bachelor in computer science in RSUH, Moscow",
    text: "I had been studying a lot of maths and programming, just a little bit of everything. Oh, I wish I could remember all that...",
  },
];
const skillInfoArray: SkillInfo[] = [
  {
    skillName: "Front-end",
    skillLogos: [
      { logo: Html5, logoAlt: "html5" },
      { logo: Css3, logoAlt: "css3" },
      { logo: JavaScript, logoAlt: "javascript" },
      { logo: TypeScript, logoAlt: "typescript" },
      { logo: React, logoAlt: "react" },
      { logo: Redux, logoAlt: "redux" },
      { logo: Sass, logoAlt: "sass" },
    ],
  },
  {
    skillName: "Design",
    skillLogos: [
      { logo: Figma, logoAlt: "figma" },
      { logo: Photoshop, logoAlt: "photoshop" },
    ],
  },
  {
    skillName: "Back-end",
    skillLogos: [
      { logo: DotNet, logoAlt: "dot-net" },
      { logo: Csharp, logoAlt: "c-sharp" },
    ],
  },
];
const projectInfoArray: ProjectInfo[] = [
  {
    projectName: "Watch List",
    projectDesc:
      "This is a pet project to save all the interesting upcoming premieres and already released content in a local storage of your browser (for now). And every time you face a problem like you dont know what to watch, this app can help you.",
    projectPic: watchList,
    projectLink: "https://watch-list.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/watch-list",
  },
  {
    projectName: "JS Types Coersion Quiz",
    projectDesc:
      "Quiz to practice JS types coersion rules with absolutely random levels and neon design. You gonna love it!",
    projectPic: typesCoersion,
    projectLink: "https://type-coersion-quiz.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/type-coersion-quiz",
  },
];

const PortfolioPage: NextPage = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const downloadButton = (
    <a
      className={classNames(s.download, s.skillsItem)}
      href="/Artemova Daria CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
    </a>
  );
  return (
    <div className={s.main}>
      <div className={s.skillsAndExperience}>
        {isMobile && downloadButton}
        <section>
          <ExperienceList experienceInfoArray={experienceInfoArray} />
        </section>
        <section className={s.skills}>
          {!isMobile && downloadButton}
          <SkillList skillInfoArray={skillInfoArray} />
        </section>
      </div>
      <ProjectList projectInfoArray={projectInfoArray} />
      <a
        className={s.githubSection}
        href="https://github.com/airadavometra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={s.githubText}>
          Please feel free {isMobile && <br />} to check out my github account
        </p>
        <Github className={s.githubLogo} />
      </a>
    </div>
  );
};

export default PortfolioPage;
