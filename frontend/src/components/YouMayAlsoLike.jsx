import { useEffect, useState } from "react";
import axios

    from "axios";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
const YouMayAlsoLike = () => {
    const [sortCoins, setSortCoins] = useState([]);
    const [coins, setCoins] = useState([]);

    useEffect(() => {

        const apiUrl = import.meta.env.VITE_KOINX_API_URL;
        const apiKey = import.meta.env.VITE_KOINX_API_KEY;
        const fetchData = async () => {
            const response1 = await axios.get(`${apiUrl}/search/trending`, {
                headers: {
                    "x-cg-demo-api-key": apiKey
                },
            })
            const response2 = await axios.get(`${apiUrl}/search/trending`, {
                headers: {
                    "x-cg-demo-api-key": apiKey
                },
            })

            setSortCoins(response1.data.coins.reverse());
            setCoins(response2.data.coins);



        }
        fetchData();
    }, []);

    return (
        <div className="p-10 sm:p-16 pb-24 mb-5 md:mb-0">
            <h2 className="text-3xl font-bold mb-5">You May Also Like</h2>
            <Carousel>
                <CarouselContent>
                    {sortCoins.map((coin) => {
                        const priceChange = (coin.item.data.price_change_percentage_24h.usd).toFixed(2);
                        const spanStyle = "h-8 w-16 my-2 text-base flex items-center justify-center gap-1 rounded-md font-semibold";

                        return (
                            <CarouselItem key={coin.item.id} className="border-2 p-5 basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-1/4 ml-4 rounded-2xl">
                                <div className="flex flex-col mr-10 gap-2">
                                    <div className="flex items-center gap-2 text-nowrap">
                                        <img src={coin.item.thumb} alt={coin.item.id} className="h-8 w-8 rounded-full" />
                                        <p className="font-semibold text-lg">{coin.item.name}</p>
                                        <span className={(priceChange > 0) ? `bg-[#47b68f]/10 text-[#47b68f] ${spanStyle}` : `bg-[#ff6565]/10 text-[#ff6565] ${spanStyle}`}>{(priceChange > 0 ? "+" : "")}{priceChange}</span>
                                    </div>
                                    <div className=" font-bold text-2xl">
                                        {coin.item.data.price}
                                    </div>
                                    <img src={coin.item.data.sparkline} className="h-20 w-full mt-2" alt={coin.item.id} />
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselNext className="w-12 h-12 right-0 opacity-80" />
                <CarouselPrevious className="w-12 h-12 left-0 opacity-80" />
            </Carousel>

            <h2 className="text-3xl font-bold my-8">Trending Coins</h2>
            <Carousel>
                <CarouselContent>
                    {coins.map((coin) => {
                        const priceChange = (coin.item.data.price_change_percentage_24h.usd).toFixed(2);
                        const spanStyle = "h-8 w-16 my-2 text-base flex items-center justify-center gap-1 rounded-md font-semibold";

                        return (
                            <CarouselItem key={coin.item.id} className="border-2 p-5 basis-4/5 sm:basis-3/5 md:basis-2/5 ml-4 rounded-2xl lg:basis-1/4">
                                <div className="flex flex-col mr-10 gap-2">
                                    <div className="flex items-center gap-2 text-nowrap">
                                        <img src={coin.item.thumb} alt={coin.item.id} className="h-8 w-8 rounded-full" />
                                        <p className="font-semibold text-lg">{coin.item.name}</p>
                                        <span className={(priceChange > 0) ? `bg-[#47b68f]/10 text-[#47b68f] ${spanStyle}` : `bg-[#ff6565]/10 text-[#ff6565] ${spanStyle}`}>{(priceChange > 0 ? "+" : "")}{priceChange}</span>
                                    </div>
                                    <div className=" font-bold text-2xl">
                                        {coin.item.data.price}
                                    </div>
                                    <img src={coin.item.data.sparkline} className="h-20 w-full mt-2" alt={coin.item.id} />
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselNext className="w-12 h-12 right-0" />
                <CarouselPrevious className="w-12 h-12 left-0" />
            </Carousel>

        </div>
    )
}

export default YouMayAlsoLike;