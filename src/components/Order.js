import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [setShowModal]);

  const box = {
    border: "2px solid white",
    padding: 20,
  };

  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 4000);

  const exitVariants = {
    exit: {
      scale: 0,
      transition: { duration: 1 },
    },
  };
  const containerVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div style={box}>
        <AnimatePresence>
          {show && (
            <motion.h1 variants={exitVariants} exit="exit">
              {" "}
              🍕 🍕 🍕{" "}
            </motion.h1>
          )}
        </AnimatePresence>
        <h1>Thank you for your order :</h1>
        <motion.p variants={childVariants}>
          You ordered a {pizza.base} pizza with:
        </motion.p>
      </div>

      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
