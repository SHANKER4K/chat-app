"use client"
import { Card } from './Card.jsx';
import { useState } from "react"
const initialCards = [
    {
        title: "Ismail",
        description: "way",
        image: "https://i.pinimg.com/736x/86/bf/89/86bf89f00fce56f208dd9a04097ce525.jpg"
    },
    {
        title: "SHANKER",
        description: "XD",
        image: "https://i.pinimg.com/736x/60/5b/bb/605bbb4a5696dbc0ccbafca24a036b52.jpg"
    },
    {
        title: "SHK",
        description: "Asallam",
        image: "https://i.pinimg.com/736x/69/3e/18/693e186b57c611c77051a72b4da91b98.jpg"
    },
]

function Slider({ isOpen, setisOpen }) {
    const [selected, setSelected] = useState(0)
    const [cards, setCards] = useState(initialCards)


    return (
        <div className="top-0 left-0 w-1/3 h-screen bg-slate-900 text-white flex flex-col overflow-y-auto scrollbar-hide">
            <div className="p-4 text-xl font-bold border-gray-700">Chat</div>
            <nav className="flex-1">
                <ul className="space-y-2 p-4">
                    {
                        cards.map((val, i) => (
                            <Card key={val.title} name={val.title} message={val.description} image={val.image} index={i} selected={selected} setSelected={setSelected} />
                        ))
                    }
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-700 text-sm">© 2024 My Company</div>
        </div>

    )
}

export default Slider

