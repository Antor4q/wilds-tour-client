
import Marquee from "react-fast-marquee"
import pic1 from "../../../public/part1.png"
import pic2 from "../../../public/part2.png"
import pic3 from "../../../public/part3.png"
import pic4 from "../../../public/part4.png"
import pic5 from "../../../public/part5.png"
import pic6 from "../../../public/part6.png"
import pic7 from "../../../public/part7.png"
import pic8 from "../../../public/part8.png"
import pic9 from "../../../public/part9.png"
const Partners = () => {
    return (
        <div className="bg-gray-200 lg:py-6">
            <h2 className="lg:text-3xl text-xl text-center lg:my-10 my-5 font-bold">Our Partners</h2>
            <div >
                <Marquee pauseOnHover={true}>
                <img src={pic1} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic2} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic3} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic4} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic5} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic6} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic7} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />

                 <img src={pic8} className="lg:w-[200px] w-[100px] lg:mr-12 mr-4 lg:h-[150px] h-[50px]" alt="" />
                 <img src={pic9} className="w-[200px]  h-[50px]" alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;