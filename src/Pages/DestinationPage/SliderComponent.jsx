import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boat from "./assets/BeachImage.png";
import Grid from "./DestinationTemplate";
import sky from "./assets/SkyImage.png";

const DestinationSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <Slider {...settings} className="mx-6 my-12">
      <Grid
        picture={boat}
        price="$550.16"
        place="Paradise Beach, Bantayan Island"
        location="Rome, Italy"
        star="4.8"
      />
      <Grid
        picture={sky}
        price="$150.99"
        place="Mountain View, Above the sky"
        location="United Arab Emeries"
        star="5.0"
      />
      <Grid
        picture={boat}
        price="$550.16"
        place="Paradise Beach, Bantayan Island"
        location="Rome, Italy"
        star="4.8"
      />
      <Grid
        picture={sky}
        price="$150.99"
        place="Mountain View, Above the sky"
        location="United Arab Emeries"
        star="5.0"
      />
      <Grid
        picture={boat}
        price="$550.16"
        place="Paradise Beach, Bantayan Island"
        location="Rome, Italy"
        star="4.8"
      />
    </Slider>
  );
};

export default DestinationSlider;
