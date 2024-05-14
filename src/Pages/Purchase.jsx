import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Purchase = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    console.log(user);
    const food = useLoaderData();
    const {
        // _id,
        food_name,
        food_image,
        food_category,
        price,
        made_by,
        // email,
        food_origin,
        description,
        quantity,
    } = food;
    console.log(food);

    const handlePurchase = async(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const price = form.price.value;
        // const order = {}
        const orderQuantity = parseInt(form.orderQuantity.value);
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const date = form.date.value;
        const image = food_image;
        const foodDescription = description;
        const origin = food_origin;
        const chef = made_by;
        const category = food_category;
        const available = quantity

        const newOrder = { name, price, orderQuantity, buyerName, email, date,  image, foodDescription, chef,
            origin, category, available};
        console.log(newOrder);
        
        if(email == food.email){
            toast.error("You cannot purchase food made by you")
            return;
        }
        if(orderQuantity > food.quantity ){
            toast.error("You cannot order more than "+ food.quantity)
            return;
        }
        if(orderQuantity < 1){
            toast.error("Please increase quantity")
            return
        }

    try {
        const { data } = await axios.post(
          'http://localhost:5000/orders',
          newOrder
        )
        console.log(data)
        toast.success('Order Placed Successfully')
        navigate('/allFoods')
      } catch (err) {
        console.log(err)
      }
};
    return (
        <div className="flex gap-5 mx-5 justify-center lg:flex-row md:flex-row flex-col">          
                    <div className="card card-compact  h-fit bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={food_image}                               
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{description}</h2>                        
                        </div>
                    </div>
                
<div className="card shrink-0 lg:w-fit md:w-fit w-full  shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handlePurchase} className="card-body">
                    {/* <div className="flex lg:gap-12 flex-col lg:flex-row md:flex-row"></div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                defaultValue={food_name}
                                className="input input-bordered"
                                readOnly
                            />
                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                defaultValue={price}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                    </div>


                    <div className="flex lg:gap-4 flex-col lg:flex-row md:flex-row">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span> <span className="text-sm text-green-500 text-right">Available: <span className="font-semibold">{food.quantity}</span></span>
                                
                            </label>
                            {/* <p className="sm"></p> */}
                            <input
                                type="number"
                                name="orderQuantity"
                                placeholder="Quantity"
                                defaultValue={0}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>

                            <input
                                type="text"
                                name="date"
                                placeholder="Date"
                                defaultValue={new Date().toLocaleString() + ""}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                    </div>


                    {/* <div className="flex lg:gap-12 flex-col lg:flex-row md:flex-row"></div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input
                                type="text"
                                name="buyerName"
                                placeholder="Buyer Name"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                defaultValue={user.email}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                    
        {
            quantity == 0 ? <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary" disabled>
                Sorry! We are out of Stock :/
            </button></div> : <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Order Now
                        </button>
                    </div>
        
        }
                    

                    
                </form>
            </div>
        </div>
    );
};

export default Purchase;
