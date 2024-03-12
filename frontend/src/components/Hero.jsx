import { ArrowRight } from "lucide-react";
import Widget from "./Widget.jsx";
import { Button } from "./ui/button.jsx";
import TrendingCoins from "./TrendingCoins.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import Overview from "./Overview.jsx";
import Sentiments from "./Sentiments.jsx";
import About from "./About.jsx";
import Tokenomics from "./Tokenomics.jsx";
import Teams from "./Teams.jsx";

const Hero = () => {

    return (
        <div className="flex flex-col border bg-slate-400/10 h-full w-full">
            <h1 className="mx-10 my-5 flex items-center text-md text-muted-foreground">
                Cryptocurrencies
                <img src="/Forward.png" className="h-3 ml-2" alt="Forward-Logo" />
                <p className=" text-black ">Bitcoin</p>
            </h1>

            <div className="flex justify-between w-full">

                <div className="h-full w-full ml-10 mr-3">

                    <div className="h-full w-full rounded-2xl overflow-hidden shadow-sm">
                        <Widget />
                    </div>

                    <div className="my-3">
                        <Breadcrumb />
                    </div>

                    <div>
                        <Overview />
                    </div>

                    <div className="my-5">
                        <Sentiments />
                    </div>

                    <div className="my-5">
                        <About />
                    </div>

                    <div className="my-5">
                        <Tokenomics />
                    </div>

                    <div className="my-5">
                        <Teams />
                    </div>

                </div>

                <div className="mr-10 ml-5 h-full">
                    <div className="py-5 h-full bg-[#0052fe] text-white flex flex-col items-center overflow-hidden rounded-2xl shadow-xl">
                        <div className="text-3xl font-bold flex flex-col items-center">
                            <p className="m-2 text-center">Get Started with KoniX for Free</p>
                        </div>

                        <div className="text-sm m-4 flex flex-col items-center">
                            <p className="text-center">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
                            </p>
                        </div>

                        <img src="/pic1.png" className="h-62 w-72" alt="Pic 1" />

                        <Button className="m-2 bg-white text-black text-base font-bold hover:bg-white/95">
                            Get Started For Free
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </div>
                    <div className="my-5 w-full">
                        <TrendingCoins />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;