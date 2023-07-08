import Image from 'next/image';
import styles from '../styles/features.module.scss';
const Features = () => {
  //   const data = [
  //     {
  //       title: `HyperFlex Technology`,
  //       sub: 'LIMITLESS',
  //       body: `With our patented HyperFlex™ technology, we’ve compacted 1.6L in a 850ml size bottle.
  //       This means you can carry more without worrying about taking up precious space.`,
  //     },
  //   ];

  return (
    <section id={styles.main} className="section">
      <div className="container">
        <div className={`${styles.items__wrapper}`}>
          <div className={`${styles.item} flex flex__space`}>
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
                  With our patented HyperFlex™ technology, we’ve compacted 1.6L
                  in a 850ml size bottle. This means you can carry more without
                  worrying about taking up precious space.
                </p>
              </div>
            </div>
            <div className={styles.image__wrapper}>
              <div className={styles.stat__wrapper}>
                <div>
                  <p>
                    <span className="bold-text italic-text">85%</span> lighter
                    compared to competition
                  </p>
                </div>
              </div>
              <div className={styles.image}>
                {/* <Image src="/assets/carbon_fiber.png" fill priority /> */}
              </div>
            </div>
          </div>
          <div className={`${styles.item} flex flex__space ${styles.even}`}>
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
                  gracefully decompose within a relatively short period
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
                {/* <Image src="/assets/carbon_fiber.png" fill priority /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;