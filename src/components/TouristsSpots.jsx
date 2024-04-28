import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const TouristsSpots = ({spot}) => {

    const {image,tourists_spot_name,shortDescription,average_cost,_id} = spot;

    return (
        <div className="px-5 lg:px-0">
            <div className="card card-compact  bg-base-100 hover:bg-[#5356FF] border hover:shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p>{shortDescription}</p>
                    <p>Average cost {average_cost}</p>
                    <div className="card-actions ">
                    <Link to={`/touristSpotDetail/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default TouristsSpots;

TouristsSpots.propTypes = {
    spot: PropTypes.object
}