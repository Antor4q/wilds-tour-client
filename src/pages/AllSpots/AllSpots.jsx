
import SingleSpot from "../SingleSpot/SingleSpot";
import { useEffect, useState } from "react";

const AllSpots = () => {
   
    const [newSpots,setNewSpots] = useState([])
    const [loading,setLoading] = useState(true)
   

    useEffect(()=>{
        fetch("https://wilds-tour-server.vercel.app/touristSpots")
        .then(res => res.json())
        .then(data => {
            setNewSpots(data)
           setLoading(false)
           console.log(data)
        })
    },[])
    if(loading){
        return <>
        <div className="lg:h-[calc(100vh-376px)] h-[calc(100vh-597px)] md:h-[calc(100vh-465px)] lg:max-w-[1440px] mx-auto flex justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }
  
    const handleSort = e => {
        if(e === "costa"){
            const remaining = [...newSpots].sort((a,b)=> a.average_cost.slice(0,3) - b.average_cost.slice(0,3) )
            setNewSpots(remaining)
            setLoading(false)
        }
        if(e === "costD"){
            const remaining = [...newSpots].sort((a,b)=> b.average_cost.slice(0,3) - a.average_cost.slice(0,3) )
            setNewSpots(remaining)
            setLoading(false)
        }
    }
    return (
        <div className=" lg:max-w-[1240px] mx-auto lg:my-16 lg:px-0 px-3 my-6">
            <h2 className="lg:text-2xl font-bold text-xl  text-center">Explore Our All Tourists Spots</h2>
            <div className="dropdown mb-2 ">
            <div tabIndex={0} role="button" className="btn m-1 bg-[#5356FF] text-white px-6">Sort By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu  p-2 shadow text-white rounded-box w-52">
                <li onClick={()=> handleSort("costa")} className="btn bg-[#5356FF] text-white"> Average Cost (a)</li>
                <li onClick={()=> handleSort("costD")} className="btn bg-[#5356FF] text-white"> Average Cost (D)</li>
                
            </ul>
            </div>
           <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
           {
                newSpots.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
            }
           </div>
        </div>
    );
};

export default AllSpots;