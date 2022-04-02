export const photoVariants = {
  hidden: { x: "150vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "tween", duration: 1.3, ease: "easeOut" },
  },
};
export const descriptionVariants = {
  hidden: { y: "100vw", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, type: "tween", duration: 1.3, ease: "easeOut" },
  },
};
