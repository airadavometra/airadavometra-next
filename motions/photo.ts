export const closeButtonVariants = {
  rotate: {
    rotate: 180,
    transition: { type: "spring" },
  },
};
export const nextButtonVariants = {
  rotate: {
    rotate: 360,
    transition: { type: "spring" },
  },
};

export const photoContainerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
  hover: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 120, duration: 1.5 },
  },
};
export const photoVariants = {
  hover: {
    scale: 1.15,
    transition: { type: "spring", stiffness: 120, duration: 1.5 },
  },
};
export const photoHeaderVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};
