import Cusin from "./Cusin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cusin name={'Rafsan'} asset={asset}></Cusin>
                <Cusin name={'Suhana'}></Cusin>
            </section>
        </div>
    );
};

export default Uncle;