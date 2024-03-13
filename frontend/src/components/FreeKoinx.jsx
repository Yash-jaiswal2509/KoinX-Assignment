import { Button } from "./ui/button.jsx";
import { ArrowRight } from "lucide-react";


const FreeKoinx = () => {

    return (
        <div className="py-5 h-full bg-[#0052fe] text-white flex flex-col items-center overflow-hidden rounded-2xl shadow-xl">
            <div className="font-bold flex flex-col items-center sm:text-3xl md:text-xl xl:text-2xl 2xl:text-3xl">
                <p className="m-2 text-center">Get Started with KoniX for Free</p>
            </div>

            <div className="sm:text-xl m-4 flex flex-col items-center lg:text-sm">
                <p className="text-center">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
                </p>
            </div>

            <img src="/pic1.png" className="lg:h-40 lg:w-52 xl:h-48 xl:w-60 2xl:h-62 2xl:w-72" alt="Pic 1" />

            <Button className="m-2 bg-white text-black sm:text-xl lg:text-base font-bold hover:bg-white/95">
                Get Started For Free
                <ArrowRight className="ml-2" size={20} />
            </Button>
        </div>
    )
}

export default FreeKoinx;