import React from 'react';
import styles from '../styles/workforce.module.scss';
import Image from 'next/image';

const Workforce = () => {
  return (
    <div id={styles.main}>
      <div className="container">
        <h2 className="flex center">
          <div>
            <h2 className="medium-heading">Over 10,000+ strong</h2>
          </div>
        </h2>
        <div className={styles.inner__wrapper}>
          <div className={styles.outer__text__wrapper}>
            <div className={`${styles.text__wrapper} text__wrapper`}>
              <h3 className="medium-sub-heading-2">
                With a workforce that strong, it’s hard to not get anything done
              </h3>
              <p className="default-text">
                Plastico boasts a workforce of{' '}
                <span>10,000 dedicated individuals</span>, united in our mission
                to make a difference. With such a formidable team, it's
                impossible not to thrive in our productive environment.
                Together, we overcome challenges, <span>drive innovation</span>,
                and work tirelessly towards our common goals. At Plastico, we
                harness the power of our large crew to achieve remarkable
                results and create a sustainable impact that{' '}
                <span>resonates worldwide</span>.
              </p>
            </div>
          </div>
          <div className={`${styles.image__wrapper} image__wrapper`}>
            <Image
              src="https://images.pexels.com/photos/15806948/pexels-photo-15806948/free-photo-of-sepia-photo-of-a-group-of-workers-resting-and-eating-on-a-trailer-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              priority
              fill
              // width={700}
              // height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workforce;
