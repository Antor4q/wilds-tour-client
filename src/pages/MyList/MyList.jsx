import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../routes/ContextProvider";
import Update from "./Update";
// import MySpot from "./MySpot";


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


  

    return (
        <div className="lg:h-[calc(100vh-340px)] h-[calc(100vh-549px)] lg:max-w-[1240px] mx-auto">
           <div>
           <div className="overflow-x-auto w-2/3 mx-auto lg:mt-20">
           <table className="table">
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
                <tr key={spot._id}>
                    <th>{ind + 1}</th>
                    <td>{spot.tourists_spot_name}</td>
                    <td>{spot.average_cost}</td>
                    <td>{spot.travel_time}</td>
                    <td>
                      <div className="join gap-2 join-vertical">
                        <button className="bg-yellow-500 join-item" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit</button>
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
                        <button className="bg-red-500 join-item">X</button>
                        
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