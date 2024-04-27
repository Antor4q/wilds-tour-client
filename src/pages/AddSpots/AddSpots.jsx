import { useState } from "react";

const AddSpots = () => {

    const [seasonality,setSeason] = useState("");
    const [countryName,setCountry] = useState("");
    console.log(seasonality, countryName)
    const handleCountry = e => {
        setCountry(e.target.value)
    }
    const handleSeason = e => {
        setSeason(e.target.value)
    }

    const handleAddSpot = (e) => {
       

        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.spotName.value;
        const location = form.location.value;
        const shortDescription = form.description.value;
        const average_cost = form.cost.value;
        const totalVisitorsPerYear = form.visitor.value;
        const user_name = form.name.value;
        const user_email = form.email.value;
        const travel_time = form.time.value;
        const newTouristSpot = { image, tourists_spot_name,  location,  shortDescription,  average_cost,  totalVisitorsPerYear, user_name, user_email, travel_time, seasonality, countryName}


        fetch("http://localhost:4000/touristSpots",{
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return (
        <div className=" lg:max-w-[1240px] mx-auto">
            <div className="lg:my-10 lg:px-24 bg-[#67C6E3] lg:py-6 ">
                
                <form onSubmit={handleAddSpot}>
                    <div className="flex gap-3 ">
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input  type="text" placeholder="Image URL" name="image" className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input type="text" placeholder="Tourist Spot Name" name="spotName" className="input w-full input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input  type="text" placeholder="Location" name="location" className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Short Description" name="description" className="input w-full input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input  type="number" placeholder="Average Cost" name="cost" className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Total Visitors</span>
                        </label>
                        <input type="number" placeholder="Total Visitors" name="visitor" className="input w-full input-bordered" required />
                        </div>
                    </div>
                     <div className="flex gap-3 lg:mt-3">
                        <div className="w-full ">
                            <select onChange={handleCountry} value={countryName} className="select select-bordered w-full  ">
                            <option disabled selected value={""}>Select Country</option>
                            <option value={"Bangladesh"}>Bangladesh</option>
                            <option value={"Thailand"}>Thailand</option>
                            <option value={"Indonesia"}>Indonesia</option>
                            <option value={"Malaysia"}>Malaysia</option>
                            <option value={"Vietnam"}>Vietnam</option>
                            <option value={"Cambodia"}>Cambodia</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <select value={seasonality} onChange={handleSeason} className="select select-bordered w-full ">
                            <option disabled selected value={""}>Seasonality</option>
                            <option value={"Winter"}>Winter</option>
                            <option value={"Summer"}>Summer</option>
                            </select>
                        </div>
                       
                     </div>
                    <div >
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input  type="number" placeholder="Day" name="time" className="input w-full input-bordered" required />
                        </div>
                       
                    </div>
                    <div >
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text ">Your Name</span>
                        </label>
                        <input  type="text" placeholder="Your Name" name="name" className="input w-full input-bordered" required />
                        </div>
                       
                    </div>
                    <div className="text-white">
                        <div className="w-full">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input  type="email" placeholder="Your Email" name="email" className="input w-full input-bordered" required />
                        </div>
                       
                    </div>
                    <div >
                        <div className="w-full mt-3">
                       
                        <input type="submit" className="btn w-full" value="Add Tourist Spot" />
                        </div>
                       
                    </div>
                  
                </form>
            </div>
        </div>
    );
};

export default AddSpots;