'use client';

import { motion } from 'framer-motion';
import { Rocket, HeartHandshake, Lightbulb } from 'lucide-react';
import styles from './AboutExcellence.module.css';

const pillars = [
  {
    icon: Rocket,
    text: 'Delivering innovative solutions to drive business growth.',
  },
  {
    icon: HeartHandshake,
    text: 'Enhancing customer experiences with cutting-edge technology.',
  },
  {
    icon: Lightbulb,
    text: 'Committed to excellence and consistent innovation.',
  },
];

export default function AboutExcellence() {
  return (
    <section className={styles.section}>
      {/* Bg pattern */}
      <div className={styles.pattern} />
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Left: Content & Timeline */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.eyebrow}>Our Legacy</span>
            <h2 className={styles.title}>
              Delivering Excellence &amp; Innovation
              <span className={styles.highlight}> for 10+ Years</span>
            </h2>
            <p className={styles.body}>
              For over a decade, Venner Infotech has delivered innovative software solutions that help businesses grow and enhance customer experiences using the latest technology.
            </p>
            <p className={styles.body}>
              As a trusted custom software development company, we specialize in enterprise software, mobile apps, custom websites, e-commerce solutions, and digital marketing services — empowering businesses to stay competitive and achieve long-term success.
            </p>

            <div className={styles.timeline}>
              {[
                { year: '2015', event: 'Founded in Surat, Gujarat with 5 engineers.' },
                { year: '2019', event: 'Launched digital marketing services.' },
                { year: '2024', event: 'Scaled to 50+ team members globally.' },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineLine}>
                    <div className={styles.timelineDot} />
                    {i < 2 && <div className={styles.timelineBar} />}
                  </div>
                  <div className={styles.timelineEvent}>{item.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className={styles.rightVisual}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/images/about/about_innovation_1779099818992.png" 
                alt="Venner Infotech Innovation" 
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            
            <div className={styles.pillarsFloating}>
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    className={styles.pillarCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  >
                    <div className={styles.pillarIcon}>
                      <Icon size={18} />
                    </div>
                    <p className={styles.pillarText}>{pillar.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
