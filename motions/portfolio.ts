export const portfolioHeaderVariants = {
  hidden: { x: "150vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 3, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
export const experienceTitleVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7, ease: "easeOut" },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const experienceItemVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7, ease: "easeOut" },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const expandExperienceItem = {
  hidden: { opacity: 0, height: 0, paddingTop: 0 },
  visible: {
    opacity: [0, 0, 1],
    height: "auto",
    paddingTop: "auto",
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  exit: {
    opacity: [1, 0, 0],
    height: 0,
    paddingTop: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export const experienceButtonVariants = {
  hover: {
    originX: 0,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};
export const experienceButtonIconVariants = {
  rotate: {
    rotate: 180,
    transition: { type: "spring" },
  },
};

export const downloadCvVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 4,
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const mobileDownloadCvVariants = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const skillsVariants = {
  hidden: { x: "150vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 3, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const mobileSkillsVariants = {
  hidden: { x: "-150vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const tooltipVariants = {
  hidden: { scale: 0, originX: 1, originY: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    scale: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
  },
};
export const mobileTooltipVariants = {
  hidden: { scale: 0, originX: 0, originY: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    scale: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
  },
};

export const projectsTitleVariants = {
  offscreen: { x: "-100vw", opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7, ease: "easeOut" },
  },
  exit: {
    x: "-150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const projectImageVariants = {
  offscreen: { x: "-100vw", opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "-150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const projectDescriptionVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { delay: 1, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};

export const projectTagsVariants = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
  hover: {
    rotate: [0, -2, 0, 2, 0],
    transition: {
      repeat: Infinity,
      duration: 0.3,
    },
  },
};

export const projectLinkVariants = {
  hover: {
    originX: 0,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const projectPhotoLinkVariants = {
  hover: {
    originX: 0,
    scale: 0.98,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const githubLinkVariants = {
  offscreen: { y: 1000, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "spring", stiffness: 90 },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};
