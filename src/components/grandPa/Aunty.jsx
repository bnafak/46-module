import { useContext } from "react";
import Cusin from "./Cusin";
import { MoneyContext } from "./GrandPa";


const Aunty = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cusin name={'Mamsad'}></Cusin>
                <Cusin name={'Rubaiya'} asset={asset}></Cusin>
            </section>
            <p>Money : {money}</p>
            <button onClick={() => setMoney (money + 1000)}>Add Money 1000</button>
        </div>
    );
};

export default Aunty;