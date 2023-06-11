import styles from '../styles/userInform.module.scss';

const UserInformItem = ({ icon, title, body }) => {
  return (
    <div className={`${styles.item} `}>
      <div className={styles.icon__wrapper}>{icon}</div>
      <h4 className="medium-sub-heading">{title}</h4>
      <p className="default-text">{body}</p>
    </div>
  );
};

export default UserInformItem;
