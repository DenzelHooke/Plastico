import styles from '../styles/footer.module.scss';
import Image from 'next/image';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import globals from '../global';

const Footer = () => {
  const icon_size = globals.icon_size;

  return (
    <section id={styles.main}>
      <div className="container">
        <div className={`flex ${styles.item__wrapper}`}>
          <div className={styles.social}>
            <div className={styles.social_item}>
              <BsInstagram size={icon_size} />
            </div>
            <div className={styles.social_item}>
              <BsTwitter size={icon_size} />
            </div>
            <div className={styles.social_item}>
              <BsFacebook size={icon_size} />
            </div>
          </div>
          <div className={styles.logo_wrapper}>
            <div className={`${styles.logo}`}>
              <Image
                src="https://bottle-site.s3.us-west-1.amazonaws.com/assets/plastico-high-resolution-logo-white-on-transparent-background.png"
                fill
              />
            </div>
          </div>
          <div className={styles.copyright}>
            <span>© Plastico 2023</span>
          </div>
        </div>
      </div>
    </section>

    // <section id={styles.main}>
    //   <div className="container">
    //     <div className={`flex ${styles.item__wrapper}`}>
    //       <div className={styles.logo_wrapper}>
    //         <div className={`${styles.logo}`}>
    //           <Image
    //             src="https://bottle-site.s3.us-west-1.amazonaws.com/assets/plastico-high-resolution-logo-white-on-transparent-background.png"
    //             fill
    //           />
    //         </div>
    //         <div className={styles.social}>
    //           <div className={styles.social_item}>
    //             <BsInstagram size={icon_size} />
    //           </div>
    //           <div className={styles.social_item}>
    //             <BsTwitter size={icon_size} />
    //           </div>
    //           <div className={styles.social_item}>
    //             <BsFacebook size={icon_size} />
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.body}>
    //         <p>
    //           Plastico, the eco-friendly water bottle company, has created the
    //           world's first 100% recyclable bottle that leaves 0% waste in the
    //           ocean when it decomposes. Their breakthrough innovation is
    //           transforming the industry and inspiring new connections and
    //           industries, paving the way for a more sustainable future.
    //         </p>
    //       </div>
    //       <div className={styles.resources}>
    //         <ul>
    //           <li className="bold-text">INFO</li>
    //           <li className="footer-link">About us</li>
    //           <li className="footer-link">Our goals</li>
    //         </ul>
    //         <ul>
    //           <li className="bold-text">CAREERS</li>
    //           <li className="footer-link">Job Board</li>
    //         </ul>
    //         <ul>
    //           <li className="bold-text">RESOURCES</li>
    //           <li className="footer-link">Chairity</li>
    //           <li className="footer-link">Support</li>
    //           <li className="footer-link">Fund raising</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className={styles.copyright}>
    //       <span>© Plastico 2023</span>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Footer;
