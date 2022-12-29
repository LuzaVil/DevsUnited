import "./styles.scss";
import Title from "../../images/title.svg";
import LogoSmall from "../../images/logo-small.svg";
import { Link } from "react-router-dom";

const Header = ({ photo }) => {
  return (
    <header className="HeaderComponent">
      <Link to="/profile/posts" className="PhotoProfile">
        <picture className="Perfil">
          <img src={photo} alt="" />
        </picture>
      </Link>
      <img src={LogoSmall} alt="" className="LogoSmall" />
      <img src={Title} alt="" className="Title" />
    </header>
  );
};

export { Header };
