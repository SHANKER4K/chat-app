import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export function ChatNav({ }) {
    return (
        <div className="flex justify-between items-center py-1">
            <div className="flex gap-5 items-center">
                <div className={`rounded-full border-blue-400 overflow-hidden w-16 h-16 flex items-center justify-center ring-2`}>
                    <img src={"https://i.pinimg.com/736x/86/bf/89/86bf89f00fce56f208dd9a04097ce525.jpg"} alt="Card Image" className={`w-full h-full object-cover `} />
                </div>
                <div className="flex flex-col">
                    <p>Ismail</p>
                    <p>Online</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button className="h-8 w-8 rounded-full m-auto hover:bg-neutral-400">
                    <center>
                        <FaPhone />

                    </center>
                </button>
                <button className="h-8 w-8 rounded-full m-auto hover:bg-neutral-400">
                    <center>
                        <MdDelete />

                    </center>
                </button>
            </div>
        </div>
    )
}
