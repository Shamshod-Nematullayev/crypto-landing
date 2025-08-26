import { useState } from "react";
import "./App.css";
import Item from "./components/MarketInfo/Item";
import { MarketInfo } from "./components/MarketInfo";
import Conteiner from "./components/Conteiner";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Conteiner>
        <MarketInfo />
      </Conteiner>
    </div>
  );
}

export default App;
