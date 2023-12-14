import { useContext } from "react";
import { AssetContext, MoneyContext } from "./GrandPa";


const Brother = () => {
  const barun =useContext(AssetContext);
  const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <h2>{barun}</h2>
            <p> Grandpa Money : {money}</p>
          
        </div>
    );
};

export default Brother;