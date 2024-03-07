import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <div className="flex h-20 px-10 shadow-md items-center justify-between">
            <div className="relative p-5  cursor-pointer"><img src="/Logo.svg" className="h-16 mx-1" alt="Logo" /><span className="top-8 right-2 absolute text-[8px] font-black">TM</span></div>
            <div className="flex gap-5 items-center font-bold text-[18px] cursor-pointer">
                <div className="flex gap-8">
                    <h2>Crypto Taxes</h2>
                    <h2>Free Tools</h2>
                    <h2>Resource Center</h2>
                </div>
                <div>
                    <Button className="shadow-inner shadow-blue-600 text-md">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;