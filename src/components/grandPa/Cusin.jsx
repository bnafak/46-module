import Special from "./Special";


const Cusin = ({name, asset}) => {
    return (
        <div>
            <h2>Cusin</h2>
            <p>{name}</p>
            <section>
                {
                  asset &&  <Special asset={asset}></Special>
                }
            </section>
        </div>
    );
};

export default Cusin;