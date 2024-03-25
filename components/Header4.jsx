"use client";
import Image from "next/image";

const Header4 = () => {
    return (
        <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
            <div className="flex items-center">
                <Image
                    src={"/fire.jpg"}
                    alt="fire"
                    width={200}
                    height={200}
                    className=" w-20 h-20 rounded-full mr-5"
                />
                <div className=" text-lg">
                    <p className=" font-bold">Get access to exclusive deals</p>
                    <p>Only the best deals reach your inbox</p>
                </div>
            </div>
            <div className="flex">
                <input type="email" className="px-4 py-2 rounded-lg mr-3 w-70 h-12 outline-none border border-gray-300" placeholder="e.g. john@gmail.com" />
                <button type="submit" className=" w-40 rounded-lg h-12 bg-red-500 text-lg text-white cursor-pointer ">Notify</button>
            </div>
        </div>
    )
}

export default Header4
