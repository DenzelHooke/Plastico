import styles from '../styles/stats.module.scss';
import { GiSeaTurtle } from 'react-icons/gi';
import { BsRecycle } from 'react-icons/bs';
import { MdTerrain } from 'react-icons/md'
import globals from '../global';
  

const Statistics = () => {
  const icon_size = 35

  const data = [
    {
      text_1: '16,000',
      text_2: 'Animals saved',
      icon: <GiSeaTurtle size={icon_size}/> 
    },
    {
      text_1: '250,000',
      text_2: 'Bottles repurposed',
      icon: <BsRecycle size={icon_size}/> 
    },
    {
      text_1: '11,000km²',
      text_2: 'Ocean restored',
      icon: <MdTerrain size={icon_size}/> 
    },
  ];

  return (
    <div id={styles.main} className="flex center flex__align">
      <div className={`${styles.items__wrapper} container`}>
        {data.map((item) => (
          <>
            <div className={styles.item}>
              <div>{item.icon}</div>
              
              <span
                className={`${styles.item__head} medium-sub-heading-2 bold-text`}>{`${item.text_1}`}</span>
              <br />
              <span>{`${item.text_2}`}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
