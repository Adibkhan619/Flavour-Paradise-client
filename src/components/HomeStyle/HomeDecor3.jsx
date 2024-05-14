import Marquee from "react-fast-marquee";


const HomeDecor3 = () => {
    return (
        <div className="lg:mt-20">
            <Marquee>
            <div className='border-2 my-4 lg:my-6 border-red-900 w-screen border-dashed '></div>
        </Marquee>
            <div className=" mx-5  lg:mx-20 space-y-4">
            <h1 className="text-5xl mt-6 text-center oleo"><span className="acme text-7xl">Reviews </span> 
                     from <span className=" sacramento text-7xl font-bold">Our</span>{" "}
                    {" "}
                    <span className="text-red-600 text-7xl oleo  font-bold font-sans">
                        Guests
                    </span>
                </h1>
                <p className="text-center pb-8">
                At Flavour Paradise, our customers are not just patrons, they are cherished members of our culinary family. Their words, their experiences, shape the fabric of our restaurant. From heartfelt compliments to constructive feedback, each review is a testament to our commitment to excellence.
                </p>
            </div>
            <Marquee>
            <div className='border-2 my-4 lg:my-6 border-red-900 w-screen border-dashed '></div>
        </Marquee>
        </div>
    );
};

export default HomeDecor3;