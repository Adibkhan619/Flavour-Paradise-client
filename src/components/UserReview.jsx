import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import UserCard from "./UserCard";
import { Fade } from "react-awesome-reveal";

const UserReview = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://b9a11-server-side-adibkhan619.vercel.app/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);
    console.log(users);
    return (
        
      <Fade>
          <div className="flex my-10 lg:my-16">
            <Marquee>
            {users.map((user) => (
                <UserCard user={user} key={user._id}></UserCard>
            ))}
            </Marquee>
        </div>
      </Fade>
    );
};

export default UserReview;