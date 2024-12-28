"use client"
import { Button } from "@/components/ui/button"
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import Slider from './components/Slider.js'
import Chat from './components/Chat.js'
import { useState } from "react";
import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
export default function Home() {
  const [isOpen, setisOpen] = useState(true)

  return (
    <div className='flex bg-gradient-to-b from-black to-slate-950 h-screen'>
      <Slider />
      <div className='px-5 w-full text-white'>
        <Chat />
      </div>
    </div >
  );
}
