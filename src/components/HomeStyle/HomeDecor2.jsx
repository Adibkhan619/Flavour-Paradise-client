import Marquee from "react-fast-marquee";


const HomeDecor2 = () => {
    return (
        <div className="my-10 lg:mx-16">
            <Marquee>
            <div className='border-2 mt-12 border-red-900 w-screen border-dashed '></div>
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
            <div className='border-2 mb-12 border-red-900 w-screen border-dashed '></div>
        </Marquee>
        </div>
    );
};

export default HomeDecor2;