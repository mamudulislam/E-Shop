import React from 'react';
import Springsaleproductcard from './Springsaleproductcard';
import Slider from 'react-slick';
import { Springsaledata } from './Springsaledata';
import { CgArrowLongRight } from 'react-icons/cg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 rounded-full cursor-pointer shadow hover:bg-orange transition-colors"
            onClick={onClick}
        >
            <CgArrowLongRight size={24} />
        </div>
    );
}
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border border-gray-300 rounded-full cursor-pointer shadow hover:bg-orange transition-colors"
            onClick={onClick}
        >
            <CgArrowLongRight size={24} className="rotate-180" />
        </div>
    );
}
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const SprinRight = () => {
    return (
        <div className='slider-container relative mt-10 mb-10'>
            <Slider {...settings}>
                {Springsaledata?.map((product) => (
                    <div key={product.id} className='px-2'>
                        <Springsaleproductcard
                            image={product?.imges}
                            pCatagori={product.pCatagori}
                            pName={product.pName}
                            rate={product.rate}
                            totalrating={product.totalrating}
                            price={product.price}
                            pdiscout={product.discout}
                            stock={product.stock}
                            sold={product.sold}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SprinRight;