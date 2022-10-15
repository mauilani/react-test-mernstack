import "./singlePost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>kych</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          consectetur quisquam dolorum inventore quaerat id nihil quod
          recusandae molestiae omnis! Maxime itaque nisi veritatis quae repellat
          aliquam commodi voluptatibus ipsam! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Numquam consectetur quisquam dolorum
          inventore quaerat id nihil quod recusandae molestiae omnis! Maxime
          itaque nisi veritatis quae repellat aliquam commodi voluptatibus
          ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Numquam consectetur quisquam dolorum inventore quaerat id nihil quod
          recusandae molestiae omnis! Maxime itaque nisi veritatis quae repellat
          aliquam commodi voluptatibus ipsam! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Numquam consectetur quisquam dolorum
          inventore quaerat id nihil quod recusandae molestiae omnis! Maxime
          itaque nisi veritatis quae repellat aliquam commodi voluptatibus
          ipsam!
        </p>
      </div>
    </div>
  );
};
