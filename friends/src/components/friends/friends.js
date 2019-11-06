import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import FriendCards from "./friendcards";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [postFriend, setPostFriend] = useState({
    id: Date.now(),
    name: '',
    age: 0,
    email: ''
  })

  useEffect(() => {
    api()
      .get("/api/friends")
      .then(result => setFriends(result.data))
      .catch(error => console.log(error));
  }, [postFriend]);
  const onChange = e =>{
    setPostFriend({
      ...postFriend,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();
    api()
    .post('/api/friends', postFriend)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    }
  
  return (
    <>
      <div className="CardBox">
        {friends.map((friend, index) => {
          return <FriendCards friend={friend} key={index} />;
        })}
      </div>
      <form onSubmit={onSubmit}>
        <input 
        type="text"
        value={postFriend.name}
        name="name"
        onChange={onChange}
        placeholder="name"
        />
        <input 
        type="number"
        value={postFriend.age}
        name="age"
        onChange={onChange}
        placeholder="age"
        />
        <input 
        type="email"
        value={postFriend.email}
        name="email"
        onChange={onChange}
        placeholder="email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Friends;
