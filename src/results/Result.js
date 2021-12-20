import "./style-results.css";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Card from "./Card";
import loading from "../recursos/1480.png";
import noResults from "../recursos/no-resultados_sm.png";

export default function Results() {
  const { modo, gif, status } = useContext(AppContext);

  const gif1 = gif.slice(0, 5);
  const gif2 = gif.slice(5, 10);
  const gif3 = gif.slice(10, 15);

  const ShowResult = () => {
    if (gif.length > 0) {
      return (
        <div className="column-container">
          <div className="column">
            {gif1.map((gif) => {
              return (
                <Card
                  img={gif.images.original.url}
                  url={gif.url}
                  key={gif.id}
                />
              );
            })}
          </div>
          <div className="column">
            {gif2.map((gif) => {
              return (
                <Card
                  img={gif.images.original.url}
                  url={gif.url}
                  key={gif.id}
                />
              );
            })}
          </div>
          <div className="column">
            {gif3.map((gif) => {
              return (
                <Card
                  img={gif.images.original.url}
                  url={gif.url}
                  key={gif.id}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      if (status < 400) {
        if (status === 0) {
          return (
            <div className="vacio gif">
              <img src={loading} className="transition" alt="" />
            </div>
          );
        } else {
          return (
            <div className="vacio gif">
              <img src={noResults} alt="" className="sin_resultados" />
            </div>
          );
        }
      } else {
        return <div className="vacio">Error numero:{status}</div>;
      }
    }
  };

  return (
    <div className="container">
      <h5 className={modo ? "dark" : ""}>Resultados de busqueda </h5>
      <div className={modo ? "result-container-dark" : "result-container"}>
        <ShowResult />
      </div>
    </div>
  );
}
