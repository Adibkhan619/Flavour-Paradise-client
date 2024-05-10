

const FoodCard = ({food}) => {
    const {food_name, food_image, food_category, price, made_by, food_origin, description, quantity} = food
    return (
        <div>
            <div className="card  h-full bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-[450px]"
                        src={food_image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><span>{food_name}</span></h2>
                    <h2 className="card-title">Category: <span>{food_category}</span></h2>
                    <h2 className="card-title">Chef:<span>{made_by}</span></h2>
                    <h2 className="card-title">Price:<span>{price}</span></h2>
                    <h2 className="card-title">Origin:<span>{food_origin}</span></h2>
                    <h2 className="card-title">Quantity:<span>{quantity}</span></h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
