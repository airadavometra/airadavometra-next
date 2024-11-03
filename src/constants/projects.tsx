import { ProjectInfo } from "@/types/projectInfo";

export const PROJECTS: ProjectInfo[] = [
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
