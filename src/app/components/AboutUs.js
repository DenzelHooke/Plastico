import React from 'react';
import styles from '../styles/aboutUs.module.scss';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div id={styles.main}>
      <div className="container">
        <h2 className="flex center">
          <div>
            <h2 className="medium-heading">
              <span className="medium-heading">Who</span> are we?
            </h2>
          </div>
        </h2>
        <div className={styles.inner__wrapper}>
          <div className={`${styles.text__wrapper} text__wrapper`}>
            <h3 className="medium-sub-heading-2">
              It’s time for corporations to{' '}
              <span className="medium-sub-heading-2">change</span>.
            </h3>
            <p className="default-text">
              Growing up in sunny California, my best friend and I had the
              unfortunate privilege of witnessing the damage that plastics were
              causing to our oceans.
            </p>
            <p className="default-text">
              It was from that point on that we decided to make a change that
              would <span className="default-text">last a lifetime.</span> So we
              did just that.
            </p>
            <p className="default-text">
              We’ve spent 3+ years developing the World’s first completely
              recyclable water bottle which not only directly tackled the
              pollution pandemic plaguing our oceans, but ended up changing the
              world entirely.
            </p>
          </div>
          <div className={`${styles.image__wrapper} image__wrapper`}>
            <Image
              src="https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

export default AboutUs;
