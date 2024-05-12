


const GalleryItems = ({ item }) => {
    const { feedback, photo, name, email, userPhoto } = item;
    return (
        <div>
            <div className="relative inline-block card w-[440px] shadow-2xl rounded-2xl">
                <img src={photo} alt="Your Image" className="block rounded-2xl" />


                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 text-center rounded-2xl">

                    <div className="px-5">
                        <img src={userPhoto} alt="" className="w-10 h-10 rounded-full flex  justify-center mx-auto my-5" />
                        <h1 className="text-white text-lg"><em>{feedback}</em></h1>
                    {/* <h1>{name}</h1> */}

                    
                        
                   <p className="text-white text-right">-{name}</p>
                    <p className="text-white text-right">{email}</p>
                    
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default GalleryItems;
