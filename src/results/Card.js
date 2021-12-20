import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Card(props) {
  const { modo } = useContext(AppContext);
  return (
    <a className="image-card" href={props.url}>
      <img
        src={props.img}
        alt=""
        className={modo ? "card-img dark" : "card-img"}
      />
    </a>
  );
}
