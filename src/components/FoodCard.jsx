import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FoodCard = ({food}) => {
    const {_id, food_name, food_image, food_category, price, made_by, food_origin, 
        // description,
         quantity} = food
    return (
        <Fade>
            <div>
            <div className="card card-compact flex-grow flex  bg-base-100 shadow-xl 
            ">
                {/* transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-105 hover:bg-gray-300 duration-300     dark:hover:bg-gray-700  */}
                <figure>
                    <img className="w-full h-[300px]"
                        src={food_image}
                        alt=""
                    />
                </figure>
                <div className="card-body ">

                    <div className="flex justify-between items-center">
                    <h2 className="card-title"><span className="text-3xl font-semibold oleo">{food_name}</span></h2>
                    <h2 className=""><span className="bg-red-500 px-5 shadow-lg text-white p-2  acme">{food_origin}</span></h2>
                    </div>
                    <h2 className="">Category: <span className="font-semibold oleo">{food_category}</span></h2>
                    <h2 className="">Chef: <span className="font-semibold oleo">{made_by}</span></h2>
                    <h2 className="">Price: <span className="font-semibold oleo">{price}</span></h2>
                    
                    <h2 className="">Quantity: <span className="font-semibold oleo">{quantity}</span></h2>
                    {/* <p>{description}</p> */}


                    <div className="card-actions justify-end flex-grow">
                       <Link to={`/foods/${_id}`} className="btn btn-block bg-secondary">
                                Details
                       </Link>
                        
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default FoodCard;
