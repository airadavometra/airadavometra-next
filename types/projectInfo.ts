import { StaticImageData } from "next/image";

export type ProjectInfo = {
  projectName: string;
  projectDesc: string;
  projectPic: StaticImageData;
  projectLink: string;
  projectGithubLink: string;
  projectTechnologies: string[];
};
