import { ArrowRight } from "lucide-react";
import Widget from "./Widget.jsx";
import { Button } from "./ui/button.jsx";
import TrendingCoins from "./TrendingCoins.jsx";

const Hero = () => {
    return (
        <div className="flex flex-col border bg-slate-400/10 h-full w-full">
            <h1 className="mx-10 my-5 flex items-center text-md text-muted-foreground">
                Cryptocurrencies
                <img src="/Forward.png" className="h-3 ml-2" alt="Forward-Logo" />
                <p className=" text-black ">Bitcoin</p>
            </h1>
            <div className="flex justify-between w-full">
                <div className="w-full ml-10 rounded-2xl overflow-hidden shadow-lg">
                    <Widget />
                </div>
                <div className="mr-10 ml-5 h-full min-w-[400px]">
                    <div className="p-5 h-full bg-[#0052fe] text-white flex flex-col items-center overflow-hidden rounded-2xl shadow-xl">
                        <p className="m-2 text-3xl font-bold flex flex-col items-center">
                            Get Started with KoniX <p>for FREE</p>
                        </p>
                        <div className="m-7 text-sm my-4 flex flex-col items-center">
                            <p>With our range of features that you can equip for</p>
                            <p>free,KoinX allows you to be more educated and</p>
                            <p>aware of your tax reports.</p>
                        </div>
                        <img src="/pic1.png" className="h-62 w-72" alt="Pic 1" />
                        <Button className="m-2 bg-white text-black text-base font-bold hover:bg-white/95">
                            Get Started For Free
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </div>
                    <div className="m-5 w-full bg">
                        <TrendingCoins />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
