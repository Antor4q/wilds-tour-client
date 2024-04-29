import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { IoLocationOutline } from "react-icons/io5";

const TouristsSpots = ({spot}) => {

    const {tourists_spot_name,image,shortDescription,average_cost,_id,location} = spot;

    return (
       <Fade direction="up" delay={100} duration={1000}>
             <div className="px-5 lg:px-0">
            <div className="card card-compact lg:h-[480px] rounded-xl  bg-base-100  border hover:shadow-xl">
               <div className="relative">
               <figure ><img src={image} className="rounded-t-xl lg:h-[265px] w-full transition duration-200 hover:scale-110" alt="Shoes" />
                   
                   </figure> 
                   <p className="absolute bottom-4 text-white text-xl font-semibold left-4 items-center gap-3 flex"><IoLocationOutline /> {location}</p>
               </div>
               
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p className=" text-base">{shortDescription.slice(0,50)}</p>
                    <p><span className="font-semibold text-xl">{average_cost} </span> Average cost</p>
                    <div className="card-actions ">
                   
                    <Link to={`/touristSpotDetail/${_id}`} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium    transition-all bg-indigo-100 rounded-xl hover:bg-white group py-1.5 px-2.5">
                        <span className="w-56 h-48 rounded-xl bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                    </Link>
                    </div>
                </div>
                </div>
        </div>
       </Fade>
    );
};

export default TouristsSpots;

TouristsSpots.propTypes = {
    spot: PropTypes.object
}