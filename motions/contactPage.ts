export const mapVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.2, type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};
export const headerVariants = {
  hidden: { x: "10vw", y: "-10vh", opacity: 0, scale: 1.5 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: 1.5, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "10vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};
export const contactListVariants = {
  hidden: { x: "10vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "10vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};

export const mobileMapVariants = {
  hidden: { y: "100vw", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, type: "tween", duration: 0.8, ease: "easeOut" },
  },
  exit: {
    y: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
export const mobileContactListVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.8 },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
