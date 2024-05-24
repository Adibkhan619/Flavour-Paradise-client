import { useEffect, useState } from "react";
import axios from "axios";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import FoodsSlider from "../components/FoodsSlider";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
import FoodCard from "../components/FoodCard";
import SmallBanner from "../components/SmallBanner";
import { Fade } from "react-awesome-reveal";
import AllFoodsStyle from "../components/HomeStyle/AllFoodsStyle";
import { Helmet } from "react-helmet";

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");
    // const [searchText, setSearchText] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `https://b9a11-server-side-adibkhan619.vercel.app/all-foods?search=${search}`
            );
            setFoods(data);
        };
        getData();
    }, [search]);

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    };
    console.log(search);

    return (
        <Fade>
            <div>
            <Helmet>
                <title>Flavour Paradise | All Foods</title>
            </Helmet>
                {/* BANNER CAROUSEL */}
                <SmallBanner></SmallBanner>
                <AllFoodsStyle></AllFoodsStyle>

                {/* SEARCH FUNCTION */}
                <form onSubmit={handleSearch} className="mx-auto w-full flex justify-center">
                    <div className=" join focus-within:ring focus-within:ring-opacity-40 border focus-within:border-secondary focus-within:ring-secondary rounded-full">
                        <input
                            className="input input-bordered join-item rounded-full lg:w-96 focus:placeholder-transparent bg-white text-center"
                            name="search"
                            type="text"
                            placeholder="Enter Food Name"
                            aria-label="Enter Job Title"
                        />
                        <button className="btn join-item rounded-r-full px-10">
                            Search
                        </button>
                    </div>
                </form>



                {/* MAPPING FOODS */}
                <div className="m-5 lg:mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4 lg:mx-20  justify-center">
                    {foods.map((food) => (
                        <FoodCard key={food._id} food={food}></FoodCard>
                    ))}
                </div>
            </div>
        </Fade>
    );
};

export default AllFoods;
