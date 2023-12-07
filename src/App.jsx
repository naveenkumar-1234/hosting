import HomePage from "./Components/HomePage.jsx"
import NavBar from "./Components/NavBar.jsx"
import Service from "./Components/services.jsx"
import Destination from "./Components/destination.jsx"
import Travel from "./Components/travelpoint.jsx"
// import KeyFeature from "./Components/KeyFeature.jsx"
import Footer from "./Components/Footer.jsx"
const App = () => {
  return (
    <>
    <NavBar/>
    <HomePage/>
    <Service />
    <Destination/>
    <Travel />
    {/* <KeyFeature/> */}
    <Footer/>
    </>
  )
}

export default App