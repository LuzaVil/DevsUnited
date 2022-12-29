import "../auth/styles.scss";
import Logo from "../../images/logo.svg";
import { Welcome } from "../../components/Welcome";

const Config = () => {
  return (
    <section className="AuthPage">
      <picture className="LogoComponent">
        <img src={Logo} alt="" />
      </picture>
      <Welcome />
    </section>
  );
};

export { Config };
