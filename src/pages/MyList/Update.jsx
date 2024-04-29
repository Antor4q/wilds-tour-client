import PropTypes from "prop-types"
import Swal from "sweetalert2";
const Update = ({spot}) => {

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.spotName.value;
        const countryName = form.country.value;
        const location = form.location.value;
        const shortDescription = form.description.value;
        const average_cost = form.cost.value;
        const seasonality = form.season.value
        const travel_time = form.time.value;
        const totalVisitorsPerYear = form.visitor.value;
        
        const update = {image,  tourists_spot_name,  countryName,  location,  shortDescription,  average_cost,  seasonality,  travel_time,  totalVisitorsPerYear}

        fetch(`https://wilds-tour-server.vercel.app/myList/${spot._id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
          
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have updated this",
                    showConfirmButton: false,
                    timer: 1500
                });
           
        })
    }

    return (
        <>
             <form onSubmit={handleUpdate} className="gap-3 flex flex-col">
                <input type="text" defaultValue={spot.image} name="image" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.tourists_spot_name} name="spotName" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.countryName} name="country" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.location} name="location" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.shortDescription} name="description" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.average_cost} name="cost" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.seasonality} name="season" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.travel_time} name="time" placeholder="Type here" className="input input-bordered w-full " />
                <input type="text" defaultValue={spot.totalVisitorsPerYear} name="visitor" placeholder="Type here" className="input input-bordered w-full " />
                <input type="submit" className="w-full bg-blue-600  btn text-white" value="Update" />
                </form>
        </>
    );
};

export default Update;
Update.propTypes = {
    spot: PropTypes.object
}