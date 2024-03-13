import { DoughnutChart } from "./ui/Doughnut-chart-component";

const Tokenomics = () => {
    const data = [
        { value: 20, color: '#fb923c' },  
        { value: 80, color: '#3b82f6' }, 
    ];

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold">Tokenomics</h1>
            <h2 className="text-xl font-semibold my-4">Initial Distribution</h2>
            <div className="flex gap-8 items-center">
                <div className="w-40 h-40 rotate-[180deg]">
                    <DoughnutChart data={data} holeColor={"white"}/>
                </div>
                <div className="text-lg ">
                    <p className="flex-col mb-2 sm:mb-0 flex sm:flex-row sm:items-center sm:gap-3 sm:text-base text-sm"><div className="h-4 w-4 rounded-full bg-blue-500 "></div> Crowdsale Investors: 80%</p>
                    <p className="flex-col flex sm:flex-row sm:items-center sm:gap-3 sm:text-base text-sm"><div className="h-4 w-4 rounded-full bg-orange-400 "></div> Foundation: 20%</p>
                </div>
            </div>
            <div className="mt-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tenetur autem consectetur illo. Nam modi ducimus aut quod a perferendis, eos fugiat veritatis iure sit maiores hic et repellendus minima!
                Iusto voluptas quia sapiente cum! Reiciendis animi a ducimus accusantium quo aliquam laborum id cumque, commodi optio deserunt. Dolorum, fugiat consequatur pariatur provident dolore adipisci a perferendis dolor consequuntur nemo?</p>
            </div>
        </div>
    )
}

export default Tokenomics;