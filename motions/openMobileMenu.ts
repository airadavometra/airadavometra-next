export const menuVariants = {
  visible: {
    clipPath: `circle(150% at top right)`,
    transition: { type: "tween", duration: 1.5, ease: "easeOut" },
  },
  exit: {
    clipPath: "circle(0% at top right)",
    transition: {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
