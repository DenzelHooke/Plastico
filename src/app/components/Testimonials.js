import Image from 'next/image';
import globals from '../global';
import styles from '../styles/testimonials.module.scss';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const icon_size = globals.icon_size;
  const data = [
    {
      name: 'Alabama Jones',
      body: 'WOW, I love sucking on this water bottle more than I love sucking on my sisters toes! Yee haw.',
      profile_pic:
        'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg',
    },
    {
      name: 'Darnet Smithersfield',
      body: `Plastico water bottle: a must-have! Hydrates and styles on the go. Thank you, Plastico!`,
      profile_pic:
        'https://images.pexels.com/photos/2253415/pexels-photo-2253415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Serena Styles',
      body: 'Plastico water bottle! Durable, insulated, perfect for an active lifestyle. Highly recommended!',
      profile_pic:
        'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section id={styles.main} className="section">
      <div className={styles.heading}>
        <p className="bold-text black small-text">TESTIMONIALS</p>
        <h2 className="medium-heading bold-text">
          What our customers are saying about us
        </h2>
      </div>
      <div
        className={`${styles.flex__wrapper} flex flex__space--even container`}>
        {data.map((item) => {
          return (
            <div className={`${styles.item} card__shadow`}>
              <div>
                <FaQuoteLeft size={icon_size} />
                <div className={styles.text__wrapper}>
                  <p>"{item.body}"</p>
                </div>
                <div className={`${styles.contact} flex`}>
                  <div className={styles.name__wrapper}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.image__wrapper}>
                    <Image src={item.profile_pic} fill prioity />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
