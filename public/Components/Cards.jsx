import React from "react";
import CardItem from "./CardItem";

export default function Cards(props) {
  return (
    <div className="row">
      <CardItem users={props.users} handleClick={props.delCard} />
    </div>
  );
}
