import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TouristsSpots from "../../components/TouristsSpots";
import Destinations from "../../components/Destinations";
import Partners from "../Partners/Partners";


const Home = () => {
    const touristSpots = useLoaderData()
    return (
        <div >
            
            <Banner></Banner>
            <Partners></Partners>
            <div className="lg:max-w-[1240px] mx-auto mt-10 lg:mt-20 ">
                <Destinations></Destinations>
            </div>
            <div className="lg:max-w-[1240px] mx-auto my-10 lg:my-20">
                <h2 className="text-3xl font-bold mb-5 lg:mb-10 text-center">Tourists Spots </h2>

               <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
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