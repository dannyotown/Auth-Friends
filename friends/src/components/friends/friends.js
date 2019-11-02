import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import FriendCards from "./friendcards";

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    api()
      .get("/api/friends")
      .then(result => setFriends(result.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <div className="CardBox">
        {friends.map((friend, index) => {
          return <FriendCards friend={friend} key={index} />;
        })}
      </div>
    </>
  );
}

export default Friends;
