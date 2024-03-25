import React from 'react'
import Image from "next/image";
import Block from './Block';
const Header1 = () => {
    return (
        <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
            <Image
                src={"/logo.png"}
                alt="logo"
                width={200}
                height={200}
                className=" w-28 h-28 "
            />
            <div className=" h-full flex">
                <Block imgSrc={"/m.png"} title={"Become a member"} para={"Additional 10% off on stays."} />
                <Block imgSrc={"/busi.png"} title={"StayEase for business"} para={"Trusted by 5000 corporates"} />
                <Block imgSrc={"/industry.png"} title={"List your property"} para={"Start earning in 30 min"} />
                <Block imgSrc={"/phone.png"} title={"123456789"} para={"Call us to book now."} />

                <div className="flex items-center px-3 ">
                    <Image
                        src={"/user.png"}
                        alt="logo"
                        width={200}
                        height={200}
                        className=" w-10 h-10 rounded-full mr-2"
                    />
                    <h3 className="font-bold">Login / Signup</h3>
                </div>


            </div>

        </div>
    )
}

export default Header1
