

const UserCard = ({ user }) => {
    const { name, review, img } = user;
    return (
        <div className="flex h-full  mx-2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-200
        
        transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110
        ">
            <img
                src={img}
                alt=""
                className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                        {name}
                    </h2>
                    <p className="px-5 text-xs sm:text-base text-gray-500 dark:text-gray-600">
                        {review}
                    </p>
                </div>
             
            </div>
        </div>
    );
};

export default UserCard;
