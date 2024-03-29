import FriendItem from 'components/FriendItem/FriendItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
