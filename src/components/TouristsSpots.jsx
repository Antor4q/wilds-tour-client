import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const TouristsSpots = ({spot}) => {

    const {tourists_spot_name,image,shortDescription,average_cost,_id,location} = spot;

    return (
       <Fade direction="up" delay={100} duration={1000}>
             <div className="px-5 lg:px-0">
            <div className="card card-compact lg:h-[480px] rounded-xl  bg-base-100  border hover:shadow-xl">
               <div className="relative">
               <figure ><img src={image} className="rounded-t-xl lg:h-[265px] w-full transition duration-200 hover:scale-110" alt="Shoes" />
                   
                   </figure> 
                   <p className="absolute bottom-4 text-white text-xl font-semibold left-4">{location}</p>
               </div>
               
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p className=" text-base">{shortDescription.slice(0,50)}</p>
                    <p><span className="font-semibold text-xl">{average_cost} </span> Average cost</p>
                    <div className="card-actions ">
                    <Link to={`/touristSpotDetail/${_id}`} className="btn bg-[#5356FF] text-white">View Details</Link>
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