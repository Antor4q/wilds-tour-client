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
                <p className="text-black bg-gray-200 lg:w-1/3 w-2/3 px-4">{user_email}</p>
                    <div className="relative">
                       
                    <img  src={image} alt="" className="w-full h-60 transition duration-200 hover:scale-110 sm:h-96 bg-gray-500" />
                    <div className="hero-overlay bg-opacity-40"></div>
                    <p className="absolute text-white text-2xl font-bold top-[70%] left-[40%]">{location}</p>
                    </div>
                    <div className="p-6 z-10 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-200 ">
                        <div className="space-y-2 text-black ">
                            <h3  className="inline-block text-2xl font-semibold text-black lg:text-3xl">{tourists_spot_name}</h3>
                            <p className="lg:font-bold font-semibold">By {user_name}</p>
                            <p>{shortDescription}</p>
                            
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
                           
                            <div className="flex gap-4 ">
                            <p className="bg-[#5356FF] text-white font-medium px-2 rounded-2xl">{seasonality}</p>
                            <p className="bg-[#5356FF] text-white font-medium px-2 rounded-2xl">{countryName}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetail;