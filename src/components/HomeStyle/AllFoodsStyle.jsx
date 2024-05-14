
import Marquee from 'react-fast-marquee';

const AllFoodsStyle = () => {
    return (
        <div>
            <div className="lg:my-10 lg:mx-16">
            <Marquee>
            <div className='border-2 my-4 lg:my-6 border-red-900 w-screen border-dashed '></div>
        </Marquee>
            <div className=" mx-5  lg:mx-20 space-y-4">
            <h1 className="text-5xl  text-center oleo"><span className="acme text-7xl">Explore </span> 
                      <span className=" sacramento text-7xl font-bold">Our</span>{" "}
                    {" "}
                    <span className="text-red-600 text-7xl oleo  font-bold font-sans">
                        Delicate</span> <span className='sacramento text-7xl  font-semibold'>Cuisine</span>
                    
                </h1>
                <p className="text-center ">
                Indulge in a symphony of flavors at <em>Flavour Paradise</em> . From tantalizing appetizers to decadent desserts, our culinary canvas offers a delightful journey for every palate. With fresh ingredients and innovative recipes, each dish is a masterpiece waiting to be savored. Whether you are craving classic comfort food or adventurous culinary creations, our menu promises to tantalize your taste buds and leave you craving for more.
                </p>
            </div>
            <Marquee>
            <div className='border-2 my-4 lg:my-6 border-red-900 w-screen border-dashed '></div>
        </Marquee>
        </div>
        </div>
    );
};

export default AllFoodsStyle;