import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grandpa.css";
import { createContext } from "react";
import Brother from "./Brother";
import { useState } from "react";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
    const [money, setMoney] = useState(1000);
  const asset = "Diamond";

  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      <h3>Net money : {money}</h3>

      <MoneyContext.Provider value={[money, setMoney]}>
      <AssetContext.Provider value={"Gold"}>
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty asset={asset}></Aunty>
          <Brother></Brother>
        </section>
      </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
