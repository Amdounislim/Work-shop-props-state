import React from "react";

export default function Card({ name, tel, Issam }) {
  return (
    <div className="card">
      <h3>name: {name}</h3>
      <h3>tel: {tel}</h3>
      <p>{Issam}</p>
    </div>
  );
}

Card.defaultProps = {
  name: "karim",
  tel: "2222222"
};
