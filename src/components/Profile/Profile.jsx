import ProfileStats from 'components/ProfileStats/ProfileStats';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} width={100} />

        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ProfileStats stats={stats} />
    </div>
  );
};

export default Profile;
