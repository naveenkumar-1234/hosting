import HomePage from "./Pages/HomePage/HomePage";
import Service from "./Pages/ServicePage/Services.jsx";
import Destination from "./Pages/DestinationPage/Destination";
import Travel from "./Pages/TravelpointPage/TravelpointPage";
import KeyFeature from "./Pages/KeyFeaturePage/KeyFeature";
import Testimonials from "./Pages/TestimonialsPage/Testimonials"
import Footer from "./Pages/FooterPage/Footer"
import Subscribe from "./Pages/SubscribePage/Subscribe"

const App = () => {
  return (
    <>
    
      <HomePage />
      <Service />
      <Destination />
      <Travel />
      <KeyFeature />
      <Testimonials/>
      <Subscribe />
      <Footer/>
    </>
  );
};

export default App;
