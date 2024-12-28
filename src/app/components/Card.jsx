import React from "react";
export function Card({ key, name, message, image, index, selected, setSelected }) {
    return (
        <li className={`rounded-xl cursor-pointer ${index == selected ? "bg-blue-500" : "bg-gray-600"} `} onClick={() => setSelected(index)}>
            <div href="#" className="flex gap-5 items-center p-2 scroll-smooth h-24">
                <div className="w-20 h-16 rounded-full overflow-hidden">
                    <img className="w-full h-full rounded-full object-cover" src={image} alt="" />
                </div>
                <div className="flex justify-center h-full w-full flex-col">
                    <p>{name}</p>
                    <p>{message}</p>
                </div>
            </div>
        </li>
    )
}
