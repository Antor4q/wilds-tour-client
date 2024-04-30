import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";


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
        <div className="grid lg:grid-cols-3 px-5 lg:px-0 md:grid-cols-2 grid-cols-1 gap-5">
           {
            country.map(cou => <CountryCard key={cou._id} cou={cou}></CountryCard>)
           }
        </div>
    );
};

export default CountryCards;