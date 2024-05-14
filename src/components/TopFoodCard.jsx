import { Link } from "react-router-dom";

const TopFoodCard = ({ food }) => {
    const {
        _id,
        name,
        price,
        orderQuantity,
        // buyerName,
        // email,
        // date,
        image,
        // foodDescription,
        chef,
        origin,
        category,
        // available,
    } = food;
    console.log(food);
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">

                    <div className="flex justify-between  items-center">
                    <h2 className="card-title"><span className="text-3xl font-semibold oleo  ">{name}</span></h2>
                    <h2 className=""><span className="bg-red-500 px-5 shadow-lg acme text-white p-2 ">{origin}</span></h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="">Category: <span className="font-semibold oleo">{category}</span></h2>
                    <h2 className=""><span className="font-semibold oleo">{chef}</span></h2>
                    </div>
                    
                    <h2 className=" ">Price: <span className="font-semibold oleo">{price}</span></h2>
                    
                    <h2 className="">Total purchase: <span className="font-semibold oleo">{orderQuantity}</span></h2>
                    {/* <p>{foodDescription}</p> */}


                    <div className="card-actions justify-end ">
                       <Link to={`/orders/${_id}`} className="btn btn-block bg-secondary">
                                Details
                       </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;
