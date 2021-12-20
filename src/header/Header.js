import "./style-header.css";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

import Logo from "../recursos/Logo";

export default function Header() {
  const { modo, setModo } = useContext(AppContext);

  return (
    <div className="header">
      <div className={modo ? "logo dark" : "logo"}>
        <Logo />
      </div>
      <button
        className={modo ? "btn dark" : "btn"}
        onClick={() => {
          setModo(!modo);
        }}
      >
        {" "}
        {modo ? "Modo light" : "Modo dark"}
      </button>
    </div>
  );
}
