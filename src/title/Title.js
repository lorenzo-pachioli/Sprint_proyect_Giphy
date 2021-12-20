import "./style-title.css";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TitleContext } from "../contexts/TitleContext";
import Autocomplete from "./Autocomplete";
import title from "../recursos/ilustra_header.svg";
import lupa from "../recursos/icon-search-mod-noc.svg";
import Cross from "../recursos/Cross";

export default function Title() {
  const { modo, input, setinput, boton, setBoton, setStatus } = useContext(
    AppContext
  );
  const { autocomplete } = useContext(TitleContext);

  const manejarBoton = () => {
    setBoton(true);
    setStatus(0);
    setTimeout(() => {
      setBoton(false);
    });
  };

  const manejadorInput = (event) => {
    setinput(event.target.value);
  };

  return (
    <div className="title-container">
      <div className={modo ? "title dark" : "title"}>
        ¡Inspirate y busca los mejores GIFS!
      </div>
      <img src={title} className="img-title" alt="Imagen" />
      <div className={modo ? "searcher dark" : "searcher"}>
        <input
          type="text"
          value={input}
          onChange={manejadorInput}
          className={modo ? "input dark" : "input"}
        />
        <div
          className={
            input.length > 0
              ? modo
                ? "cross-container dark"
                : "cross-container"
              : "none-cross"
          }
          onClick={() => {
            if (input.length > 0) {
              setinput("");
              setBoton(true);
              setStatus(0);
              setTimeout(() => {
                setBoton(false);
              });
            }
          }}
        >
          <Cross width="30%" />
        </div>
        <button onClick={manejarBoton}>
          <img src={lupa} className="lupa" alt="" />
        </button>
      </div>
      <div className={modo ? "autocomplete dark" : "autocomplete"}>
        {input.length > 0 && boton === false
          ? autocomplete.map((auto) => {
              return <Autocomplete name={auto.name} key={auto.id} />;
            })
          : ""}
      </div>
    </div>
  );
}
