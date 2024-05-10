const Slides = ({image, text, paragraph}) => {
    return (
        <div className="">
            <div
                className="hero lg:min-h-[600px]  w-full"
                style={{
                    backgroundImage:
                        `url(${image})`
                }}
            >
                <div className="hero-overlay -z-999 bg-gray-900 bg-opacity-30"></div>
                <div className="  text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl text-gray-50 acme font-bold ">
                            {text}
                        </h1>
                        <p className="mb-5">
                            {paragraph}
                        </p>
                        {/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;