import "./styles.scss";
import BackIcon from "../../../images/back.svg";
import LogoutIcon from "../../../images/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const HeaderProfile = ({ username }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      dispatch({
        type: "DELETE_USERDATA",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="HeaderProfileComponent">
      <div className="HeaderProfile_container">
        <Link to="/home">
          <img src={BackIcon} alt="" />
        </Link>
        <p>{username}</p>
      </div>
      <button className="ButtonLogout" onClick={handleLogout}>
        LOGOUT
        <img src={LogoutIcon} alt="" />
      </button>
    </header>
  );
};

export { HeaderProfile };
