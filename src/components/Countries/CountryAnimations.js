export const sectionVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: { type: "spring", duration: 1, bounce: 0.2 },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

export const countryVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.05,
    originX: 0,

    boxShadow: "0px 4px 1rem 0rem rgba(0, 0, 0 0.2)",
    transition: { type: "spring", duration: 0.01 },
  },
};
