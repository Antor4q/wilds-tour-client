import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CountryCards = () => {
    const [country,setCountry] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/countrys")
        .then(res => res.json())
        .then(data => {
           
            setCountry(data)
        })
    },[])
   
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
           {
            country.map(cou => <>
                
                <Link className="card bg-base-100 border transition duration-200 hover:scale-110 lg:h-[435px] hover:shadow-xl">
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
               
            </>)
           }
        </div>
    );
};

export default CountryCards;