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
    console.log(spots)
    useEffect(()=>{
        fetch(`https://wilds-tour-server.vercel.app/myList/${user?.email || ""}`)
        .then(res => res.json())
        .then(data =>{
            setSpots(data)
        })
    },[user])

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
        <div className="lg:max-w-[1240px]  max-w-[390px] px-3  mx-auto">
           <div className="lg:py-10">
           <div className="overflow-x-auto w-full lg:w-2/3 lg:p-10 mx-auto my-10 bg-gray-200 lg:my-20">
           <table className="table w-[80%] text-sm">
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
                <tr  key={spot._id}>
                    <th>{ind + 1}</th>
                    <td>{spot.tourists_spot_name}</td>
                    <td>{spot.average_cost}</td>
                    <td>{spot.travel_time}</td>
                    <td>
                      <div className="join gap-2 join-vertical">
                        <button className="bg-yellow-500 join-item px-3 py-1 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaRegEdit /></button>
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