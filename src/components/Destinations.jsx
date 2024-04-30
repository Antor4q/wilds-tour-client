

import pic1 from "../../public/pic1.jpg"
import pic2 from "../../public/pic2.jpg"
import pic3 from "../../public/pic3.jpg"
import pic4 from "../../public/pic4.jpg"
import pic5 from "../../public/pic5.jpg"
import pic6 from "../../public/pic6.webp"
import pic7 from "../../public/pic7.jpg"
const Destinations = () => {
    return (
        <div className="px-5 lg:px-0">
            <h2 className="lg:text-4xl text-2xl font-bold lg:mb-10 mb-4 text-center">Top Destinations</h2>
          
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            

				<a  href="#"
						className="group  relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
						<img src={pic1} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover  object-center transition duration-200 group-hover:scale-110" />

						<div
							className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
						</div>

						<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">  Ha Long Bay</span>
				</a>
    
           

            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={pic2} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Bokor National Park</span>
            </a>
           

           
           
            
        </div>
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={pic3} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Sundarban</h3>
				</a>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src={pic5} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Hoi An Ancient Town</h3>
				</a>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={pic4} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Kuala Lumpur</h3>
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={pic6} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Bangkok</h3>
					</a>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={pic7} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-200 group-hover:scale-110"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Cameron Highlands</h3>
				</a>
			</div>
			
		</div>
        </div>
    );
};

export default Destinations;