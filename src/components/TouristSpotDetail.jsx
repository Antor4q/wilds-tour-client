import { Fade } from "react-awesome-reveal";
import { useLoaderData, useParams } from "react-router-dom";


const TouristSpotDetail = () => {
    const touristSpots = useLoaderData()
    const spotId = useParams()
    const touristSpot = touristSpots.find(spot => spot._id === spotId.id)
   const {tourists_spot_name,shortDescription,average_cost,location,totalVisitorsPerYear,travel_time,seasonality,countryName,image,user_email,user_name} = touristSpot
    return (
        <div className=" lg:max-w-[1240px] mx-auto">
            <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
               
                    <div className="relative">
                       
                    <img  src={image} alt="" className="w-full h-60 transition duration-200 hover:scale-110 sm:h-96 bg-gray-500" />
                    <div className="hero-overlay bg-opacity-40"></div>
                    <p className="absolute  text-white  text-2xl font-bold top-[70%] left-[40%]">{location}</p>
                    </div>
                    <div className="p-6 z-10 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-200 bg-opacity-80">
                        <div className="space-y-2 text-black ">
                            <Fade direction="down" duration={1000} delay={200}>
                            <h3  className="inline-block text-2xl font-semibold text-black lg:text-3xl">{tourists_spot_name}</h3>
                            </Fade>
                            <Fade direction="down" delay={200} duration={1000}>
                            <p className="lg:font-bold font-semibold">By {user_name}</p>
                            </Fade>
                            <Fade direction="down" delay={200} duration={1000}>
                            <p>{shortDescription}</p>

                                </Fade>                            
                            <Fade direction="up" delay={200} duration={1000}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Average Cost</td>
                                        <th></th>
                                        <th></th>
                                        <th>{average_cost}</th>
                                    </tr>
                                    <tr>
                                        <td>Total Visitors</td>
                                        <th></th>
                                        <th></th>
                                        <th>{totalVisitorsPerYear}</th>
                                    </tr>
                                    <tr>
                                        <td>Travel Time</td>
                                        <th></th>
                                        <th></th>
                                        <th>{travel_time}</th>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </Fade>
                           
                            <div className="flex gap-4 ">
                            <p className="bg-[#5356FF] text-white font-medium px-2 rounded-2xl">{seasonality}</p>
                            <p className="bg-[#5356FF] text-white font-medium px-2 rounded-2xl">{countryName}</p>
                            </div>
                        </div>
                        
                    </div>
                    <p className="text-white rounded-xl bg-blue-500  text-center px-4">Contact : {user_email}</p>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetail;