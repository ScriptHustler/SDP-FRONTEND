import "../styles/sidebar.css";

function LeftSidebar({
  loading,
  profile_picture,
  username,
  bio,
  following_count,
  follower_count }
) {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img className="profile_image" src={`http://127.0.0.1:8000/api/${profile_picture}`} alt='user' />

        <p>@{username}</p>
      </div>


      <div className="profile_info">
        <div className="follow_display">
          <p>{follower_count}</p>
          <p>Followers </p>
        </div>

        <div className="follow_display">
          <p>{following_count}</p>
          <p>Following </p>
        </div>
      </div>

      <div className="bio">

        <p>Bio:{bio}</p>
      </div>

      <button className="profile_button" type="button">Settings</button>

      {/* <ul>
        <li>My Feed</li>
        <li>Recent</li>
        <li>AI ML</li>
        <li>Data Science</li>
      </ul> */}
    </aside>
  );
}

export default LeftSidebar;
