import { useLoaderData, useParams } from "react-router-dom";


const TouristSpotDetail = () => {
    const touristSpots = useLoaderData()
    const spotId = useParams()
    const touristSpot = touristSpots.find(spot => spot._id === spotId.id)
   const {tourists_spot_name,shortDescription,average_cost} = touristSpot
    return (
        <div className="lg:h-[calc(100vh-340px)] h-[calc(100vh-549px)] lg:max-w-[1240px] mx-auto">
            <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                        <div className="space-y-2">
                            <h3  className="inline-block text-2xl font-semibold sm:text-3xl">{tourists_spot_name}</h3>
                            <p className="text-xs text-gray-400">
                                {average_cost}
                            </p>
                        </div>
                        <div className="text-gray-100">
                            <p>{shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetail;