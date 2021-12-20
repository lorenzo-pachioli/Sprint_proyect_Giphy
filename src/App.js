import "./styles.css";
import Header from "./header/Header";
import Title from "./title/Title";
import Result from "./results/Result";
import React, { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import TitleProvider from "./contexts/TitleContext";

export default function App() {
    const { modo } = useContext(AppContext);
    return ( 
        <TitleProvider>
            <div className = { modo ? "App dark" : "App" }>
                <Header />
                <Title />
                <Result />
            </div>
        </TitleProvider>
            
    );
}