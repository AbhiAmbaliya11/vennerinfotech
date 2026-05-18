"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import styles from "./InteractiveForm.module.css";

export default function InteractiveForm() {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFormState("idle");
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div 
      className={styles.formWrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className={styles.formHeader}>
        <h3>Send a Message</h3>
        <p>Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div className={`${styles.inputWrapper} ${focusedField === 'name' ? styles.focused : ''}`}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              className={styles.input}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="John Doe"
            />
            <div className={styles.inputHighlight} />
          </div>

          <div className={`${styles.inputWrapper} ${focusedField === 'email' ? styles.focused : ''}`}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              required 
              className={styles.input}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="john@example.com"
            />
            <div className={styles.inputHighlight} />
          </div>
        </div>

        <div className={`${styles.inputWrapper} ${focusedField === 'subject' ? styles.focused : ''}`}>
          <label htmlFor="subject" className={styles.label}>Subject (Optional)</label>
          <input 
            type="text" 
            id="subject" 
            className={styles.input}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField(null)}
            placeholder="How can we help you?"
          />
          <div className={styles.inputHighlight} />
        </div>

        <div className={`${styles.inputWrapper} ${focusedField === 'message' ? styles.focused : ''}`}>
          <label htmlFor="message" className={styles.label}>Your Message</label>
          <textarea 
            id="message" 
            required 
            className={styles.textarea}
            rows={5}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            placeholder="Tell us about your project..."
          />
          <div className={styles.inputHighlight} />
        </div>

        <motion.button 
          type="submit" 
          className={styles.submitBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={formState !== "idle"}
        >
          <AnimatePresence mode="wait">
            {formState === "idle" && (
              <motion.span 
                key="idle"
                className={styles.btnContent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Send Message <Send size={18} />
              </motion.span>
            )}
            {formState === "submitting" && (
              <motion.span 
                key="submitting"
                className={styles.btnContent}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Loader2 size={20} className={styles.spinner} /> Sending...
              </motion.span>
            )}
            {formState === "success" && (
              <motion.span 
                key="success"
                className={styles.btnContent}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <CheckCircle2 size={20} /> Message Sent!
              </motion.span>
            )}
          </AnimatePresence>
          <div className={styles.btnGlow} />
        </motion.button>
      </form>
    </motion.div>
  );
}
