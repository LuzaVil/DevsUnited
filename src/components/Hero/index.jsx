import { ButtonGoogleLogin } from "../ButtonGoogleLogin";
import "./styles.scss";

const Hero = () => {
  return (
    <section className="HeroComponent">
      <h1>
        LOREM <br />
        IPSUM DOLOR
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <ButtonGoogleLogin />
    </section>
  );
};

export { Hero };
