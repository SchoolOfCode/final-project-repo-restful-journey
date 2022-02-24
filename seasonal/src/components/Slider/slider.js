import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { Container } from "@chakra-ui/react";
import "./slider.css";

const Slider = ({ array, video, feedback, margin, background, vegetables }) => {
  const [slideArray, setArray] = useState([]);

  useEffect(() => {
    console.log(vegetables);
    setArray(vegetables);
    console.log(slideArray);
  }, [vegetables]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 730 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 730, min: 0 },
      items: 1,
    },
  };
  if (vegetables) {
    return (
      <StyledSlider>
        <div>
          <Carousel
            responsive={responsive}
            arrows={true}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={2000}
            transitionDuration={500}
          >
            {vegetables &&
              vegetables.map((item, index) => {
                return (
                  <div key={index} className="ingredients">
                    <img
                      className="scrollimage"
                      src={item.imgurl}
                      alt={item.name}
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </StyledSlider>
    );
  } else {
    return <StyledSlider></StyledSlider>;
  }
};

export default Slider;

const StyledSlider = styled.div`
  width: 100vw;
  div {
    width: 80vw;
    margin: 10px auto 0;
  }
`;
