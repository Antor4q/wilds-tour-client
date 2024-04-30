import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link,  useParams } from "react-router-dom";


const CountrySpots = () => {
    
    const country = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(`https://wilds-tour-server.vercel.app/countryData/${country.countryName}`)
        .then(res => res.json())
        .then(dat => {
            setData(dat)
        })
    },[country.countryName])
   
  
    return (
        <div className=" lg:max-w-[1240px] lg:h-[calc(100vh-376px)] md:h-[calc(100vh-441px)] lg:mt-20 my-10 mx-auto">
            <h2 className="lg:my-10 text-2xl my-6 font-bold lg:text-start text-center">{country.countryName}</h2>
          <div className="grid lg:grid-cols-3  px-5  lg:px-0 md:grid-cols-2  grid-cols-1 gap-5">
          {
            data.map(dat => <>
                <div className="card transition duration-200 hover:scale-110  bg-base-100 hover:shadow-xl image-full">
                <figure><img  src={dat.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <Fade direction="down" delay={200} duration={1000}>
                    <h2 className="card-title lg:text-3xl">{dat.tourists_spot_name}
                    <div className="badge badge-secondary">{dat.average_cost}</div>
                    </h2>
                    </Fade>
                    
                   <Fade direction="up" delay={200} duration={1000}>
                   <p>{dat.shortDescription}</p>
                   </Fade>
                   
                   <Fade delay={200} direction="up" duration={1000}>
                   <p className="font-semibold">{dat.location}</p>
                    <p className="font-semibold">{dat.countryName}</p>
                   </Fade>
                  
                    
                   <div className="flex gap-3 items-center">
                  
                    <Fade direction="up" delay={200} duration={1000}>
                    <Link to={`/touristSpotDetail/${dat._id}`} className=" relative inline-flex items-center justify-start overflow-hidden font-medium    transition-all bg-indigo-100 rounded-xl hover:bg-white group py-1.5 px-2.5">
                        <span className="w-56 h-48 rounded-xl bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                    </Link>
                    </Fade>
                    <Fade delay={200} duration={1000} direction="up">
                    <div className="w-[80px] bg-blue-500 rounded-xl">
                    <p className="px-3 py-1  ">{dat.seasonality}</p>
                    </div>
                    </Fade>
                    </div>
                </div>
                </div>
            
            </>)
           }
          </div>
        </div>
    );
};

export default CountrySpots;