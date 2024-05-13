import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateMyAddedFood = () => {
    const food = useLoaderData()
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(food);

    const {
        _id,
        food_name,
        food_image,
        food_category,
        price,
        // made_by,
        food_origin,
        // email,
        description,
        quantity,
        order_count,
    } = food;

    const handleUpdateFood = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const food_name = form.name.value;
        const food_image = form.image.value;
        const food_category = form.category.value;
        const price = parseInt(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const food_origin = form.origin.value;
        const made_by = form.made_by.value;
        const email = form.email.value;
        const description = form.description.value;
        const order_count = parseInt(form.order_count.value);

        const newFood = {
            // _id,
            food_name,
            food_image,
            food_category,
            price,
            made_by,
            food_origin,
            email,
            description,
            quantity,
            order_count,
        };
        console.log(newFood);

        try {
            const { data } = await axios.put(
                `http://localhost:5000/foods/${_id}`,
                newFood
            );
            console.log(data);
            toast.success("Food Updated Successfully");
            navigate(`/food/${user?.email}`);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className="hero  max-w-full  mx-auto lg:h-[630px]  lg:mb-20">
                <img
                    className="hero-overlay lg:h-[630px]  lg:px-0 lg:opacity-90"
                    src="https://i.postimg.cc/V66rsDys/david-marcu-78-A265w-Pi-O4-unsplash.jpg"
                    alt=""
                />
                <div className="hero-content px-5 lg:px-16 lg:gap-10 flex-col lg:flex-row-reverse">
                    {/* <div className="text-center space-y-3 lg:text-left">
                            <h1 className="text-5xl  acme py-5 font-bold animate__bounceIn animate__animated">
                                Unlock Exclusive Benefits! Register Today.
                            </h1>
                            <p className="p-6 rounded-lg font-base bg-opacity-25 bg-orange-100 opacity-70 oleo">
                            Join our community of travelers and gain access to personalized recommendations, special offers, and insider insights tailored to your preferences. Sign up today to start your journey towards unforgettable travel experiences.
                            </p>
                        </div> */}
                    <div className="card glass mt-5 shrink-0   shadow-2xl bg-opacity-85 animate__fadeInDown animate__animated">
                        <form
                            onSubmit={handleUpdateFood}
                            className="card-body flex-row gap-8"
                        >
                            <div>
                                <div className="flex-col gap-12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="input input-bordered   "
                                            defaultValue={food_name}
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Image
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="image"
                                            placeholder="Photo URL"
                                            className="input input-bordered   "
                                            defaultValue={food_image}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Origin
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="origin"
                                            placeholder="Origin"
                                            className="input input-bordered   "
                                            defaultValue={food_origin}
                                        />
                                    </div>
                                </div>

                                <div className="flex-col gap-12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Category
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            placeholder="Category"
                                            className="input input-bordered   "
                                            defaultValue={food_category}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Quantity
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            placeholder="Quantity"
                                            className="input input-bordered   "
                                            defaultValue={quantity}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Price
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="price"
                                            placeholder="Price"
                                            className="input input-bordered   "
                                            defaultValue={price}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">
                                            Description
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        className="input input-bordered   "
                                        defaultValue={description}
                                    />
                                </div>

                                <div className="flex gap-12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Order Count
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="order_count"
                                            placeholder="Order Count"
                                            className="input input-bordered   "
                                            defaultValue={order_count}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            className="input input-bordered  "
                                            defaultValue={user.email}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">
                                                Made By
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="made_by"
                                            placeholder="Made By"
                                            className="input input-bordered  "
                                            defaultValue={user?.displayName}
                                            readOnly
                                        />
                                        <div className="form-control mt-11 flex-1 justify-end">
                                            <button
                                                type="submit"
                                                className="btn border-none font-bold text-gray-800 text-lg bg-orange-500 w-full "
                                            >
                                                Update Your Food
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyAddedFood;
