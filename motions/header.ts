export const burgerVariants = {
  hidden: { x: "50vw" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.8 },
  },
  exit: {
    x: "10vw",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};
