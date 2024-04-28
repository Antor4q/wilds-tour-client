import PropTypes from "prop-types"
import pic1 from "../../../public/slide2.webp"
import { Link } from "react-router-dom";
const SingleSpot = ({spot}) => {
    const {_id,tourists_spot_name,average_cost,totalVisitorsPerYear,travel_time,seasonality} = spot
    return (
        <div>
           
            <div className="card  bg-base-100 border hover:border-none hover:shadow-xl">
            <figure><img src={pic1} className="transition duration-500 hover:scale-110 " alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
               {tourists_spot_name}
                <div className="badge badge-secondary">{average_cost}</div>
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
                <Link to={`/touristSpotDetail/${_id}`} className=" px-3 py-1 bg-blue-500 rounded-xl text-white ">View Details</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleSpot;

SingleSpot.propTypes = {
    spot: PropTypes.object
}