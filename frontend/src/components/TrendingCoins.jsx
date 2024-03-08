import axios from "axios";
import { Triangle } from "lucide-react";
import { useEffect, useState } from "react";
const TrendingCoins = () => {
  const apiUrl = "https://api.coingecko.com/api/v3"
  const apiKey = import.meta.env.VITE_KOINX_API_KEY

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/search/trending`, {
        headers: {
          "x-cg-demo-api-key": apiKey
        }
      })

      console.log(response.data.coins[0].item)
      setCoins(response.data.coins);
    }
    fetchData();
  }, []);


  return (
    <div className="bg-white px-6 py-3 rounded-lg overflow-hidden h-full">
      <h1 className="text-2xl font-bold py-3">Trending Coins (24h)</h1>
      <>
        {coins.map((coin, id) => {
          if (id > 2) {
            return
          }

          const priceChange = (coin.item.data.price_change_percentage_24h.usd).toFixed(2);
          const spanStyle = "flex h-8 w-20 my-2 text-base items-center justify-center gap-1 rounded-md font-semibold";

          return (
            <div key={id} className="flex justify-between px-3 py-1 cursor-pointer hover:bg-black/5 rounded-md">
              <div className="flex items-center my-3 text-lg font-semibold gap-2">
                <img className="h-6 rounded-full" src={coin.item.small} alt={coin.item.id} />
                {coin.item.name} ({coin.item.symbol})
              </div>
              <span className={(priceChange > 0) ? `bg-[#467F7B]/25 text-[#467F7B] ${spanStyle}` : `bg-[#FF4D4D]/25 text-[#FF4D4D] ${spanStyle}`}>
                <Triangle size={16} fill={(priceChange > 0) ? "#467F7B" : "#FF4D4D"} className={(priceChange > 0) ? "" : "rotate-180"} strokeWidth={0} />
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