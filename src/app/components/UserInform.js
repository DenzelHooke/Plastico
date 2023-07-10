import styles from '../styles/userInform.module.scss';
import UserInformItem from './UserInformItem';
import { FaPaw, FaHandshake, FaGlasses } from 'react-icons/fa';

const UserInform = () => {
  const icon_size = 28;

  const data = [
    {
      icon: <FaPaw size={icon_size} />,
      title: 'Sustainability',
      body: "As pioneers of the world's first 100% recyclable water bottle, we demonstrate our unwavering commitment to reducing waste and protecting our precious planet. With Plastico, you can hydrate responsibly, knowing that every sip contributes to a greener future. Join us in embracing sustainability and making a positive impact on the world we share.",
    },
    {
      icon: <FaHandshake size={icon_size} />,
      title: 'Ethical',
      body: 'At Plastico, our dedication to the environment goes beyond sustainability – it extends to fairness and ethical practices. We take pride in crafting all our materials with meticulous care, ensuring zero waste during the manufacturing process. From inception to completion, every step is thoughtfully designed to minimize our ecological footprint.',
    },
    {
      icon: <FaGlasses size={icon_size} />,
      title: 'Transparency',
      body: 'Transparency is our guiding principle. We believe in open communication and sharing our processes with you. We hide zero secrets, ensuring you have a clear understanding of how we operate. Join us in embracing an honest and trustworthy approach as we strive towards a sustainable future together.',
    },
  ];

  return (
    <section id={styles.main}>
      <div className="container section">
        <div className={styles.inner__wrapper}>
          <div className={`flex center ${styles.heading__wrapper}`}>
            <h2 className="medium-heading">
              Pollution claims over{' '}
              <span className={`medium-heading ${styles.heading__span}`}>
                1 million
              </span>{' '}
              animal lives annually.
            </h2>
          </div>

          <div className={styles.inform__wrapper}>
            {data.map((item) => {
              return (
                <UserInformItem
                  icon={item.icon}
                  title={item.title}
                  body={item.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInform;
