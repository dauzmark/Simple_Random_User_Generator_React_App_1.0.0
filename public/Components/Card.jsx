import React from "react";
import CardItem from "./CardItem";

export default function Card(props) {
  return (
    <div className="row">
      <CardItem users={props.users} />
    </div>
  );
}
