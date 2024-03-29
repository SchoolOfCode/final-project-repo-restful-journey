import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import "./slider.css";

const Slider = ({
  array,
  video,
  feedback,
  margin,
  background,
  ingredient,
  handleClick,
}) => {
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 730, min: 0 },
      items: 3,
    },
  };
  if (ingredient) {
    return (
      <StyledSlider>
        <div>
          <Carousel
            responsive={responsive}
            arrows={false}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={2000}
            transitionDuration={500}
          >
            {ingredient &&
              ingredient.map((item, index) => {
                return (
                  <Link key={index} to="/ingredients" state={{ingredient: item}}>
                  <figure  className="ingredients">
                    <img
                      className="scrollimage"
                      src={item.imgurl}
                      alt={item.name}
                      onClick={(e) => handleClick(e)}
                    />
                    <figcaption className="caption">{item.name}</figcaption>
                  </figure>
                  </Link>
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
  padding-left: 2rem;
  div {
    width: 400px;
  }
`;
