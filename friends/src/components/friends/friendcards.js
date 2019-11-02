import React from "react";

function FriendCards(props) {
  return (
    <>
      <div className="card">
        <p>Name: {props.friend.name}</p>
        <p>Age: {props.friend.age}</p>
        <p> Email: {props.friend.email}</p>
      </div>
    </>
  );
}

export default FriendCards;
