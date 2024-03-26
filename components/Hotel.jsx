import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
    return (
        <div className=" border-2 border-red-500 rounded-lg h-70 w-full mb-5 p-3">
            <div className="flex">
                {/* Large Image */}
                <Image
                    src={"/bg.jpg"}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" w-96 h-60 mr-3"
                />

                {/* Small Images */}
                <div className="flex flex-col justify-between">
                    <Image
                        src={"/bg.jpg"}
                        alt="hotel"
                        width={200}
                        height={200}
                        className="w-28 h-12 object-cover"
                    />

                    <Image
                        src={"/bg.jpg"}
                        alt="hotel"
                        width={200}
                        height={200}
                        className="w-28 h-12 object-cover"
                    />

                    <Image
                        src={"/bg.jpg"}
                        alt="hotel"
                        width={200}
                        height={200}
                        className="w-28 h-12 object-cover"
                    />

                    <Image
                        src={"/bg.jpg"}
                        alt="hotel"
                        width={200}
                        height={200}
                        className="w-28 h-12 object-cover"
                    />
                </div>

                <div className=" mx-10">
                    {/* Title description facilities */}
                    <h2 className="font-bold text-xl line-clamp-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc</h2>
                    <p className=" text-justify my-3 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <div className="my-3">
                        <span className=" font-bold text-xl">Facilities : </span>
                        <span className=" font-bold text-lg" >Lorem ipsum, dolor sit, amet, consectetur ,adipiscing elit, sed do ,eiusmod tempor . </span>

                    </div>


                    <div className=" flex items-center">
                        <button className=" w-40 h-12 rounded-lg bg-red-400 text-lg text-white font-bold">
                            Price : &#8377; 4000
                        </button>
                        <Link
                            href={`/hotels/2`}
                            className="text-lg font-bold text-red-500 ml-5"
                        >
                            See Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
