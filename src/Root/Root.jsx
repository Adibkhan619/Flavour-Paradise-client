
import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import NavBar2 from '../components/NavBar2';
// import Navbar3 from '../components/NavBar3';
import Navbar4 from '../components/Navbar4';
import { Fade } from "react-awesome-reveal";
const Root = () => {
    return (
        <Fade>
        <div className='josefin font-medium bg-contain bg-fixed min-w-full  '> 
        
        {/* <div className='josefin font-medium bg-contain bg-fixed min-w-full  'style={{backgroundImage: 'url(https://i.postimg.cc/283SY7FS/lukas-blazek-EWDv-HNNf-Um-Q-unsplash.jpg)' , backgroundSize: 'cover' }}>  */}
        
        {/* <div className='josefin font-medium 
         
        > */}
            <Navbar4></Navbar4>
            {/* <Navbar3></Navbar3> */}
            {/* <Navbar></Navbar> */}
            {/* <NavBar2></NavBar2> */}
            <Outlet></Outlet>
            {/* <div className='min-h-[calc(100vh-364px)]'>
                
            </div> */}
            
            <Footer></Footer>
        </div></Fade>
    );
};

export default Root;