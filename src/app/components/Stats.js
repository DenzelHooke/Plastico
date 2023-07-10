import styles from '../styles/stats.module.scss';

const Statistics = () => {
  const data = [
    {
      text_1: '5,000',
      text_2: 'animals saved',
    },
    {
      text_1: '250,000,000,000',
      text_2: 'Bottles Repurposed',
    },
    {
      text_1: '5,000,000',
      text_2: 'animals saved',
    },
  ];

  return (
    <div id={styles.main} className="flex center flex__align">
      div.main
      
      <div className={`${styles.items__wrapper} container`}>
        {data.map((item) => (
          <>
            <div className={styles.item}>
              <span
                className={`${styles.item__head} medium-sub-heading bold-text`}>{`${item.text_1}`}</span>
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
