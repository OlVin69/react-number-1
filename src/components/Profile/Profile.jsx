import s from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats: {followers, views, likes}}) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img className={s.img}
          src={image}
          alt="User avatar"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;