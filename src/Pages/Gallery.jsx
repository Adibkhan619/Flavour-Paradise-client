import { Link, useLoaderData } from "react-router-dom";
import AddPhotoModal from "../components/AddPhotoModal";
import GalleryItems from "../components/GalleryItems";
import SmallBanner from "../components/SmallBanner";
// import PrivateRoutes from "../components/PrivateRoutes";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import PrivateRoutes from "../components/PrivateRoutes";
import { Fade } from "react-awesome-reveal";
import GalleryStyle from "../components/HomeStyle/GalleryStyle";
import { Helmet } from "react-helmet";

const Gallery = () => {
    const items= useLoaderData()
    const {user} = useContext(AuthContext);
    console.log(items);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <Fade>
            <div className="">
            <Helmet>
                <title>Flavour Paradise | Gallery</title>
            </Helmet>
            <SmallBanner></SmallBanner>    
            <GalleryStyle></GalleryStyle>        
            
            <div className=" lg:mx-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
                {
                    items.map(item => <GalleryItems key={item._id} item={item}></GalleryItems>)
                }
            </div>

            <div className="flex justify-center my-10">
            {
                user? <AddPhotoModal></AddPhotoModal> :         
                <p>Please <Link to="/login"><span className="text-green-500 hover:underline">Login</span></Link> to share your experience with us!</p>
            }
            </div>
        </div>
        </Fade>
    );
};

export default Gallery;
