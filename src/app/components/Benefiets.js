import styles from '../styles/benefiets.module.scss';
import { BsRecycle } from 'react-icons/bs';
import { FaFeatherAlt } from 'react-icons/fa';
import { GiSeaCreature } from 'react-icons/gi';
import globals from '../global';

const Benefiets = () => {
  const icon_size = globals.icon_size;
  return (
    <div id={styles.main} className="section">
      <div className="container">
        <div className={`${styles.item__wrapper} flex flex__space`}>
          <div className={`${styles.item} cardcard__shadow`}>
            <div>
              <div className={`${styles.icon__wrapper}`}>
                <div className={styles.icon__wrapper_inner}>
                  <BsRecycle size={icon_size} />
                </div>
              </div>
              <h3>100% recyclable materials</h3>
              <p>
                Using nano-cell technology, the Plastico fluid bottle completely
                de-composes within 1 year of being in the ocean.
              </p>
            </div>
          </div>
          <div className={`${styles.item} cardcard__shadow`}>
            <div>
              <div className={styles.icon__wrapper}>
                <div className={styles.icon__wrapper_inner}>
                  <FaFeatherAlt size={icon_size} />
                </div>
              </div>
              <h3>Light-weight and compact</h3>
              <p>
                With our patented CompactaFlex&trade; technology, we've crammed
                850ml of space in a 500ml bottle.
              </p>
            </div>
          </div>
          <div className={`${styles.item} cardcard__shadow`}>
            <div>
              <div className={styles.icon__wrapper}>
                <div className={styles.icon__wrapper_inner}>
                  <GiSeaCreature size={icon_size} />
                </div>
              </div>
              <h3>100% recyclable materials</h3>
              <p>
                We care about preserving our planet, with each purchase, 2.5% of
                the proceeds go towards helping an animal in need.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefiets;
