import PropTypes from "prop-types"

const TouristsSpots = ({spot}) => {

    const {image,tourists_spot_name,shortDescription,average_cost} = spot;

    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p>{shortDescription}</p>
                    <p>Average cost {average_cost}</p>
                    <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
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