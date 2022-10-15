import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          voluptatibus id?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movie</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands  fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands  fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands  fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};
