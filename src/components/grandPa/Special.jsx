import { useContext } from "react";
import { AssetContext } from "./GrandPa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Special</h2>
            <p>Has: {asset}</p>
            <p>also has: {gift}</p>
                
        </div>
    );
};

export default Special;