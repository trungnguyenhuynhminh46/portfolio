import React from "react";
import Slider from "react-slick";

type Props = {
  data: any;
  imgClass: string;
};

const PortfolioImages: React.FC<Props> = ({ data, imgClass }) => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };
  return (
    <div className="w-full h-full">
      <Slider {...settings} className="">
        {data.map(
          (item: string | undefined, index: React.Key | null | undefined) => {
            return (
              <div key={index} className="w-full h-full">
                <img src={item} alt="" className={imgClass} />
              </div>
            );
          }
        )}
      </Slider>
    </div>
  );
};

export default PortfolioImages;
