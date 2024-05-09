const SlidesOne = () => {
    return (
        <div className="">
            <div
                className="hero -z-9999  lg:min-h-[600px] w-full"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/T34zqRRp/vk-bro-79-ZJS8p-V70-unsplash.jpg)",
                }}
            >
                <div className="hero-overlay bg-gray-900 bg-opacity-30"></div>
                <div className="  text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl text-gray-50 acme font-bold ">
                            Explore Your World
                        </h1>
                        <p className="mb-5">
                            Embark on a journey of discovery with our curated
                            collection of travel experiences. From breathtaking
                            landscapes to vibrant cultures, our website is your
                            gateway to endless adventures.{" "}
                        </p>
                        {/* <Link to="/register"><button className="btn btn-primary">Get Started</button>
</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidesOne;