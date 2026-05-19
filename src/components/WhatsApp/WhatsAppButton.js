"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./WhatsAppButton.module.css";

const WHATSAPP_NUMBER = "918980317457"; // Indian format without +
const MESSAGE = "Hello! I'd like to know more about your services.";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Ping ring */}
          <span className={styles.ping} />

          {/* WhatsApp SVG Icon */}
          <svg
            className={styles.icon}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 2C8.268 2 2 8.268 2 16c0 2.434.65 4.716 1.787 6.685L2 30l7.515-1.769A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.53 11.53 0 01-5.906-1.617l-.423-.253-4.46 1.05 1.08-4.335-.277-.445A11.543 11.543 0 014.4 16C4.4 9.594 9.594 4.4 16 4.4c6.406 0 11.6 5.194 11.6 11.6 0 6.406-5.194 11.6-11.6 11.6z"
              fill="white"
            />
            <path
              d="M21.94 18.68c-.32-.16-1.895-.935-2.19-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.254-.16.213-.32.24-.64.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.59-1.893-1.777-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.526-.54-.72-.55-.187-.01-.4-.013-.614-.013s-.56.08-.853.4c-.293.32-1.12 1.094-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.254 3.44 5.465 4.826.764.33 1.36.527 1.823.674.766.244 1.464.21 2.016.127.615-.092 1.894-.775 2.16-1.524.267-.75.267-1.39.187-1.524-.08-.133-.293-.213-.613-.373z"
              fill="white"
            />
          </svg>

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.span
                className={styles.tooltip}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                Chat with us!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
