import { ProjectInfo } from "@/types/projectInfo";

export const PROJECTS: ProjectInfo[] = [
  {
    name: "Eyes That Hypnotise",
    description: [
      "Eyes That Hypnotise is a cozy, hand-drawn puzzle game I'm working on with [my partner](https://www.linkedin.com/in/vlivanoff/). I've been busy creating detailed, hand-drawn assets and designing levels that balance chill vibes with fun challenges.",
      "If it sounds like your thing, we'd love your support — [play the demo and write a review](https://store.steampowered.com/app/3156370/Eyes_That_Hypnotise/)!",
    ],
    imgPath: "/projects/EyesThatHypnotise.jpg",
    link: "https://store.steampowered.com/app/3156370/Eyes_That_Hypnotise/",
    githubLink: "",
    techStack: ["Unity", "Procreate"],
  },
  {
    name: "Just a planner",
    description: [
      "After searching for the perfect planning tool, I decided to create my own, inspired by [Tweek](https://tweek.so/) but tailored to fit my needs.",
      "Feel free to use it if you like, just note that I have access to the data — though I promise not to read it!",
    ],
    imgPath: "/projects/Planner.png",
    link: "https://planner-fawn.vercel.app/",
    githubLink: "https://github.com/airadavometra/planner/",
    techStack: ["TypeScript", "React", "Vite", "PWA", "Zustand", "Firebase"],
  },
  {
    name: "Simulator of visual impairments",
    description: [
      "A Chrome extension that applies visual filters to any website, helping assess accessibility. It simulates various stages of myopia, types of color blindness, and blindness, with an option to adjust root font size to check proper scaling for myopia.",
    ],
    imgPath: "/projects/Simulator.png",
    link: "https://chrome.google.com/webstore/detail/simulator-of-visual-impai/imohhjdbajiihdogpnphgbocfodbofip?hl=en-GB&authuser=0",
    githubLink:
      "https://github.com/airadavometra/accessibility-simulator-plasmo",
    techStack: ["Plasmo", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "Family tree",
    description: [
      "Discover the Artemov family tree, complete with detailed info on each person and connected families. Created in collaboration with [Vladimir Ivanov](https://www.linkedin.com/in/vlivanoff/), using information provided by my father, uncles and other enthusiastic family members.",
    ],
    imgPath: "/projects/FamilyTree.png",
    link: "https://family-tree-tau.vercel.app/",
    githubLink: "https://github.com/airadavometra/family-tree",
    techStack: ["TypeScript", "React", "NextJS"],
  },
  {
    name: "Secret Ingredient",
    description: [
      "[My partner](https://www.linkedin.com/in/vlivanoff/) and I created a cute rhythm game about a kitten learning to cook for [Gamedev.js Jam 2022](https://itch.io/jam/gamedevjs-2022), placing 7th in the top 10! I took charge of the design, home page layout, and crafted all the fun illustrations.",
    ],
    imgPath: "/projects/SecretIngredient.png",
    link: "https://rhythm-game-eight.vercel.app/",
    githubLink: "https://github.com/Omhet/rhythm-game",
    techStack: [
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
    name: "JS Type Coercion Quiz",
    description: [
      "An interactive platform to sharpen your JavaScript type coercion skills! Tackle an endless quiz with randomly generated questions, and use the handy cheat sheet for quick, on-the-spot learning.",
    ],
    imgPath: "/projects/TypesCoercionQuiz.jpg",
    link: "https://type-coercion-quiz.vercel.app/",
    githubLink: "https://github.com/airadavometra/type-coercion-quiz",
    techStack: ["TypeScript", "React", "Vite"],
  },
];
