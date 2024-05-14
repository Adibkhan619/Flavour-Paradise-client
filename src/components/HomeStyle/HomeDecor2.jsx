import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";


const HomeDecor2 = () => {
    return (
        <Fade>
            <div className="my-10 lg:mx-16">
            <Marquee>
            <div className='border-2 lg:mt-12 border-red-900 w-screen border-dashed '></div>
        </Marquee>
            {/* <div className="border-gray-300 mx-5 border-dashed border-y-4 lg:my-14 lg:mx-20 mb-10"></div> */}
                <h1 className="text-5xl py-8 text-center oleo"><span className="acme text-7xl">Our </span> 
                      <span className=" sacramento font-semibold text-7xl">Top Selling</span>{" "}
                    {" "}
                    <span className="text-red-600 text-7xl  font-bold font-sans">
                        Cuisine
                    </span>
                </h1>
            
            <Marquee>
            <div className='border-2 lg:mb-12 border-red-900 w-screen border-dashed '></div>
        </Marquee>
        </div>
        </Fade>
    );
};

export default HomeDecor2;