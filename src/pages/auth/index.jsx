import "./styles.scss";
import { Hero } from "../../components/Hero";
import Logo from "../../images/logo.svg";

const Auth = () => {
  return (
    <section className="AuthPage">
      <picture className="LogoComponent">
        <img src={Logo} alt="" />
      </picture>
      <Hero />
    </section>
  );
};

export { Auth };
