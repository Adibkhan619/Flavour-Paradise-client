import { useLoaderData } from "react-router-dom";

const MyOrders = () => {
    const myOrders = useLoaderData();
    console.log(myOrders);
    return (
        <div>
            
        </div>
    );
};

export default MyOrders;