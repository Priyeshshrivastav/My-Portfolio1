import { Moon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Sun } from 'lucide-react';
import { cn } from '@/lib/Utils'; 
const Themetoggle = () => {

    const [isdark,setisdark]=useState(false);

    useEffect(()=>{
        const storedtheme = localStorage.getItem("theme");
        if(storedtheme==="dark"){
            setisdark(true);
            document.documentElement.classList.add("dark");

        }else{
            setisdark(false);
            document.documentElement.classList.remove("dark");
        }

    },[])


    const handletoggel=()=>{
        if(isdark){
            document.documentElement.classList.remove("dark"); 
            localStorage.setItem("theme","light"); 
            setisdark(false);

        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setisdark(true);

        }
    }
  return (
    <button onClick={handletoggel} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {isdark?(<Sun className="h-6 w-6 text-yellow-300"/>):
        (
        <Moon className="h-6 w-6 text-blue-300"/>)}

    </button>
  )
}

export default Themetoggle
