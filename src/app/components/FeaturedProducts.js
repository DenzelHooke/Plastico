import Image from 'next/image';
import styles from '../styles/FeaturedProducts.module.scss';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import globals from '../global';

const FeaturedProducts = () => {
  const data = [
    {
      name: 'Guzzler',
      series: 'Ocean',
      cost: 24.99,
      sale_cost: null,
      sale: false,
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/bottle1.png',
    },
    {
      name: 'Twister',
      series: 'Expansion',
      cost: 129.99,
      sale_cost: 100,
      sale: false,
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/bottle4.png',
    },
    {
      name: 'Zapster',
      series: 'Lighting',
      cost: 24.99,
      sale_cost: null,
      sale: false,
      image:
        'https://bottle-site.s3.us-west-1.amazonaws.com/assets/bottle2.png',
    },
  ];
  return (
    <>
      <sectiom id={styles.main} className="">
        <div className="container">
          <div className={`${styles.main__wrapper} section`}>
            <h2 className={`bold-text medium-heading ${styles.heading}`}>
              Featured Products
            </h2>
            <div className={styles.product__collection}>
              {data.map((item) => {
                return (
                  <>
                    <div className={`${styles.product__collection__item}`}>
                      <div className={styles.image__wrapper}>
                        <Image src={item.image} fill />
                      </div>
                      <div className={styles.info}>
                        <div>
                          <p className="default-text">{item.name}</p>
                          <p className={`${'flat-grey'} ${styles.series}`}>
                            {item.series}
                          </p>
                        </div>
                        <div className={`${styles.cost} bold-text`}>
                          ${item.cost}
                        </div>
                      </div>
                      <div className={`${styles.link}`}>
                        <Link href="/hello/world" className="link">
                          Explore <BsArrowRight size={globals.icon_size} />
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </sectiom>
      ;
    </>
  );
};

export default FeaturedProducts;
