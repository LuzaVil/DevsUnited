import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { TweetArea } from "../../components/TweetArea";
import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { AppContext } from "../../context/AppContext";
import "./styles.scss";

const Home = () => {
  const {
    state: {
      tweets,
      userData: { username, photo, uid, color },
    },
    getUserData,
  } = useContext(AppContext);

  useEffect(() => {
    getUserData(uid);
  }, [getUserData, uid]);

  return (
    <section className="HomePage">
      <Header photo={photo} username={username} />
      <TweetArea
        photo={photo}
        parentId={uid}
        username={username}
        color={color}
      />
      <ListOfPhotoTweets tweets={tweets} />
    </section>
  );
};

export { Home };
