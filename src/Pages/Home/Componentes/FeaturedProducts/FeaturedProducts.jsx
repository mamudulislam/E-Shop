import React from 'react';
import Container from '../../../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Featureddata } from './Featureddata';


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

const FeaturedProducts = () => {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <Container>
                <div className='mt-[80px] mb-[80px]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-Poppins text-[36px] font-semibold text-black01'>
                            {t("Featured Products")}
                        </h3>
                        <Link to="/Product" className='flex items-center gap-x-2 font-Montserrat font-bold text-base text-orange group'>
                            {t("View All")}{" "}
                            <span className='group-hover:translate-x-2 transition-transform duration-400'>
                                <CgArrowLongRight size={30} />
                            </span>
                        </Link>
                    </div>
                    <div className='slider-container relative'>
                        <Slider {...settings}>
                            {Featureddata?.map((product) => (
                                <div key={product.id} className='px-2'>
                                    <div className='border border-transparent transition duration-300 rounded-md p-2'>
                                        <ProductCard
                                            imges={product?.imges}
                                            pCatagori={product?.pCatagori}
                                            pName={product?.pName}
                                            rate={product?.rate}
                                            totalrating={product?.totalrating}
                                            price={product?.price}
                                            pdiscout={product?.discout}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>


                </div>
            </Container>
        </>
    );
};

export default FeaturedProducts;
