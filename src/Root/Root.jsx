
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='min-h-[calc(100vh-364px)]'>
                
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;