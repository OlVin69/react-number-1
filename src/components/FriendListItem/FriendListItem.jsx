import s from './FriendListItem.module.css';

const FriendListItem = ({friend:{avatar, name, isOnline}}) => {
  return (
    <div className={s.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}> {name}</p>
      {isOnline ? <p className={s.trueStatus}>Online</p> : <p className={s.falseStatus}>Offline</p>}
    </div>
  );
};
export default FriendListItem;