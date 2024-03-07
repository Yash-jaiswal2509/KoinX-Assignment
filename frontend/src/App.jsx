import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <div className="mx-auto flex flex-col w-full 2xl:max-w-screen-2xl">
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App
