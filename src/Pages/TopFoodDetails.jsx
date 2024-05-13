// import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";


const TopFoodDetails = () => {
    const food = useLoaderData();
    console.log(food);
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [food])
    const {  
        // _id,
        name,
        price,
        orderQuantity,
        // buyerName,
        // email,
        // date,
        image,
        foodDescription,
        chef,
        origin,
        category,
        // available
    } = food;
    console.log(food);


    return (

<div className="card-body max-h-[calc(100vh-120px)] rounded-3xl mx-1 my-1 glass lg:my-5  lg:mx-5 lg:card-side bg-base-100 shadow-2xl gap-10 ">
                <figure className="items-center flex">
                    <img className="rounded-3xl" src={image} alt="Album" />
                </figure>

                <div className=" lg:w-1/2 lg:space-y-2">
                    <div >
                        <h2 className=" text-4xl">{name}</h2>
                        <p className="py-5">{category}</p>
                    </div>

                    <div>
                        <h1 className="font-bold">Origin</h1>
                        <p className="text-lg">{origin}</p>
                    </div>
                    <div>
                        <h1 className="font-bold ">Chef </h1>
                        <p className="text-lg">{chef}</p>
                    </div>

                    <div>
                        <h1 className="font-bold ">Description</h1>
                        <p className="text-lg">{foodDescription}</p>
                    </div>

                    <div>
                        <h1 className="font-bold ">Price</h1>
                        <p className="text-lg">
                            {price}{" "}
                            {/* <span className="text-sm">per year</span> */}
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold">Total Ordered</h1>
                        <p className="text-xl">
                            {} <span className="text-sm">{orderQuantity}</span>
                        </p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to="/allFoods">
                            <button className="btn btn-primary">Browse More...</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default TopFoodDetails;