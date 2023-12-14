import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grandpa.css";
import { createContext } from "react";

export const AssetContext = createContext("Gold");

const GrandPa = () => {
  const asset = "Diamond";

  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>

      <AssetContext.Provider value={"Gold"}>
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty asset={asset}></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPa;
