import { useContext, useEffect } from "react";
import { ConfirmationModal } from "../../components/ConfirmationModal";
import { IsEmpty } from "../../components/IsEmpty";
import { IsLoading } from "../../components/IsLoading";
import { Tweet } from "../../components/Tweet";
import { AppContext } from "../../context/AppContext";
import "./styles.scss";

const ListOfPhotoTweets = ({ tweets }) => {
  const {
    state: { loading, open },
    getTweetsWithSuscription,
  } = useContext(AppContext);

  useEffect(() => {
    getTweetsWithSuscription();
  }, []);

  return (
    <section className="ListOfPhotoTweetsContainer">
      {loading && <IsLoading message="Loading" />}
      {!tweets.length && !loading && <IsEmpty message="Empty" />}
      {tweets.length > 0 &&
        !loading &&
        tweets.map((tweet) => {
          return <Tweet key={tweet.id} {...tweet} />;
        })}
      {open && <ConfirmationModal />}
    </section>
  );
};

export { ListOfPhotoTweets };
