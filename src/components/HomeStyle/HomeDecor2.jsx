import Marquee from "react-fast-marquee";


const HomeDecor2 = () => {
    return (
        <div className="my-10 lg:mx-16">
            <Marquee>
            <div className='border-2 mt-12 border-red-900 w-screen border-dashed '></div>
        </Marquee>
            {/* <div className="border-gray-300 mx-5 border-dashed border-y-4 lg:my-14 lg:mx-20 mb-10"></div> */}
                <h1 className="text-5xl py-8 text-center"><span className="acme text-7xl">Explore </span> 
                     the <span className=" sacramento font-semibold text-7xl">Wonders</span>{" "}
                    of{" "}
                    <span className="text-red-600  font-bold font-sans">
                        Southeast Asia
                    </span>
                </h1>
            
            <Marquee>
            <div className='border-2 mb-12 border-red-900 w-screen border-dashed '></div>
        </Marquee>
        </div>
    );
};

export default HomeDecor2;