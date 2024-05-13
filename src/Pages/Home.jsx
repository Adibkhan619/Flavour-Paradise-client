import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";
import HomeTypewriter from "../components/HomeStyle/HomeTypewriter";
import UserReview from "../components/UserReview";
import TopFood from "./TopFood";

const Home = () => {
    return (
<Fade>
<div>
            
            <Banner></Banner>
            <div className="mx-10">
                <HomeTypewriter></HomeTypewriter>
                <TopFood></TopFood>
                <UserReview></UserReview>
            </div>
            
        </div>
</Fade>
    );
};

export default Home;