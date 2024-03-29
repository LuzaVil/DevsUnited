import "./styles.scss";
import { useState } from "react";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const TweetArea = ({ photo, parentId, color, username }) => {
  const db = getFirestore();
  const [tweetContent, setTweetContent] = useState("");
  const [reference] = useState(doc(collection(db, "tweets")));
  const [date] = useState(() => new Date().toDateString().slice(4, 10));
  const tweetBody = {
    content: tweetContent,
    parentId: parentId,
    followers: [],
    likes: 0,
    id: reference.id,
    date: date,
    parentPhoto: photo,
    color: color,
    username: username,
  };

  const handleSubmit = async () => {
    try {
      if (!tweetContent.length) return;
      await setDoc(reference, tweetBody);
      setTweetContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="TweetAreaComponent">
      <picture>
        <img src={photo} alt="" />
      </picture>
      <div className="Container_tweet-area">
        <textarea
          placeholder="Whats happening"
          maxLength={200}
          onChange={(e) => {
            setTweetContent(e.target.value);
          }}
          value={tweetContent}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
        ></textarea>
        <div
          style={{
            width: `${tweetContent.length / 2}%`,
          }}
        ></div>
      </div>
      <section className="TweekInfo">
        <p className="Tweet_characteres">{tweetContent.length}</p>
        <p className="Tweet_maxlength">200 max.</p>
      </section>
      <button className="ButtonPost" onClick={handleSubmit}>
        POST
      </button>
    </section>
  );
};

export { TweetArea };
