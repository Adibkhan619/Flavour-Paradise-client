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

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('')
    // const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5000/foods?search=${search}`);
            setFoods(data);
        };
        getData();
    }, [search]);

    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)
      }
      console.log(search);
    

    return (
        <div>
            {/* BANNER CAROUSEL */}
            <SmallBanner></SmallBanner>

            {/* SEARCH FUNCTION */}
            <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                // onChange={e => setSearchText(e.target.value)}
                // value={searchText}
                name='search'
                placeholder='Enter Food Name'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>



            {/* MAPPING FOODS */}
            <div className="m-5 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4  justify-center">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;
