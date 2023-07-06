import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];
  const buttonStyle1 = {
    width: "30px",
    background: "none",
    border: "0px",
    marginRight: "-20px",
  };
  const buttonStyle2 = {
    width: "30px",
    background: "none",
    border: "0px",
    marginLeft: "-20px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" height="40">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" height="40">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </button>
    ),
  };
  return (
    <section>
      <div className="w-full max-w-5xl m-auto px-6 py-10">
        <Slide slidesToScroll={2} slidesToShow={2} indicators={false} responsive={responsiveSettings} {...properties}>
          <div className="px-4">
            <img src="./assets/images/multipagina/2.jpg" className="aspect-square object-cover w-full " />
          </div>
          <div className="px-4">
            <img src="./assets/images/multipagina/3.jpg" className="aspect-square object-cover w-full " />
          </div>
          <div className="px-4">
            <img src="./assets/images/multipagina/4.jpg" className="aspect-square object-cover w-full " />
          </div>
          <div className="px-4">
            <img src="./assets/images/multipagina/multipagina2.jpg" className="aspect-square object-cover w-full " />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Slider;
