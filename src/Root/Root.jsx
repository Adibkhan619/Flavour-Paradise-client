
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavBar2 from '../components/NavBar2';
import Navbar3 from '../components/NavBar3';
import Navbar4 from '../components/Navbar4';

const Root = () => {
    return (
        <div>
            <Navbar4></Navbar4>
            {/* <Navbar3></Navbar3> */}
            {/* <Navbar></Navbar> */}
            {/* <NavBar2></NavBar2> */}
            <Outlet></Outlet>
            <div className='min-h-[calc(100vh-364px)]'>
                
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;