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
import { motion } from "framer-motion";
import { downloadCvVariants, githubLinkVariants } from "@/motions/portfolio";

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
    projectDesc:
      "Here you can explore the Artemov family tree. And also find some additional info about each person and a list of other families connected with Artemov family members. This project is made in partnership with Vladimir Ivanov. The information is provided by my father and uncles.",
    projectPic: FamilyTree,
    projectLink: "https://family-tree-tau.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/family-tree",
    projectTechnologies: ["TypeScript", "React", "NextJS"],
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
  {
    projectName: "Watch List",
    projectDesc:
      "My first useful pet project to save all the interesting upcoming premieres and already released content. And every time you face a problem like you dont know what to watch, this app can help you.",
    projectPic: WatchList,
    projectLink: "https://watch-list.vercel.app/",
    projectGithubLink: "https://github.com/airadavometra/watch-list",
    projectTechnologies: ["TypeScript", "React", "Redux", "Vite"],
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
        {isMobile && (
          <motion.div
            variants={downloadCvVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {downloadButton}
          </motion.div>
        )}
        <section>
          <ExperienceList experienceInfoArray={experienceInfoArray} />
        </section>
        <div className={s.skills}>
          {!isMobile && (
            <motion.div
              variants={downloadCvVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {downloadButton}
            </motion.div>
          )}
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
