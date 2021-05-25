import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  inactive: { rotate: -180 },
  active: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  inactive: {
    opacity: 0,
    pathLength: 0,
  },

  active: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 5, top: 5, right: 5, bottom: 5 }}
        dragElastic={0.4}
      >
        <motion.svg
          className="pizza-svg"
          variants={svgVariants}
          animate="active"
          initial="inactive"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        initial={{ y: -260 }}
        animate={{ y: -10 }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: "spring",
          bounce: 0.3,
          damping: 12,
        }}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
