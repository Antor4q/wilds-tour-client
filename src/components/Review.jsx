import PropTypes from "prop-types"
import { FaStar } from "react-icons/fa";

const Review = ({review}) => {
    const {image,name,rating,comment} = review
    return (
        <div className="mr-5 lg:py-10">
            <div className="card lg:h-[331px] pt-4 lg:w-96 w-80 bg-base-100 border hover:shadow-xl">
               <div className="flex flex-col items-center rounded-full">
               <div className="w-20 rounded-full flex items-center">
              <img className="rounded-full h-[80px] w-20" alt="Tailwind CSS Navbar component" src={image} />
                </div>
               </div>
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">{name} </h2>
                    <div className="flex gap-3 items-center">
                        <p className="text-yellow-400"><FaStar /></p>
                        <p> {rating}</p>
                    </div>
                    
                    <p>{comment}</p>
                    <div className="card-actions">
                   
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Review;

Review.propTypes = {
    review: PropTypes.object
}