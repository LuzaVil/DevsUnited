import "./styles.scss";
import Icon from "../../images/empty.svg";

const IsEmpty = ({ message }) => {
  return (
    <section className="IsEmptyComponent">
      <img src={Icon} alt="empty" />
      <h2>{message}</h2>
    </section>
  );
};

export { IsEmpty };
