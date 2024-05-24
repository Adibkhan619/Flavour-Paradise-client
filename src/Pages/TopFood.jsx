import axios from "axios";
import { useEffect, useState } from "react";

import TopFoodCard from "../components/TopFoodCard";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TopFood = () => {

    const [items, setItems] = useState([])
    // const myOrders = useLoaderData();
    // const [orders, setOrders] = useState([]);
    // const {
    //     name,
    //     price,
    //     orderQuantity,
    //     buyerName,
    //     email,
    //     date,
    //     image,
    //     foodDescription,
    //     chef,
    //     origin,
    //     category,
    //     available,
    // } = myOrders;
    // setOrders(myOrders);
    // console.log(myOrders);
    
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://b9a11-server-side-adibkhan619.vercel.app/orders`)
            setItems(data)
          }
          
        getData()
      }, [])
   

      console.log(items);
const slicedFood = items.slice(0,6)

    return (
  <Fade>
          <div className="lg:m-5 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-4  justify-center"> 
            {
                slicedFood.map(food => <TopFoodCard key={food._id} food={food}></TopFoodCard>)
            }
        </div>
        <Link to="/allfoods"><button className="btn-secondary btn mx-auto flex px-20 text-2xl oleo lg:mt-20 mt-5">All Foods</button></Link>
  </Fade>
    );
};

export default TopFood;