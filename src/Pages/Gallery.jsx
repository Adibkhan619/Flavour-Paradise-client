import { Link, useLoaderData } from "react-router-dom";
import AddPhotoModal from "../components/AddPhotoModal";
import GalleryItems from "../components/GalleryItems";
import SmallBanner from "../components/SmallBanner";
// import PrivateRoutes from "../components/PrivateRoutes";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PrivateRoutes from "../components/PrivateRoutes";

const Gallery = () => {
    const items= useLoaderData()
    const {user} = useContext(AuthContext);
    console.log(items);
    return (
        <div className="">
            <SmallBanner></SmallBanner>
            
            {
                user? <AddPhotoModal></AddPhotoModal> : 
                
                // <PrivateRoutes><AddPhotoModal></AddPhotoModal></PrivateRoutes>
                
                <p>Please <Link to="/login"><span className="text-green-500">Login</span></Link> to share your experience with us!</p>
            }

                
            
                
            
            

            <div className="m-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-16">
                {
                    items.map(item => <GalleryItems key={item._id} item={item}></GalleryItems>)
                }
            </div>
        </div>
    );
};

export default Gallery;
