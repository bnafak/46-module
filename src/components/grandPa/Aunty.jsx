import Cusin from "./Cusin";


const Aunty = ({asset}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cusin name={'Mamsad'}></Cusin>
                <Cusin name={'Rubaiya'} asset={asset}></Cusin>
            </section>
        </div>
    );
};

export default Aunty;