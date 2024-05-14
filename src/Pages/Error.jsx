import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/yxjHqC9Q/lukas-blazek-f-TWh-XOr-Li-U-unsplash.jpg)'}}>
                 <Helmet>
                <title>Flavour Paradise | Error</title>
            </Helmet>
  <div className="hero-overlay bg-opacity-30">
    
  </div>
  <div className="hero-content items-center text-center text-neutral-content">
    <div className="max-w-md">
        <img className="h-64 opacity-90" src="https://i.postimg.cc/kgXjpNx9/pngwing-com-3.png" alt="" />
      <h1 className="mb-5 text-7xl font-bold acme text-gray-800 underline">404</h1>
      <p className="mb-5 text-4xl oleo font-semibold text-black">Page not found</p>
      <Link to="/">
        <button className="btn btn-outline font-bold p-15 text-red-700 text-4xl sacramento">Get Back</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default Error;