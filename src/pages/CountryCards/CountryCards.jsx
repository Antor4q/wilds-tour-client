import { useEffect, useState } from "react";

import CountryCard from "./CountryCard";


const CountryCards = () => {
    const [country,setCountry] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://wilds-tour-server.vercel.app/countrys")
        .then(res => res.json())
        .then(data => {
           
            setCountry(data)
            setLoading(false)
        })
    },[])
    if(loading){
        return <>
        <div className="lg:h-[calc(100vh-376px)] h-[calc(100vh-597px)] md:h-[calc(100vh-465px)] lg:max-w-[1440px] mx-auto flex justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }
   
    return (
        <div className="grid lg:grid-cols-3 px-5 lg:px-0 md:grid-cols-2 grid-cols-1 gap-5">
           {
            country.map(cou => <CountryCard key={cou._id} cou={cou}></CountryCard>)
           }
        </div>
    );
};

export default CountryCards;