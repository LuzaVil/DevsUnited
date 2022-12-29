import { useContext } from "react";
import { User } from "../../components/User";
import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { AppContext } from "../../context/AppContext";
import "../home/styles.scss";
import { HeaderProfile } from "./Header";
import { Route, Routes } from "react-router-dom";

const Profile = () => {
  const {
    state: {
      tweets,
      userData: { photo, color, username, uid },
    },
  } = useContext(AppContext);

  const posts = tweets.filter((tweet) => tweet.parentId === uid);
  const favorites = tweets.filter((tweet) => tweet.followers.includes(uid));

  return (
    <section className="HomePage">
      <HeaderProfile username={username} />
      <User photo={photo} color={color} username={username} />
      <Routes>
        <Route path="/posts" element={<ListOfPhotoTweets tweets={posts} />} />
        <Route
          path="favorites"
          element={<ListOfPhotoTweets tweets={favorites} />}
        />
      </Routes>
    </section>
  );
};

export { Profile };
