import Widget from "./Widget.jsx";
import TrendingCoins from "./TrendingCoins.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import Overview from "./Overview.jsx";
import Sentiments from "./Sentiments.jsx";
import About from "./About.jsx";
import Tokenomics from "./Tokenomics.jsx";
import Teams from "./Teams.jsx";
import YouMayAlsoLike from "./YouMayAlsoLike.jsx";
import FreeKoinx from "./FreeKoinx.jsx";

const Hero = () => {

    return (
        <div className="flex flex-col border bg-slate-400/10 h-full w-full">
            <h1 className="mx-10 my-5 flex items-center text-md text-muted-foreground">
                Cryptocurrencies
                <img src="/Forward.png" className="h-3 ml-2" alt="Forward-Logo" />
                <p className=" text-black ">Bitcoin</p>
            </h1>

            <div className="flex justify-between w-full px-5 ml-0 lg:px-0 lg:ml-5">

                <div className="h-full w-full">

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

                    <div className=" md:hidden bg-white rounded-lg shadow-sm block">
                        <YouMayAlsoLike />
                    </div>

                    <div className="md:hidden block mt-5">
                        <FreeKoinx />
                    </div>

                </div>

                <div className="mr-0 ml-5 h-full lg:mr-10 hidden lg:block">
                    <FreeKoinx />
                    <div className="my-5 w-full">
                        <TrendingCoins />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;