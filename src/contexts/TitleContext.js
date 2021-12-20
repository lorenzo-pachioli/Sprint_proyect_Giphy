import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import "../styles.css";

export const TitleContext = React.createContext();

export default function TitleProvider({ children }) {
  const [autocomplete, setAutocomplete] = useState("");
  const { input } = useContext(AppContext);

  const trending = "https://api.giphy.com/v1/gifs/search/tags?";
  const apiKey = "api_key=3zMdZX7ww4SZV38Q6t3HJkpKpksw5f5f";
  const limit = "&limit=5";
  const busqueda = `&q=${input}`;

  useEffect(() => {
    async function Api() {
      if (input.length > 0) {
        try {
          const peticion = await fetch(trending + apiKey + busqueda + limit);
          const respuesta = await peticion.json();
          setAutocomplete(respuesta["data"]);
          const searchStatus = respuesta["meta"];

          try {
            if (searchStatus.status === 200) {
            } else {
              console.error(`error numero ${searchStatus.status}`);
            }
          } catch (error) {
            console.error(`error numero ${searchStatus.status}`);
          }
        } catch (error) {
          console.error("error al resivir respuesta del servidor ");
        }
      } else {
        setAutocomplete([]);
      }
    }
    return Api();
  }, [input, busqueda]);

  return (
    <TitleContext.Provider value={{ autocomplete }}>
      {children}
    </TitleContext.Provider>
  );
}
