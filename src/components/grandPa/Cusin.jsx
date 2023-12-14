import Friend from "./Friend";
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
                {
                    name === 'Rubaiya' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cusin;