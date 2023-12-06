import HomePage from "./Components/HomePage.jsx"
import NavBar from "./Components/NavBar.jsx"
import Service from "./Components/services.jsx"
import Destination from "./Components/destination.jsx"
import Travel from "./Components/travelpoint.jsx"
const App = () => {
  return (
    <>
    <NavBar/>
    <HomePage/>
    <Service />
    <Destination/>
    <Travel />
    </>
  )
}

export default App