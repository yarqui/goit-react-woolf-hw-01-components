import s from './FriendItem.module.css';

const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={s.friendItem}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`} />
      <img src={avatar} alt={`${name}'s user avatar`} width="48" />
      <p className={s.friendName}>{name}</p>
    </li>
  );
};

export default FriendItem;
