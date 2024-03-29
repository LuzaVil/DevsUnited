import { FooterUser, UserComponent } from "./styles";
import { UserName } from "../UserName";
import { useNavigate } from "react-router-dom";

const User = ({ photo, color, username }) => {
  const navigate = useNavigate();
  const handleChangeBg = (node, sibling) => {
    sibling.classList.remove("Active");
    sibling.classList.add("NoActive");
    node.classList.remove("NoActive");
    node.classList.add("Active");
  };

  return (
    <UserComponent color={color}>
      <div className="User_container">
        <picture>
          <img src={photo} alt="" />
        </picture>
        <UserName className="User" username={username} color={color} />
      </div>
      <FooterUser className="FooterUser">
        <button
          className="Active"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.nextSibling);
            navigate("/profile/posts");
          }}
        >
          POSTS
        </button>
        <button
          className="NoActive"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.previousSibling);
            navigate("/profile/favorites");
          }}
        >
          FAVORITES
        </button>
      </FooterUser>
    </UserComponent>
  );
};

export { User };
