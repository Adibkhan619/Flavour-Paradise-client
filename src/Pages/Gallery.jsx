import { useLoaderData } from "react-router-dom";
import AddPhotoModal from "../components/AddPhotoModal";
import GalleryItems from "../components/GalleryItems";
import SmallBanner from "../components/SmallBanner";

const Gallery = () => {
    const items= useLoaderData()
    console.log(items);
    return (
        <div className="">
            <SmallBanner></SmallBanner>
            <AddPhotoModal></AddPhotoModal>

            <div className="m-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-16">
                {
                    items.map(item => <GalleryItems key={item._id} item={item}></GalleryItems>)
                }
            </div>
        </div>
    );
};

export default Gallery;
