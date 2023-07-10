import styles from '../styles/mainHero.module.scss';

export default function MainHero() {
  return (
    <section id={styles.main} className="hero__wrapper section">
      <div className="container">
        <div className={`${styles.inner}`}>
          <div className={styles.inner__1}>
            <h1 className="large-heading">
              Revolutionize Hydration, Save the Planet.
            </h1>
            <p className="default-text">
              Plastic bottles are responsible for 2.5 million tons of carbon
              dioxide emissions on Earth, we plan to change that.
            </p>
          </div>
          <div className={styles.inner_2}>
            <button className="button">Save the Earth</button>
            <span>Our Message</span>
          </div>
        </div>
      </div>
    </section>
  );
}
