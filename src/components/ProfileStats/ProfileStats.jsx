import s from './ProfileStats.module.css';

const ProfileStats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={s.stats}>
      <li className={s.listItem}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.listItem}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.listItem}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;
