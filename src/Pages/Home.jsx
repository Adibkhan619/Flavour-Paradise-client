import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";
import HomeTypewriter from "../components/HomeStyle/HomeTypewriter";
import UserReview from "../components/UserReview";
import TopFood from "./TopFood";
import BonusSec1 from "../components/HomeStyle/BonusSec1";
import HomeDecor2 from "../components/HomeStyle/HomeDecor2";
import HomeDecor3 from "../components/HomeStyle/HomeDecor3";
// import Drawer from "../components/HomeStyle/Drawer";

const Home = () => {
    return (
<Fade>
<div>
            
            <Banner></Banner>           
            <div className="lg:mx-10 mx-5">
                <HomeTypewriter></HomeTypewriter>
                <BonusSec1></BonusSec1>
                <HomeDecor2></HomeDecor2>
                <TopFood></TopFood>
                <HomeDecor3></HomeDecor3>
                <UserReview></UserReview>
            </div>
            
        </div>
</Fade>
    );
};

export default Home;