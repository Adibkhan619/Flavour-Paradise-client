import { Link } from "react-router-dom";

const FoodCard = ({food}) => {
    const {_id, food_name, food_image, food_category, price, made_by, food_origin, description, quantity} = food
    return (
        <div>
            <div className="card  h-full bg-base-100 shadow-xl 
            ">
                {/* transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-105 hover:bg-gray-300 duration-300     dark:hover:bg-gray-700  */}
                <figure>
                    <img className="w-full h-[320px]"
                        src={food_image}
                        alt=""
                    />
                </figure>
                <div className="card-body">

                    <div className="flex justify-between items-center">
                    <h2 className="card-title"><span className="text-3xl font-semibold">{food_name}</span></h2>
                    <h2 className=""><span className="bg-red-500 px-5 shadow-lg text-white p-2 font-semibold">{food_origin}</span></h2>
                    </div>


                    {/* <div className="flex justify-between items-center">
                        <h1>Category</h1>
                        <h1 className="font-semibold">{food_category}</h1>
                    </div> */}


                    <h2 className="">Category: <span className="font-semibold">{food_category}</span></h2>
                    <h2 className="">Chef: <span className="font-semibold">{made_by}</span></h2>
                    <h2 className="">Price: <span className="font-semibold">{price}</span></h2>
                    
                    <h2 className="">Quantity: <span className="font-semibold">{quantity}</span></h2>
                    <p>{description}</p>


                    <div className="card-actions justify-end ">
                       <Link to={`/foods/${_id}`} className="btn btn-block bg-primary">
                                Details
                       </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
