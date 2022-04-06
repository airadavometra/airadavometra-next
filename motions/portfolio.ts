export const portfolioHeaderVariants = {
  hidden: { x: "150vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.3, ease: "easeOut" },
  },
  exit: {
    x: "150vw",
    opacity: 0,
    transition: { delay: 0.5, type: "tween", duration: 0.7, ease: "easeInOut" },
  },
};
