import axios from "axios";
import { Triangle } from "lucide-react";
import { useEffect, useState } from "react";
const TrendingCoins = () => {
  const apiUrl = import.meta.env.VITE_KOINX_API_URL;
  const apiKey = import.meta.env.VITE_KOINX_API_KEY;

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/search/trending`, {
        headers: {
          "x-cg-demo-api-key": apiKey
        }
      })

      setCoins(response.data.coins);
    }
    fetchData();
  }, []);


  return (
    <div className="bg-white p-2 rounded-lg overflow-hidden h-full xl:px-6 xl:py-3">
      <h1 className="sm:text-2xl lg:text-lg font-bold p-3 xl:text-2xl">Trending Coins (24h)</h1>
      <>
        {coins.map((coin, id) => {
          if (id > 2) {
            return
          }

          const priceChange = (coin.item.data.price_change_percentage_24h.usd).toFixed(2);
          const spanStyle = "flex h-8 sm:w-24 lg:w-16 xl:w-20 px-2 my-2 sm:text-lg lg:text-xs xl:text-base items-center justify-center gap-1 rounded-md font-semibold";

          return (
            <div key={id} className="flex justify-between xl:px-3 py-1 cursor-pointer hover:bg-black/5 rounded-md">
              <div className="flex items-center my-3 sm:text-lg lg:text-xs xl:text-lg xl:font-semibold gap-2">
                <img className="h-6 rounded-full" src={coin.item.small} alt={coin.item.id} />
                {coin.item.name} ({coin.item.symbol})
              </div>
              <span className={(priceChange > 0) ? `bg-[#47b68f]/20 text-[#47b68f] ${spanStyle}` : `bg-[#ff6565]/20 text-[#ff6565] ${spanStyle}`}>
                <Triangle size={12} fill={(priceChange > 0) ? "#47b68f" : "#ff6565"} className={(priceChange > 0) ? "" : "rotate-180"} strokeWidth={0} />
                {priceChange}%
              </span>
            </div>
          )
        })}
      </>
    </div >
  )

}

export default TrendingCoins;