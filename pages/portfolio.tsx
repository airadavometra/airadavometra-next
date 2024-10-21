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
import { Firebase } from "@/icons/skills/backend/Firebase";
import { Css3 } from "@/icons/skills/frontend/Css3";
import { FramerMotion } from "@/icons/skills/frontend/FramerMotion";
import { GraphQL } from "@/icons/skills/frontend/GraphQL";
import { Html5 } from "@/icons/skills/frontend/Html5";
import { JavaScript } from "@/icons/skills/frontend/JavaScript";
import { NextJS } from "@/icons/skills/frontend/NextJS";
import { PostCss } from "@/icons/skills/frontend/PostCss";
import { TypeScript } from "@/icons/skills/frontend/TypeScript";
import { React } from "@/icons/skills/frontend/React";
import { Redux } from "@/icons/skills/frontend/Redux";
import { StyledComponents } from "@/icons/skills/frontend/StyledComponents";
import { Photoshop } from "@/icons/skills/design/Photoshop";
import { Figma } from "@/icons/skills/design/Figma";
import { Github } from "@/icons/contacts/Github";
import TypesCoercionQuiz from "@/public/projects/TypesCoercionQuiz.jpg";
import FamilyTree from "@/public/projects/FamilyTree.png";
import AccessDenied from "@/public/projects/AccessDenied.png";
import SecretIngredient from "@/public/projects/SecretIngredient.png";
import Simulator from "@/public/projects/Simulator.png";
import Planner from "@/public/projects/Planner.png";
import { motion } from "framer-motion";
import { downloadLinkVariants, githubLinkVariants } from "@/motions/portfolio";

const experienceInfoArray: ExperienceInfo[] = [
  {
    isOpen: true,
    year: "2022",
    title: "Joined Reaktor and moved to Amsterdam",
    text: "I've always wanted to live abroad, and the year 2022 pushed me to realize this dream. So after a while I joined Reaktor and they kindly helped me to relocate to Amsterdam. I will definitely update this section, for now I am still settling down. Let's see what an interesting future awaits us.",
  },
  {
    isOpen: false,
    year: "2021",
    title: "Joined Raiffeisen as a front-end developer",
    text: "I decided it was time to change my job and find out what it's like to work in another company. So I joined a team in Raiffeisen Bank and started working on some internal products for managers. Our solutions helped (and still do) them to do budget distribution, increase employees salaries and divide bonuses between teammates. I have integrated Redux to our apps which was quite useful. Also we completely redesigned our salary increasing and bonuses dividing apps and created a handy admin tools. All this helped us to flexibly set up and launch the 2022 processes. We received a lot of positive feedback from users, so we were very happy :)",
  },
  {
    isOpen: false,
    year: "2018",
    title: "Became a full-stack developer",
    text: "I realized that I'm actually very interested in front-end development. So I started working with an old and ugly CRM UI for MTS operators. I started developing a React components library and made a new web app with React, Redux and TypeScript. There was also a big back-end refactoring task I was responsible for, and that was a knotty problem. I had to not only rewrite but also scale the solution and deal with highload. And I managed it!",
  },
  {
    isOpen: false,
    year: "2017",
    title: "Became an SQA automation engineer in MTS",
    text: "I started my career as an SQA automation engineer in CRM system just after my university graduation. I was the only SQA engineer in a team and I had covered the whole code base with autotests. After that I had been mentoring a new team of SQA engineers and participating in the improvement of autotesting process and tools.",
  },
  {
    isOpen: false,
    year: "2017",
    title: "Got my bachelor",
    text: "I had been studying a lot of maths and programming, something about AI, just a little bit of everything. Oh, I wish I could remember all of that...",
  },
];
const skillInfoArray: SkillInfo[] = [
  {
    skillName: "Front-end",
    skillLogos: [
      { logo: Html5, logoAlt: "HTML5" },
      { logo: Css3, logoAlt: "CSS3" },
      { logo: TypeScript, logoAlt: "TypeScript" },
      { logo: JavaScript, logoAlt: "JavaScript" },
      { logo: React, logoAlt: "React" },
      { logo: Redux, logoAlt: "Redux" },
      { logo: NextJS, logoAlt: "Next JS" },
      { logo: PostCss, logoAlt: "PostCSS" },
      { logo: StyledComponents, logoAlt: "styled-components" },
      { logo: FramerMotion, logoAlt: "Framer Motion" },
      { logo: GraphQL, logoAlt: "GraphQL" },
    ],
  },
  {
    skillName: "Design",
    skillLogos: [
      { logo: Figma, logoAlt: "Figma" },
      { logo: Photoshop, logoAlt: "Adobe Photoshop" },
    ],
  },
  {
    skillName: "Back-end",
    skillLogos: [{ logo: Firebase, logoAlt: "Firebase" }],
  },
];
const projectInfoArray: ProjectInfo[] = [
  // {
  //   projectName: "Access denied?",
  //   projectDesc: (
  //     <>
  //       On this website you can find some interactive exercises that will show
  //       you what challenges people with different abilities have to face in the
  //       web. This projects is meant to cultivate empathy and spread the idea
  //       that accessibility is not a feature, websites should be accessible by
  //       default.
  //     </>
  //   ),
  //   projectPic: AccessDenied,
  //   projectLink: "https://access-denied.vercel.app/",
  //   projectGithubLink: "https://github.com/airadavometra/accessibility_project",
  //   projectTechnologies: [
  //     "TypeScript",
  //     "React",
  //     "NextJS",
  //     "Vite",
  //     "Zustand",
  //     "HeadlessUI",
  //     "Framer Motion",
  //   ],
  // },
  {
    projectName: "Just a planner",
    projectDesc: (
      <>
        After searching for the perfect planning tool, I decided to create my
        own, inspired by{" "}
        <a
          className={s.projectDescLink}
          href="https://tweek.so/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweek
        </a>{" "}
        but tailored to fit my needs. <br />
        Feel free to use it if you like, just note that I have access to the
        data — though I promise not to read it!
      </>
    ),
    projectPic: Planner,
    projectLink: "https://planner-fawn.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/planner/",
    projectTechnologies: [
      "TypeScript",
      "React",
      "Vite",
      "PWA",
      "Zustand",
      "Firebase",
    ],
  },
  {
    projectName: "Simulator of visual impairments",
    projectDesc: (
      <>
        A Chrome extension that applies visual filters to any website, helping
        assess accessibility. It simulates various stages of myopia, types of
        color blindness, and blindness, with an option to adjust root font size
        to check proper scaling for myopia.
      </>
    ),
    projectPic: Simulator,
    projectLink:
      "https://chrome.google.com/webstore/detail/simulator-of-visual-impai/imohhjdbajiihdogpnphgbocfodbofip?hl=en-GB&authuser=0",
    projectGithubLink:
      "https://github.com/airadavometra/accessibility-simulator-plasmo",
    projectTechnologies: ["Plasmo", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    projectName: "Family tree",
    projectDesc: (
      <>
        Discover the Artemov family tree, complete with detailed info on each
        person and connected families. Created in collaboration with{" "}
        <a
          className={s.projectDescLink}
          href="https://www.linkedin.com/in/vlivanoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vladimir Ivanov
        </a>
        , using information provided by my father and uncles..
      </>
    ),
    projectPic: FamilyTree,
    projectLink: "https://family-tree-tau.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/family-tree",
    projectTechnologies: ["TypeScript", "React", "NextJS"],
  },
  {
    projectName: "Secret Ingredient",
    projectDesc: (
      <>
        <a
          className={s.projectDescLink}
          href="https://www.linkedin.com/in/vlivanoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My husband
        </a>{" "}
        and I created a cute rhythm game about a kitten learning to cook for{" "}
        <a
          className={s.projectDescLink}
          href="https://itch.io/jam/gamedevjs-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gamedev.js Jam 2022
        </a>
        , placing 7th in the top 10! I took charge of the design, home page
        layout, and crafted all the fun illustrations.
      </>
    ),
    projectPic: SecretIngredient,
    projectLink: "https://rhythm-game-eight.vercel.app/",
    projectGithubLink: "https://github.com/Omhet/rhythm-game",
    projectTechnologies: [
      "TypeScript",
      "React",
      "Effector",
      "Vite",
      "PixiJS",
      "Framer Motion",
      "Figma",
    ],
  },
  {
    projectName: "JS Type Coercion Quiz",
    projectDesc: (
      <>
        An interactive platform to sharpen your JavaScript type coercion skills!
        Tackle an endless quiz with randomly generated questions, and use the
        handy cheat sheet for quick, on-the-spot learning.
      </>
    ),
    projectPic: TypesCoercionQuiz,
    projectLink: "https://type-coercion-quiz.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/type-coercion-quiz",
    projectTechnologies: ["TypeScript", "React", "Vite"],
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
        <motion.div
          className={s.downloadContainerMobile}
          variants={downloadLinkVariants}
          animate="animate"
        >
          {downloadButton}
        </motion.div>
        <section>
          <ExperienceList experienceInfoArray={experienceInfoArray} />
        </section>
        <div className={s.skills}>
          <motion.div
            className={s.downloadContainer}
            variants={downloadLinkVariants}
            animate="animate"
          >
            {downloadButton}
          </motion.div>
          <SkillList skillInfoArray={skillInfoArray} />
        </div>
      </div>
      <ProjectList projectInfoArray={projectInfoArray} />
      <motion.div
        className={s.githubSection}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        whileHover="hover"
        exit="exit"
      >
        <motion.a
          className={s.githubLink}
          href="https://github.com/airadavometra"
          target="_blank"
          rel="noopener noreferrer"
          variants={githubLinkVariants}
        >
          <p className={s.githubText}>
            Please feel free {isMobile && <br />} to check out my github account
          </p>
          <Github className={s.githubLogo} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
