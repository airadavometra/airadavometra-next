import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type ProjectInfo = {
  projectName: string;
  projectDesc: ReactNode;
  projectPic: StaticImageData;
  projectLink: string;
  projectGithubLink: string;
  projectTechnologies: string[];
};
