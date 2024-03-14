import { headBreadcrumb } from "@/Arrays";
import { Button } from "@/components/ui/button"
import { BadgeCent, Menu, PencilRulerIcon, Wrench } from "lucide-react";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className="flex h-20 px-2 sm:px-10 shadow-md items-center justify-between w-full">
            <div className="relative p-5 cursor-pointer"><img src="/Logo.svg" className="h-16 mx-1" alt="Logo" /><span className="top-8 right-2 absolute text-[8px] font-black">TM</span></div>

            <DropdownMenu>
                <DropdownMenuTrigger><Menu size={30} className=" cursor-pointer lg:hidden" /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="font-semibold text-xl">Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2 mr-10 text-lg font-semibold hover:bg-gray-100 cursor-pointer"><BadgeCent size={20} /> Crypto Taxes</DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 mr-10 text-lg font-semibold hover:bg-gray-100 cursor-pointer"><Wrench size={20} /> Free Tools</DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 mr-10 text-lg font-semibold hover:bg-gray-100 cursor-pointer"><PencilRulerIcon size={20} /> Research Center</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Button className="mx-auto w-full h-12 shadow-inner shadow-blue-600 font-bold tracking-wide text-lg">Get Started</Button></DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>

            <div className="gap-5 items-center font-bold text-[18px] cursor-pointer hidden lg:flex">
                <div className="flex gap-8">
                    {headBreadcrumb.map((item, id) => (
                        <h1 key={id} className="hover:opacity-70">{item}</h1>
                    ))}
                </div>
                <div>
                    <Button className="shadow-inner shadow-blue-600 text-md">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;