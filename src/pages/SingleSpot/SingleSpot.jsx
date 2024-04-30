import PropTypes from "prop-types"
import { Fade } from "react-awesome-reveal";

import { Link } from "react-router-dom";
const SingleSpot = ({spot}) => {
    const {_id,tourists_spot_name,image,average_cost,totalVisitorsPerYear,travel_time,seasonality} = spot
    return (
       <Fade direction="up" delay={100} duration={500}>
             <div className="lg:px-0 px-3">
           
           <div className="card  bg-base-100 border hover:border-none hover:shadow-xl">
           <figure><img src={image} className="transition lg:h-[268px] w-full duration-500 hover:scale-110 " alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="card-title">
              {tourists_spot_name}
               <div className="badge text-white badge-secondary">{average_cost}</div>
               </h2>
               <table>
                   <tbody>
                       <tr>
                           <td>Total Visitors</td>
                           <th>{totalVisitorsPerYear}</th>
                       </tr>
                       <tr>
                           <td>Travel Time</td>
                           <th>{travel_time}</th>
                       </tr>
                   </tbody>
               </table>
              
               <div className="card-actions ">
               <div className="px-3 py-1 bg-blue-900 rounded-xl text-white">{seasonality}</div> 
               
               <Link to={`/touristSpotDetail/${_id}`} className=" relative inline-flex items-center justify-start overflow-hidden font-medium    transition-all bg-indigo-100 rounded-xl hover:bg-white group py-1.5 px-2.5">
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

export default SingleSpot;

SingleSpot.propTypes = {
    spot: PropTypes.object
}