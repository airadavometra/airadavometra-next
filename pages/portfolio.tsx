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
import WatchList from "@/public/projects/WatchList.png";
import TypesCoersionQuiz from "@/public/projects/TypesCoersionQuiz.png";
import FamilyTree from "@/public/projects/FamilyTree.png";
import SecretIngredient from "@/public/projects/SecretIngredient.png";
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
  {
    projectName: "Family tree",
    projectDesc: (
      <>
        Here you can explore the Artemov family tree. And also find some
        additional info about each person and a list of other families connected
        with Artemov family members. This project is made in partnership with{" "}
        <a
          className={s.projectDescLink}
          href="https://www.linkedin.com/in/vlivanoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vladimir Ivanov
        </a>
        . The information is provided by my father and uncles.
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
        and I participated in{" "}
        <a
          className={s.projectDescLink}
          href="https://itch.io/jam/gamedevjs-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gamedev.js Jam 2022
        </a>{" "}
        and made a little cute rhythm game about a kitten who learns how to
        cook. I was responsible for design and layout development. Also I
        created all the illustrations myself.
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
    projectName: "JS Types Coersion Quiz",
    projectDesc:
      "Two little but tricky quizzes to practice JS types coersion rules with absolutely random levels and awesome neon design. You gonna love it!",
    projectPic: TypesCoersionQuiz,
    projectLink: "https://type-coersion-quiz.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/type-coersion-quiz",
    projectTechnologies: ["TypeScript", "React", "Redux", "Vite", "Firebase"],
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
