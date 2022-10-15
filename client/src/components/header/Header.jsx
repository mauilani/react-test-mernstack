import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Hawaii & Miyako</span>
        <span className="headerTitleLg">Island Blog</span>
      </div>
      {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      /> */}
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/5008243/pexels-photo-5008243.jpeg?cs=srgb&dl=pexels-jess-loiterton-5008243.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
};
