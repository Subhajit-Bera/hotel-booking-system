import React from 'react'
import Image from "next/image";

const Block = ({imgSrc,title,para}) => {
    return (
        <div className=" border-r border-gray-300 w-60 h-full flex items-center px-2">
            <Image
                src={imgSrc}
                alt="demo"
                width={200}
                height={200}
                className=" w-10 h-10 rounded-full mr-2"
            />
    
            <div>
                <h3 className=" font-bold">{title}</h3>
                <p className=" text-gray-400 text-xs line-clamp-1">
                    {para}
                </p>
            </div>
        </div>
    )
}

export default Block
