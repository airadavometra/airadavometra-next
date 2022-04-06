export const photoVariants = {
  hidden: { x: "150vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { delay: 0.5, type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
export const descriptionVariants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
export const mobileVariants = {
  hidden: { y: "100vw", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "tween", duration: 0.7, ease: "easeOut" },
  },
  exit: {
    y: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
