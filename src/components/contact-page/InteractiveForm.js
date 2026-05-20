"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import styles from "./InteractiveForm.module.css";

export default function InteractiveForm() {
  const [formState, setFormState] = useState("idle"); // idle | submitting | success | error
  const [focusedField, setFocusedField] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", phone: "", subject: "", message: "" });

        // Reset back to idle after 4 seconds
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
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
        {/* Name + Email Row */}
        <div className={styles.inputGroup}>
          <div className={`${styles.inputWrapper} ${focusedField === "name" ? styles.focused : ""}`}>
            <label htmlFor="name" className={styles.label}>Full Name *</label>
            <input
              type="text"
              id="name"
              required
              className={styles.input}
              value={fields.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              placeholder="John Doe"
            />
            <div className={styles.inputHighlight} />
          </div>

          <div className={`${styles.inputWrapper} ${focusedField === "email" ? styles.focused : ""}`}>
            <label htmlFor="email" className={styles.label}>Email Address *</label>
            <input
              type="email"
              id="email"
              required
              className={styles.input}
              value={fields.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder="john@example.com"
            />
            <div className={styles.inputHighlight} />
          </div>
        </div>

        {/* Phone + Subject Row */}
        <div className={styles.inputGroup}>
          <div className={`${styles.inputWrapper} ${focusedField === "phone" ? styles.focused : ""}`}>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              className={styles.input}
              value={fields.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              placeholder="+91 98765 43210"
            />
            <div className={styles.inputHighlight} />
          </div>

          <div className={`${styles.inputWrapper} ${focusedField === "subject" ? styles.focused : ""}`}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input
              type="text"
              id="subject"
              className={styles.input}
              value={fields.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              placeholder="How can we help you?"
            />
            <div className={styles.inputHighlight} />
          </div>
        </div>

        {/* Message */}
        <div className={`${styles.inputWrapper} ${focusedField === "message" ? styles.focused : ""}`}>
          <label htmlFor="message" className={styles.label}>Your Message *</label>
          <textarea
            id="message"
            required
            className={styles.textarea}
            rows={5}
            value={fields.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            placeholder="Tell us about your project..."
          />
          <div className={styles.inputHighlight} />
        </div>

        {/* Error Banner */}
        <AnimatePresence>
          {formState === "error" && (
            <motion.div
              className={styles.errorBanner}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`${styles.submitBtn} ${formState === "success" ? styles.submitSuccess : ""}`}
          whileHover={{ scale: formState === "idle" ? 1.02 : 1 }}
          whileTap={{ scale: formState === "idle" ? 0.98 : 1 }}
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
            {formState === "error" && (
              <motion.span
                key="error"
                className={styles.btnContent}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <AlertCircle size={20} /> Failed — Try Again
              </motion.span>
            )}
          </AnimatePresence>
          <div className={styles.btnGlow} />
        </motion.button>
      </form>
    </motion.div>
  );
}
