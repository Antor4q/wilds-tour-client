import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TouristsSpots from "../../components/TouristsSpots";


const Home = () => {
    const touristSpots = useLoaderData()
    return (
        <div >
            
            <Banner></Banner>
            <div className="lg:max-w-[1240px] mx-auto lg:my-20">
                <h2 className="text-3xl font-bold lg:mb-10 text-center">Tourists Spots </h2>

               <div className="grid lg:grid-cols-3 gap-5">
               {
                    touristSpots.slice(0,6).map(spot => <TouristsSpots key={spot._id} spot={spot}></TouristsSpots>
                )
                }
               </div>
            </div>
        </div>
    );
};

export default Home;