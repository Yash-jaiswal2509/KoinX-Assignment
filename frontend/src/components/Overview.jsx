import axios from "axios";
import { LucideInfo, TriangleIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Overview = () => {
    const apiUrl = import.meta.env.VITE_KOINX_API_URL;
    const apiKey = import.meta.env.VITE_KOINX_API_KEY;

    const [currentPrice, setCurrentPrice] = useState(0);
    const [todayLow, setTodayLow] = useState(0);
    const [todayHigh, setTodayHigh] = useState(0);
    const [ath, setAth] = useState(0);
    const [atl, setAtl] = useState(0);
    const [tradingVol, setTradingVol] = useState(0);
    const [mcRank, setMcRank] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [mcd, setMcd] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await axios.get(`${apiUrl}/coins/bitcoin`, {
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
            const response2 = await axios.get(`${apiUrl}/global`, {
                headers: {
                    "x-cg-demo-api-key": apiKey
                }
            })


            const data1 = response1.data.market_data;
            const data2 = response2.data.data;
            setCurrentPrice(data1.current_price.usd);
            setTodayLow(data1.low_24h.usd);
            setTodayHigh(data1.high_24h.usd);
            setAtl(data1.atl.usd);
            setAth(data1.ath.usd);
            setTradingVol(data1.total_volume.usd)
            setMcRank(data1.market_cap_rank);
            setMarketCap(data1.market_cap.usd);
            setMcd(data2.market_cap_percentage.btc)

        }
        fetchData();
    }, []);

    const rangePosition = Math.floor((550 * (todayHigh - currentPrice)) / (todayHigh - todayLow));

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold">Performance</h1>

            <div className=" flex justify-between items-center">
                <div className="m-4">
                    <p className="mb-2 text-base">Today's Low</p>
                    <span className="font-semibold text-lg">${todayLow}</span>
                </div>
                <div className="relative px-8">
                    <div className="mb-1 bg-gradient-to-r from-red-400 from-10% via-yellow-400 via-60% to-green-400 w-[580px] h-[6px] rounded-full"></div>
                    <span style={{ right: `${rangePosition}px` }} className="absolute text-lg flex flex-col items-center">
                        <TriangleIcon size={12} fill="black" strokeWidth={0} />
                        <span className="mt-1">${currentPrice}</span>
                    </span>
                </div>


                <div className="m-4">
                    <p className="mb-2 text-base">Today's High</p>
                    <span className="font-semibold text-lg">${todayHigh}</span>
                </div>
            </div>


            <div className=" flex justify-between items-center">
                <div className="m-4">
                    <p className="mb-2 text-base">All time Low</p>
                    <span className="font-semibold text-lg">${atl}</span>
                </div>
                <div className="px-6">
                    <div className="mb-1 bg-gradient-to-r from-red-400 from-10% via-yellow-400 via-60% to-green-400 w-[580px] h-[6px] rounded-full"></div>
                </div>

                <div className="m-4">
                    <p className="mb-2 text-base">All time High</p>
                    <span className="font-semibold text-lg">${ath}</span>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-black/70 flex items-center mt-8 gap-2">Fundamentals <LucideInfo size={30} color="white" fill="grey" className=" opacity-50" /></h2>
            <div className="grid grid-cols-2 gap-20 w-full my-2">
                <div>
                    <div className="flex justify-between text-lg py-5 border-b-2"><div className="font-semibold text-gray-500">
                        Bitcoin Price</div>
                        <div className="font-semibold">${currentPrice}</div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2"><div className="font-semibold text-gray-500">
                        24h Low / 24h High</div>
                        <div className="font-semibold">${todayLow} / ${todayHigh}</div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2"><div className="font-semibold text-gray-500">
                        All-Time Low / All-Time High</div>
                        <div className="font-semibold">${atl} / ${ath}</div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2"><div className="font-semibold text-gray-500">
                        Trading Volume</div>
                        <div className="font-semibold">${tradingVol}</div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2"><div className="font-semibold text-gray-500">
                        Market Cap Rank</div>
                        <div className="font-semibold">#{mcRank}</div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-lg py-5 border-b-2 "><div className="font-semibold text-gray-500">
                        Market Cap</div>
                        <div className="font-semibold">${marketCap}</div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2 "><div className="font-semibold text-gray-500">
                        Market Cap Dominance</div>
                        <div className="font-semibold">{(mcd).toFixed(2)}%</div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2 "><div className="font-semibold text-gray-500">
                        Volume / Market Cap</div>
                        <div className="font-semibold"></div>
                        {(tradingVol / marketCap).toFixed(4)}
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2 "><div className="font-semibold text-gray-500">
                        All-Time High</div>
                        <div className="font-semibold">${ath} <span className={(currentPrice - ath > 0) ? "text-green-500 mx-2" : "text-red-500 mx-2"}>{(((currentPrice - ath) * 100) / ath).toFixed(2)}%</span></div>
                    </div>
                    <div className="flex justify-between text-lg py-5 border-b-2 "><div className="font-semibold text-gray-500">
                        All-Time Low</div>
                        <div className="font-semibold">${atl} <span className={(currentPrice - atl > 0) ? "text-green-600 mx-2" : "text-red-500 mx-2"}>{(((currentPrice - atl) * 100) / atl).toFixed(2)}%</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;

