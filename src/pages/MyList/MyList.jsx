import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../routes/ContextProvider";
import Update from "./Update";
import Swal from "sweetalert2";
import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyList = () => {
    const {user} = useContext(AuthContext)
    const [spots,setSpots] = useState([])
    const [loading,setLoading] = useState(true)
    console.log(spots)
    useEffect(()=>{
        fetch(`https://wilds-tour-server.vercel.app/myList/${user?.email || ""}`)
        .then(res => res.json())
        .then(data =>{
            setSpots(data)
            setLoading(false)
        })
    },[user])
    if(loading){
        return <>
        <div className="lg:h-[calc(100vh-376px)] h-[calc(100vh-597px)] md:h-[calc(100vh-465px)] lg:max-w-[1440px] mx-auto flex justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          })
          .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://wilds-tour-server.vercel.app/myList/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "This tourist spot has been deleted.",
                            icon: "success"
                        });
                        const remaining = spots.filter(spot=> spot._id !== id)
                        setSpots(remaining)
                    }
                })
            
            } 
    })
    }

    return (
        <div className="lg:max-w-[1240px] lg:h-screen max-w-[390px] px-3  mx-auto">
           <div className="lg:my-10 md:w-full">
           <div className="overflow-x-auto md:w-full p-5  lg:w-2/3 lg:p-10 mx-auto my-10 bg-gray-200 lg:my-20">
           <table className="lg:table text-sm border-collapse ">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Tourist Spot Name</th>
                <th>Average Cost</th>
                <th>Travel Time</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
              {
                spots.map((spot,ind) =>
                <tr   key={spot._id}>
                    <th className="p-2 lg:p-0">{ind + 1}</th>
                    <td className="p-2 lg:p-0">{spot.tourists_spot_name}</td>
                    <td className="p-2 lg:p-0">{spot.average_cost}</td>
                    <td className="p-2 lg:p-0">{spot.travel_time}</td>
                    <td className="p-2">
                      <div className="join gap-2 join-vertical">
                        <button className="bg-blue-500 join-item px-3 py-1 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaRegEdit /></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="mt-5">
                                   <Update spot={spot}></Update>
                                    
                                </div>
                            </div>
                            </dialog>
                            <Link to={`/touristSpotDetail/${spot._id}`} className="bg-green-500 px-3 text-white py-1"><MdOutlineRemoveRedEye /></Link>
                        <button onClick={()=>handleDelete(spot._id)} className="bg-red-500 px-3 py-1 text-white  join-item"><MdDelete /></button>
                        
                        </div>
                    </td>
                </tr> )
            }
           
           
            </tbody>
        </table>
          
          </div>
           
           </div>
        </div>
    );
};

export default MyList;