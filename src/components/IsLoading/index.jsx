import "./styles.scss";
import Icon from "../../images/empty.svg";

const IsLoading = ({ message }) => {
  return (
    <section className="IsLoadingComponent">
      <img src={Icon} alt="empty" />
      <h2>{message}</h2>
    </section>
  );
};

export { IsLoading };
