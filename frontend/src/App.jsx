import Breadcrumb from "./components/Breadcrumb"
import Header from "./components/Header"
import Hero from "./components/Hero"
import YouMayAlsoLike from "./components/YouMayAlsoLike"

function App() {

  return (
    <>
      <div className="mx-auto flex flex-col scroll-smooth h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <Header />
        <Hero />
        <YouMayAlsoLike />
      </div>
    </>
  )
}

export default App
