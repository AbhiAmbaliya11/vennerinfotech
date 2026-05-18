"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "E-commerce Director",
    content: "Venner Infotech completely transformed our digital storefront. Their expertise in custom Shopify development resulted in a 150% increase in our conversion rates within just three months. Truly exceptional work.",
    rating: 5,
    avatarColor: "#f97316"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Operating Officer",
    content: "The bespoke Laravel web application they architected for our internal operations is a masterpiece. It is lightning-fast, highly secure, and perfectly tailored to our complex workflow.",
    rating: 5,
    avatarColor: "#3b82f6"
  },
  {
    id: 3,
    name: "Emma Roberts",
    role: "Tech Lead",
    content: "Their team's agility, transparent communication, and mastery of Next.js made the entire development process an absolute breeze. They are the ideal partner for enterprise-level web solutions.",
    rating: 5,
    avatarColor: "#10b981"
  },
  {
    id: 4,
    name: "David Wright",
    role: "Startup Founder",
    content: "From the initial requirement analysis to the final deployment, their team was incredibly professional. They delivered our MVP on time and well within our budget constraints.",
    rating: 5,
    avatarColor: "#8b5cf6"
  }
];

// Dot Matrix SVG Pattern Background
const DotMatrixPattern = () => (
  <svg 
    className={styles.patternBg}
    width="100%" 
    height="100%" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2" fill="rgba(255, 255, 255, 0.05)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotGrid)" />
  </svg>
);

export default function Testimonials() {
  const carouselRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState(0);

  // Calculate the max drag distance based on the width of the cards vs screen width
  useEffect(() => {
    if (carouselRef.current) {
      setDragConstraints(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className={styles.testimonialSection}>
      {/* Background Pattern */}
      <DotMatrixPattern />
      <div className={styles.ambientGlow}></div>

      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Client Reviews
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Clients Say <br/><span className={styles.highlight}>About Us</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Drag to scroll through reviews from some of our partnered enterprise clients.
          </motion.p>
        </div>

        {/* Draggable Carousel */}
        <div className={styles.carouselWrapper} ref={carouselRef}>
          <motion.div 
            className={styles.carouselTrack}
            drag="x"
            dragConstraints={{ right: 0, left: -dragConstraints - 40 }} // -40 for extra padding allowance
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className={styles.testimonialCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Large decorative quote icon */}
                <Quote size={80} className={styles.quoteBg} strokeWidth={1} />
                
                {/* 5-Star Rating */}
                <div className={styles.ratingBox}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f97316" color="#f97316" />
                  ))}
                </div>

                <p className={styles.content}>"{testimonial.content}"</p>
                
                <div className={styles.clientInfo}>
                  <div 
                    className={styles.avatar} 
                    style={{ background: testimonial.avatarColor }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className={styles.clientText}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
