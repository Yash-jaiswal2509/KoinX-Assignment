import { headBreadcrumb } from "@/Arrays";
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";

const Header = () => {

    return (
        <div className="flex h-20 px-10 shadow-md items-center justify-between w-full">
            <div className="relative p-5 cursor-pointer"><img src="/Logo.svg" className="h-16 mx-1" alt="Logo" /><span className="top-8 right-2 absolute text-[8px] font-black">TM</span></div>

            <Menu size={30} className=" cursor-pointer lg:hidden" />
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