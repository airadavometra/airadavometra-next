export const mapVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, type: "tween", duration: 1.3, ease: "easeOut" },
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
};
export const contactListVariants = {
  hidden: { x: "10vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
