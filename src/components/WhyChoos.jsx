import { useEffect, useState } from "react";
import pic from "../../public/why.jpg"
import Marquee from "react-fast-marquee";
import Review from "./Review";


const WhyChoos = () => {
    const [reviews,setReviews] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("/review.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
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
        <section className=" ">
            <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row ">
                <div className="flex relative items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={pic} alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    <div className="flex  absolute  top-[30%] flex-col  p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className=" leading-none  text-xl lg:text-2xl text-white font-bold">We Provide Top<br/> Destinations Services
                                
                            </h1>
                           <p className="text-white font-medium text-xl">Reserve Your Wilds Tour Adventure Today!</p>
                           <div>
                           <button className=" relative inline-flex mt-2 items-center justify-start overflow-hidden font-medium    transition-all bg-indigo-100 rounded-xl hover:bg-white group py-1.5 px-2.5">
                        <span className="w-56 h-48 rounded-xl bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
                    </button>
                           </div>
                           
                        </div>
                </div>
                <div className="flex flex-col  px-6 mt-5 lg:mt-0  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                   <h2 className="text-xl lg:text-2xl font-semibold mb-3">Your Gateway to Wild Adventures</h2>
                   <ul>
                        <li><span className="font-medium">Expert Guides</span>: Our team of experienced guides are knowledgeable about the wilderness and ensure a safe and informative adventure.</li>
                        <li><span className="font-medium">Diverse Itineraries</span>: Explore a variety of landscapes and activities, from wildlife safaris to jungle trekking and bird watching.</li>
                        <li><span className="font-medium">Comfortable Accommodations</span>: Rest easy in our carefully selected accommodations, providing comfort and convenience amidst nature.</li>
                        <li><span className="font-medium">Customizable Options</span>: Tailor your adventure to your preferences with customizable tour packages and flexible scheduling.</li>
                        <li><span className="font-medium">Sustainable Tourism:</span> We prioritize eco-friendly practices to minimize our impact on the environment and support local conservation efforts.</li>
                   </ul>
                </div>
            </div>
            <div className="mt-4 relative lg:px-0 px-7">
                <Marquee>
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </Marquee>
                <h2 className="absolute left-6 -top-2 lg:top-3 lg:left-0 z-10 bg-gray-400 text-white p-4 rounded-xl  font-semibold text-xl lg:text-2xl">What Our Client Say</h2>
            </div>
        </section>
        
    );
};

export default WhyChoos;