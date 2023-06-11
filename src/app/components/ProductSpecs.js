import Image from 'next/image';
import styles from '../styles/productSpecs.module.scss';
import ProductSpec from './ProuctSpec';

const ProductSpecs = () => {
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
          <div className={styles.col_1}>
            <div className={styles.item}>
              {
                <ProductSpec
                  heading="Double-wall Synthetic Polylactic Acid"
                  p="Each layer is built using State Synthetic PLA which enables a lifespan of only 2 years when exposed to air."
                />
              }
            </div>
          </div>
          <div className={styles.col_2}>
            <div className={styles.image}>
              <Image
                src="/assets/bottle-solo.png"
                priority
                width={522}
                height={522}
              />
            </div>
            <div className={styles.item}>
              <ProductSpec
                heading="Nearby Refill Stations"
                p=" When low on water, a geolocation signal is emitted which pings
                nearby water fountains and hydration stations."
              />
            </div>
          </div>
          <div className={styles.col_3}>
            <div className={styles.item}>
              <ProductSpec
                heading="High Capacity Storage"
                p="With a capacity of 25ml, you’ll never worry about running out of
                space."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
