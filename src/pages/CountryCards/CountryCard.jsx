import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const CountryCard = ({cou}) => {
    return (
        <Link to={`countryData/${cou.countryName}`} className="card bg-base-100 border transition duration-200 hover:scale-110 lg:h-[435px] hover:shadow-xl">
        <figure className="px-5 pt-5">
            <img src={cou.image}  alt="Shoes" className="rounded-xl  lg:w-[365px] lg:h-[195px]" />
        </figure>
        <div className="card-body ">
            <h2 className="card-title">{cou.countryName}</h2>
            <p className="">{cou.short_description}</p>
            <div className="card-actions">
            
            </div>
        </div>
        </Link>
    );
};

export default CountryCard;
CountryCard.propTypes = {
    cou: PropTypes.object
}