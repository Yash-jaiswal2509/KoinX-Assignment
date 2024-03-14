import { InfoIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "./ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Sentiments = () => {
    const [sentimentUp, setSentimentUp] = useState(0);
    const [sentimentDown, setSentimentDown] = useState(0);

    var multiple = 2;
    if (screen.availWidth < 476) { multiple = 1; } 

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_KOINX_API_URL;
        const apiKey = import.meta.env.VITE_KOINX_API_KEY;
        const fetchData = async () => {
            const response = await axios.get(`${apiUrl}/coins/bitcoin`, {
                headers: {
                    "x-cg-demo-api-key": apiKey
                },
                params: {
                    market_data: true,
                    localization: false,
                    tickers: false,
                    community_data: false,
                    developer_data: false,
                    sparkline: false
                }
            })
            setSentimentUp(response.data.sentiment_votes_up_percentage);
            setSentimentDown(response.data.sentiment_votes_down_percentage);
        }
        fetchData();
    }, []);



    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold">Sentiments</h1>
            <h1 className="text-2xl my-3 font-bold text-gray-600 flex items-center gap-2">Key Events <InfoIcon className=" opacity-80" size={30} fill="grey" color="white" /></h1>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className=" sm:basis-4/5 md:basis-3/5">
                        <div className="flex bg-[#0082ff]/10 gap-2 p-5 rounded-lg">
                            <img src="Ove1.png" alt="News" className="rounded-full h-16" />
                            <div>
                                <h1 className="font-semibold mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio laudantium velit esse aperiam minima</h1>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum soluta alias magni inventore consequatur dolor amet voluptates, eligendi nulla commodi laborum. Ratione labore dignissimos veritatis dolore rerum nisi! Voluptate?</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" sm:basis-4/5 md:basis-3/5">
                        <div className="flex bg-[#0fba83]/10 gap-2 p-5 rounded-lg ">
                            <img src="Ove2.png" alt="News" className="rounded-full h-16" />
                            <div>
                                <h1 className="font-semibold mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio laudantium velit esse aperiam minima</h1>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum soluta alias magni inventore consequatur dolor amet voluptates, eligendi nulla commodi laborum. Ratione labore dignissimos veritatis dolore rerum nisi! Voluptate?</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className=" sm:basis-4/5 md:basis-3/5">
                        <div className="flex bg-[#da8cff]/10 gap-2 p-5 rounded-lg ">
                            <img src="Ove3.png" alt="News" className="rounded-full h-16" />
                            <div>
                                <h1 className="font-semibold mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio laudantium velit esse aperiam minima</h1>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum soluta alias magni inventore consequatur dolor amet voluptates, eligendi nulla commodi laborum. Ratione labore dignissimos veritatis dolore rerum nisi! Voluptate?</p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext className="w-16 h-16 right-0" />
            </Carousel>


            <div className="mt-4 sm:my-8">
                <h1 className="text-xl sm:text-2xl my-6 text-gray-600 font-bold flex items-center gap-2">Analyst Estimates <InfoIcon className=" opacity-80" size={30} fill="grey" color="white" /></h1>
                <div className="flex-col flex sm:flex-row items-center gap-5 sm:gap-6 md:gap-6">
                    <div className="w-20 h-20 mx-auto sm:mx-0  p-2 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#0fba83]/15 rounded-full text-sm sm:text-xl text-[#0fba83] font-bold flex items-center justify-center"><span>{sentimentUp}%</span></div>
                    <div className="flex flex-col justify-between text-xs mr-1 sm:text-sm md:text-lg md:p-8">
                        <div className="flex items-center gap-8 text-nowrap">
                            <div className="mb-2">Sentiment Up </div>
                            <div className="flex items-center gap-4"><div style={{ width: `${multiple * sentimentUp}px` }} className="h-2 bg-[#0fba83] rounded-full"></div>{sentimentUp}%</div>
                        </div>
                        <div className="flex items-center gap-4 text-nowrap">
                            <div className="mb-2">Sentiment Down</div>
                            <div className="flex items-center gap-4"><div style={{ width: `${multiple * sentimentDown}px` }} className="h-2 bg-[#f87171] rounded-full"></div>{sentimentDown}%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sentiments;