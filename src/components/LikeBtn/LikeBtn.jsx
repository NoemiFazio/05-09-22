import { useState } from "react";
import { IconContext } from "react-icons";
import { HiHeart } from "react-icons/hi";
import "./index.scss";

const LikeBtn = ({ data }) => {
  // const [likes, setLikes] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
    const likedValue = localStorage.getItem("isLiked");

    if (isClicked === true) {
      // setLikes(true);
      localStorage.setItem(`isLiked${data.id}`, isClicked);
      // console.log("vero");
      console.log(data);
    }

    if (isClicked === false) {
      // setLikes(false);
      localStorage.removeItem(`isLiked${data.id}`, likedValue);
      // console.log("falso");
    }
  };

  return (
    <IconContext.Provider
      value={{
        style: {
          color: `${
            (localStorage.getItem(`isLiked${data.id}`) && "red") || "white"
          }`,
          transition: "all 1s",
          width: "25px",
          height: "25px",
        },
        className: "icon",
      }}
    >
      <div className="LikeBtn" onClick={handleClick}>
        <HiHeart />
      </div>
    </IconContext.Provider>
  );
};
export default LikeBtn;
