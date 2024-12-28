import { ChatNav } from './ChatNav';
import { GoSidebarExpand } from "react-icons/go";
import { FaAngleUp } from "react-icons/fa"; import React from 'react'

function Chat() {
    const currentDate = new Date();

    // Extract parts of the date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();

    // Format as "YYYY-MM-DD"
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    return (
        <div className='flex flex-col h-full gap-5'>
            <ChatNav />
            <div className=" h-full w-full p-7 flex flex-col justify-between">
                <div>
                    <center>
                        {
                            formattedDate + " " + (currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours()) + ":" + (currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes()) + ":" + (currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds())
                        }
                    </center>
                </div>
                <div className="container flex items-center gap-2">
                    <input type="text" name="message" placeholder='Write a message...' className="w-full px-3 py-2 placeholder:text-neutral-600 outline-violet-600  rounded-xl" />
                    <button className='h-9 w-10 rounded-xl bg-blue-500'>
                        <FaAngleUp className='h-full w-full' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat