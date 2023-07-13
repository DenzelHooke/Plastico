'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/productSpecs.module.scss';
import ProductSpec from './ProuctSpec';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const ProductSpecs = () => {
  const itemRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const data = [
    {
      heading: "Double-wall Synthetic Polylactic Acid",
      p: "Each layer is built using State Synthetic PLA which enables a lifespan of only 2 years when exposed to air."
    },
    {
      heading: "Nearby Refill Stations",
      p: "When low on water, a geolocation signal is emitted which pings nearby water fountains and hydration stations."
    },
    {
      heading: "High Capacity Storage",
      p: "With a capacity of 25ml, you’ll never worry about running out of space."
    },
  ]

  useEffect(() => {
    const itemAnim = gsap.fromTo(
      itemRef.current,
      {
        translateX: '-50vw',
        opacity: '0%',
      },
      {
        translateX: 0,
        opacity: '100%',
        ease: 'ease-out',

        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 50% bottom 40%',
          end: 'top 20%',
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <section id={styles.main} className="section">
      <div className="container">
        {/* //TODO INSERT HEADING */}
        <header className={styles.heading}>
          <div className={styles.heading__inner}>
            <h2 className="medium-heading">
              Meet the World’s first 100% recyclable bottle.
            </h2>
            <button className={`button ${styles.cta__button}`}>
              Learn More
            </button>
          </div>
        </header>

        <div className={styles.grid}>
          <div className={styles.image}>
            <Image
              src="/assets/bottle-solo.png"
              priority
              fill
              // width={522}
              // height={522}
            />
          </div>
          <div className={styles.item__wrapper}>
            {
              data.map((item) => {
                return <div className={styles.item}>
                  <ProductSpec
                    ref={itemRef}
                    heading={item.heading}
                    p={item.p}
                ></ProductSpec>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
