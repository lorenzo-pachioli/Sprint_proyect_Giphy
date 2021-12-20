import React, { useState, useEffect } from "react";
import "../styles.css";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [modo, setModo] = useState(false);
  const [input, setinput] = useState("");
  const [gif, setGif] = useState([]);
  const [boton, setBoton] = useState(false);
  const [status, setStatus] = useState(0);

  const search = "https://api.giphy.com/v1/gifs/search?";
  const trending = "https://api.giphy.com/v1/gifs/trending?";
  const apiKey = "api_key=3zMdZX7ww4SZV38Q6t3HJkpKpksw5f5f";
  const limit = "&limit=15";
  const busqueda = `&q=${input}`;

  async function Trending() {
    try {
      const peticion = await fetch(trending + apiKey + limit);
      const respuesta = await peticion.json();
      const resStatus = respuesta["meta"];

      setGif(respuesta["data"]);
      setStatus(resStatus.status);

      try {
        if (resStatus.status === 200) {
        } else {
          console.error(`error numero ${resStatus.status}`);
        }
      } catch (error) {
        console.error(`error numero ${resStatus.status}`);
      }
    } catch (error) {
      console.error(`error al resivir respuesta del servidor `);
    }
  }

  async function Search() {
    try {
      const searchPeticion = await fetch(search + apiKey + limit + busqueda);
      const saerchRespuesta = await searchPeticion.json();
      setGif(saerchRespuesta["data"]);
      const searchStatus = saerchRespuesta["meta"];

      setStatus(searchStatus.status);

      try {
        if (searchStatus.status === 200) {
        } else {
          console.error(`error numero ${searchStatus.status}`);
        }
      } catch (error) {
        console.error(`error numero ${searchStatus.status}`);
      }
    } catch (error) {
      console.error(`error al resivir respuesta del servidor `);
    }
  }

  useEffect(() => {
    async function Api() {
      if (boton) {
        if (input.length !== 0) {
          Search();
        } else if (input.length === 0) {
          Trending();
        }
      }
    }

    return Api();
  });

  useEffect(() => {
    Trending();
  }, []);

  return (
    <AppContext.Provider
      value={{
        modo,
        setModo,
        input,
        setinput,
        gif,
        setGif,
        boton,
        setBoton,
        status,
        setStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
