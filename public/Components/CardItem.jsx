import React from "react";

export default function CardItem(props) {
  console.log(props);
  const users = props.users.map(user => {
    return (
      <div
        className="card m-3"
        style={{ width: "10rem", height: "auto" }}
        key={1 + Math.random()}
      >
        <img src={user.picture.large} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {user.name.first.toUpperCase()} {user.name.last.toUpperCase()}
          </h5>
          <p
            className="card-text"
            style={{ fontSize: "12px", color: "#00ccff" }}
          >
            {user.email}
          </p>
          <p style={{ fontSize: "12px" }}>
            {user.location.street}, {user.location.city}, {user.location.state}
          </p>
        </div>
      </div>
    );
  });
  return <>{users}</>;
}
