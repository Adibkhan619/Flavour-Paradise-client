import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const {_id, food_name, food_image, food_category, price, made_by, food_origin, description, quantity} = food
    console.log(food);
    return (

<div className="card-body max-h-[calc(100vh-120px)] rounded-3xl mx-1 my-1 glass lg:my-5  lg:mx-5 lg:card-side bg-base-100 shadow-2xl gap-10 ">
                <figure className="items-center flex">
                    <img className="rounded-3xl" src={food_image} alt="Album" />
                </figure>

                <div className=" lg:w-1/2 lg:space-y-2">
                    <div >
                        <h2 className=" text-4xl oleo font-bold">{food_name}</h2>
                        <p className="py-2 satisfy text-xl">{description}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl satisfy">Origin</h1>
                        <p className="text-3xl oleo font-bold">{food_origin}</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl satisfy">Chef </h1>
                        <p className="text-3xl oleo font-bold">{made_by}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl satisfy">Category</h1>
                        <p className="text-3xl oleo font-bold">{food_category}</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl satisfy">Price</h1>
                        <p className="text-3xl oleo font-bold">
                            {price}{" "}
                            {/* <span className="text-sm">per year</span> */}
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl satisfy">Quantity</h1>
                        <p className="text-xl">
                            {} <span className="text-3xl oleo font-bold">{quantity}</span>
                        </p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/purchase/${_id}`}>
                            <button className="btn btn-secondary">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default FoodDetails;