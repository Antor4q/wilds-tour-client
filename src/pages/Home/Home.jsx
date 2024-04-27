import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TouristsSpots from "../../components/TouristsSpots";


const Home = () => {
    const data = useLoaderData()
    return (
        <div >
            
            <Banner></Banner>
            <div>
                <h2>This is card length : {data.length}</h2>
                <TouristsSpots></TouristsSpots>

            </div>
        </div>
    );
};

export default Home;