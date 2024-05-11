import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Purchase = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const food = useLoaderData();
    const {_id, food_name, food_image, food_category, price, made_by, food_origin, description, quantity} = food
    console.log(food);





    return (
        <div>       
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <input type="text" placeholder="Name" defaultValue={food_name} className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" defaultValue={price} className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" placeholder="Quantity"  className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Name</span>
          </label>
          <input type="text" placeholder="Buyer Name" defaultValue={user.displayName} className="input input-bordered" readOnly />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer Email</span>
          </label>
          <input type="text" placeholder="Email" defaultValue={user.email} className="input input-bordered" readOnly />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          
          <input type="text" placeholder="email" defaultValue={new Date().toLocaleString() + "" } className="input input-bordered" readOnly />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
 
        </div>
    );
};

export default Purchase;