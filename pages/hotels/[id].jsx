import Image from "next/image"
const SingleHotel = () => {
    return (
        <>
            <div className="w-7/12 mx-auto my-2">
                <Image
                    src={"/bg.jpg"}
                    alt="hotel"
                    width={2000}
                    height={2000}
                    className=" w-full h-large-box my-5"
                />
                <div className=" ">
                    <h3 className=" text-3xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h3>
                    <p className=" text-xl my-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                    <button className=" w-60 h-14 rounded-lg bg-red-400 text-lg">
                        Price : &#8377; 4000
                    </button>
                    <p className=" text-3xl font-bold my-5">Facilities : </p>
                    <ul className=" flex text-xl justify-between">
                        <li>fdladfa</li>
                        <li>fdladfa</li>
                        <li>fdladfa</li>
                        <li>fdladfa</li>
                        <li>fdladfa</li>
                    </ul>
                    <button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
                        Book Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default SingleHotel
