export const menuVariants = {
  initial: {
    opacity: 0,
    height: 0,
    width: 0,
  },
  animate: {
    opacity: 1,
    height: "16.4rem",
    width: "100%",
    top: "9rem",
    y: -25,

    transition: {
      duration: 0.05,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: "0rem",
    width: 0,
    transition: {
      height: { delay: 0.1 },
      width: { delay: 0.1 },
    },
  },
};

export const trashVariants = {
  initial: {
    opacity: 0,
    x: -10,
    y: -20,
  },
  animate: {
    opacity: 1,
    x: -40,
    y: -20,

    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.4 },
  },
};

export const menuItemVariants = {
  initial: {
    opacity: 0,
    y: -20,
    transition: {
      delay: 0.4,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  hover: {
    x: 6,
    transition: {
      duration: 0.1,
      ease: "linear",
    },
  },
};
