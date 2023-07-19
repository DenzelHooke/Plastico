'use client';
import styles from '../styles/mainHero.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

export default function MainHero() {
  useEffect(() => {
    const duration = 3;
    const duration_2 = 7;
    const start = '25% center';

    const hero = gsap.fromTo(
      '.hero__inner__large__heading',
      {
        duration: duration,
        start: start,
        opacity: '0%',
        delay: 1,
      },
      {
        duration: duration,
        opacity: '100%',
        delay: 1,
      }
    );

    const inner_heading = gsap.fromTo(
      '.hero__inner__heading',
      {
        duration: 1,
        start: start,
        opacity: '0%',
        delay: 2,
      },
      {
        duration: 1,
        start: start,
        opacity: '100%',
        delay: 2,
      }
    );
  }, []);

  return (
    <section id={styles.main} className="hero__wrapper section">
      <div className="container">
        <div className={`${styles.inner} hero__inner`}>
          <div className={`${styles.inner__1} hero__inner__large__heading`}>
            <h1 className="large-heading ">
              Revolutionize Hydration, Save the Planet.
            </h1>
            <p className="default-text">
              Plastic bottles are responsible for 2.5 million tons of carbon
              dioxide emissions on Earth, we plan to change that.
            </p>
          </div>
          <div className={`${styles.inner_2} hero__inner__heading`}>
            <button className={`button ${styles.button}`}>
              Save the Earth
            </button>
            <span>Our Message</span>
          </div>
        </div>
      </div>
    </section>
  );
}
