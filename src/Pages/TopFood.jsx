import axios from "axios";
import { useEffect, useState } from "react";

import TopFoodCard from "../components/TopFoodCard";
import { Fade } from "react-awesome-reveal";

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
            const { data } = await axios(`http://localhost:5000/orders`)
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
  </Fade>
    );
};

export default TopFood;