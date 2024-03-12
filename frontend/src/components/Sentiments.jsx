import { InfoIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "./ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Sentiments = () => {
    const [sentimentUp, setSentimentUp] = useState(0);
    const [sentimentDown, setSentimentDown] = useState(0);

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
                    <CarouselItem className="basis-3/5">
                        <div className="flex bg-[#0082ff]/10 gap-2 p-5 rounded-lg">
                            <img src="Ove1.png" alt="News" className="rounded-full h-16" />
                            <div>
                                <h1 className="font-semibold mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio laudantium velit esse aperiam minima</h1>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum soluta alias magni inventore consequatur dolor amet voluptates, eligendi nulla commodi laborum. Ratione labore dignissimos veritatis dolore rerum nisi! Voluptate?</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-3/5">
                        <div className="flex bg-[#0fba83]/10 gap-2 p-5 rounded-lg ">
                            <img src="Ove2.png" alt="News" className="rounded-full h-16" />
                            <div>
                                <h1 className="font-semibold mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio laudantium velit esse aperiam minima</h1>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum soluta alias magni inventore consequatur dolor amet voluptates, eligendi nulla commodi laborum. Ratione labore dignissimos veritatis dolore rerum nisi! Voluptate?</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-3/5">
                        <div className="flex bg-[#0fba83]/10 gap-2 p-5 rounded-lg ">
                            <img src="Ove2.png" alt="News" className="rounded-full h-16" />
                            <div>
                                <h1 className="font-semibold mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio laudantium velit esse aperiam minima</h1>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum soluta alias magni inventore consequatur dolor amet voluptates, eligendi nulla commodi laborum. Ratione labore dignissimos veritatis dolore rerum nisi! Voluptate?</p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext className="w-16 h-16 right-0"/>
            </Carousel>


            <div className="my-8">
                <h1 className="text-2xl my-6 text-gray-600 font-bold flex items-center gap-2">Analyst Estimates <InfoIcon className=" opacity-80" size={30} fill="grey" color="white" /></h1>
                <div className="flex gap-10">
                    <div className="w-32 h-32 bg-[#0fba83]/15 rounded-full text-xl text-[#0fba83] font-bold flex items-center justify-center"><span>{sentimentUp}%</span></div>
                    <div className="flex flex-col justify-between p-8">
                        <div>Sentiment Up </div>
                        <div>Sentiment Down </div>
                    </div>
                    <div className="flex flex-col justify-between p-8">
                        <div className="flex items-center gap-4"><div style={{ width: `${2 * sentimentUp}px` }} className="h-2 bg-[#0fba83] rounded-full"></div>{sentimentUp}%</div>
                        <div className="flex items-center gap-4"><div style={{ width: `${2 * sentimentDown}px` }} className="h-2 bg-[#f87171] rounded-full"></div>{sentimentDown}%</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sentiments;