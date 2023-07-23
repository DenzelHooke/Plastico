'use client';

import Image from 'next/image';
import styles from '../styles/features.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

const Features = () => {

  useEffect(() => {
    const duration = 1;
    const start = 'top 50%';
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.feature-item',
    //     start: '25% center',
    //     end: 'bottom center',
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    // tl.to('.feature-item', {
    //   opacity: '100%',
    // });

    // tl.fromTo(
    //   '.feature-item',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 100,
    //   }
    // );

    const items = gsap.utils.toArray('.feature-item');

    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        duration: duration,
        x: -100,
        scrollTrigger: {
          trigger: item,
          start: start,
          markers: false,
        },
      });
    });
  }, []);

  // useEffect(() => {}, []);

  return (
    <section id={styles.main} className="section">
      <div className="container">
        <div className={`${styles.items__wrapper}`}>
          <div className={`${styles.item} flex flex__space feature-item`}>
            <div className={styles.item__text__wrapper}>
              <p
                className={`${styles.item__text__wrapper__sub} highlight-text small-text`}>
                LIMITLESS
              </p>
              <p
                className={`${styles.item__text__wrapper__title} medium-heading bold-text`}>
                HyperFlex Technology™
              </p>
              <div className={styles.item__text__wrapper__body}>
                <p className="flat-grey">
                Introducing our revolutionary HyperFlex Technology™ - a patented innovation that allows us to compress 1.6L into a compact 850ml bottle.
                 This incredible advancement enables you to carry more without sacrificing valuable space. 
                 Notably, it's 85% lighter than competing products on the market, 
                 ensuring a more effortless and efficient experience.
                </p>
              </div>
            </div>
            <div className={styles.image__wrapper}>
              <div className={styles.stat__wrapper}>
                <div>
                  <p>
                    <span className="bold-text italic-text">85%</span>
                    <br /> lighter compared to competition
                  </p>
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  src="https://bottle-site.s3.us-west-1.amazonaws.com/assets/pexels-engin-akyurt-1460890.jpg"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
          <div
            className={`${styles.item} flex flex__space ${styles.even} feature-item`}>
            <div className={styles.item__text__wrapper}>
              <p
                className={`${styles.item__text__wrapper__sub} highlight-text small-text`}>
                POTENTIAL
              </p>
              <p
                className={`${styles.item__text__wrapper__title} medium-heading bold-text`}>
                SustainaTech™
              </p>
              <div className={styles.item__text__wrapper__body}>
                <p className="flat-grey">
                  Formulated using SustainaTech™, an innovative and
                  groundbreaking technology, these materials have been
                  meticulously engineered to undergo a remarkable
                  transformation. By harnessing the power of nature, they not
                  only preserve the integrity of our environment but also
                  gracefully decompose within a relatively short period.
                </p>
              </div>
            </div>
            <div className={styles.image__wrapper}>
              <div className={styles.stat__wrapper}>
                <div>
                  <p>
                    <span className="bold-text italic-text">100%</span>
                    <br />
                    decomposition within 1 year
                  </p>
                </div>
              </div>
              <div className={styles.image}>
                <span>Synthetic Fiber</span>
                <Image
                  src="https://bottle-site.s3.us-west-1.amazonaws.com/assets/pexels-vlad-kovriga-339119.jpg"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
