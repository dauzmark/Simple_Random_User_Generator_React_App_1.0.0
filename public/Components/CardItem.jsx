import React from "react";

export default function CardItem(props) {
  console.log(props.users);
  const users = props.users.map(user => {
    const color = user.gender === "male" ? "#00ccff" : "#FFC0CB";

    return (
      <div
        onClick={props.handleClick.bind(this, user)}
        className="m-3 col-md-3 p-0"
        style={{
          width: "15rem",

          backgroundColor: `${color}`,
          boxShadow: "0 8px 6px -6px black"
        }}
        key={1 + Math.random()}
      >
        <img
          src={user.picture.large}
          className="card-img-top"
          alt="..."
          style={{ width: "100%" }}
        />
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
