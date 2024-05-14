import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
// import { Link, Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const AddPhotoModal = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleAddFeedback =async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const feedback = form.feedback.value;
        const photo = form.photo.value;
        const name = user.displayName;
        const email = user.email;
        const userPhoto = user.photoURL;

        const userFeedback ={feedback, photo, name, email, userPhoto}
         console.log(userFeedback);

         try {
            const { data } = await axios.post(
                "http://localhost:5000/gallery",
                userFeedback
            );
            console.log(data);
            toast.success("Your feedback and photo added Successfully");
            navigate("/gallery");
        } catch (err) {
            console.log(err);
        }
        e.target.reset();
    }
   
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn"
                onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                }
            >
                Add Your Feedback
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-between items-center lg:flex-row flex-col-reverse">
                        <div className="text-center m-4 lg:text-left">
                            <h3 className="font-bold text-lg ">
                            Hello! {user.displayName}
                        </h3>
                        <p className="py-2">Share your thoughts and experience with us!</p>
                        </div>
                        
                        <img src={user.photoURL} alt="" className="rounded-full max-w-20" />
                    </div>

                    
                    <div className="modal-action mt-0">
                        <form method="dialog" onSubmit={handleAddFeedback} className="card-body m-0 p-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Experience"
                                    className="input input-bordered"
                                    name="feedback"   
                                                                  
                                />                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo"
                                    className="input input-bordered"
                                    required
                                />                                                   
                            </div>
                            <div className="form-control mt-6">
                                {/* if there is a button in form, it will close the modal */}      

                                {/* <Link to="/gallery">
                                </Link>                         */}
                                    <button className="btn" type="submit">Feedback</button>
                                    <h1 className="text-sm my-4 text-left ">Press <span className="text-green-600">Esc </span>to continue</h1>                               
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddPhotoModal;
