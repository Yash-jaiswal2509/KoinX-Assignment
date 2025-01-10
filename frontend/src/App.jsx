import Breadcrumb from "./components/Breadcrumb"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TrendingCoins from "./components/TrendingCoins"
import YouMayAlsoLike from "./components/YouMayAlsoLike"

function App() {

  return (
    <>
      <div className="mx-auto flex flex-col scroll-smooth h-full w-full 2xl:max-w-screen-2xl">
        <Header />
        <Hero />
        <div className="hidden md:block">
          <YouMayAlsoLike />
        </div>
        <div className="md:hidden block">
          <TrendingCoins />
        </div>
      </div>
    </>
  )
}

export default App
