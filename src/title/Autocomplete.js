import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Autocomplete(props) {
  const { modo, setinput } = useContext(AppContext);
  return (
    <button
      className={modo ? "list dark" : "list"}
      onClick={() => {
        setinput(props.name);
      }}
    >
      {props.name}
    </button>
  );
}
