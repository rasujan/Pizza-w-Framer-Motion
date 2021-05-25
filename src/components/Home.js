import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const Home = () => {
  const containerVariants = {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hover: {
      scale: 1.2,
      textShadow: "0px 0px 8px #ffffff",
      boxShadow: "0px 0px 8px #ffffff",
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="inactive"
      animate="active"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
