import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  sideBounceAnimation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1,
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },

  upAndDownBounceAnimation: {
    y: [0, -30],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle(
    "sideBounceAnimation",
    "upAndDownBounceAnimation"
  );
  setInterval(() => {
    cycleAnimation();
  }, 10000);
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
    </>
  );
};

export default Loader;
