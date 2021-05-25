import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const backdropVariant = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };

  const modalVariant = {
    inactive: {
      y: "-100vh",
      opacity: 0,
    },
    active: {
      y: "250px",
      opacity: 1,
      transform: {
        delay: 0.5,
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="inactive"
          exit="inactive"
          animate="active"
        >
          <motion.div className="modal" variants={modalVariant}>
            <h1>Want to make another pizza</h1>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
