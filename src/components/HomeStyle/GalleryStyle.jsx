
import Marquee from 'react-fast-marquee';

const GalleryStyle = () => {
    return (
        <div>
            <div>
            <div className="lg:my-10 lg:mx-20">
            <Marquee>
            <div className='border-2 my-4 lg:my-6 border-red-900 w-screen border-dashed '></div>
        </Marquee>
            <div className=" mx-5  lg:mx-20 space-y-4">
            <h1 className="text-5xl  text-center oleo"><span className="acme text-7xl">Feast </span> 
                      <span className=" sacramento text-7xl font-bold">Your</span>{" "}
                    {" "}
                    <span className="text-red-600 text-7xl oleo  font-bold font-sans">
                        Eyes <span className='sacramento text-gray-800 font-semibold'></span>
                    </span>
                </h1>
                <p className="text-center ">
                Indulge in a visual symphony of flavors with our Culinary Showcase. Explore a tantalizing array of dishes meticulously crafted by our chefs, each one a testament to our dedication to culinary excellence. From vibrant salads to sumptuous entrees and delectable desserts, our gallery offers a feast for the eyes that will leave you hungry for more. Take a virtual tour through our gastronomic wonders and let your taste buds anticipate the flavors that await you at <em>Flavour Paradise</em>
                </p>
            </div>
            <Marquee>
            <div className='border-2 my-4 lg:my-6 border-red-900 w-screen border-dashed '></div>
        </Marquee>
        </div>
        </div>
        </div>
    );
};

export default GalleryStyle;