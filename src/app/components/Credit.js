import React from 'react';
import styles from '../styles/credit.module.scss';
import Image from 'next/image';

const Credit = () => {
  const data = [
    {
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/aws/Forbes_logo.svg',
    },
    {
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/aws/Los_Angeles_Times_logo.svg',
    },
    {
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/aws/NewYorkTimes.svg',
    },
    {
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/aws/The_Guardian_2018.svg',
    },
  ];
  return (
    <div id={styles.main}>
      {data.map((item) => {
        return (
          <div className={styles.item}>
            <Image src={item.image} fill />
          </div>
        );
      })}
    </div>
  );
};

export default Credit;
