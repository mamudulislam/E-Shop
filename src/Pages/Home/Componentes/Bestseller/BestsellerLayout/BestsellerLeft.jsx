import { t } from 'i18next'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import ProductCard from '../../../../../Golobalcomponentes/ProductCard/ProductCard'
import { Featureddata } from '../../FeaturedProducts/Featureddata'

const BestsellerLeft = () => {
    return (
        <>
            <div>
                <div className='flex items-center justify-between '>
                    <h3 className='font-Poppins text-[36px] font-semibold text-black01'>
                        {t("Best Seller")}
                    </h3>
                    <Link to="/Product" className='flex items-center gap-x-2 font-Montserrat font-bold text-base text-orange group'>
                        {t("View All")}{" "}
                        <span className='group-hover:translate-x-2 transition-transform duration-400'>
                            <CgArrowLongRight size={30} />
                        </span>
                    </Link>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    {Featureddata.map((product) => (
                        <div key={product.id}>
                            <div className='border border-transparent transition duration-300 rounded-md'>
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
                </div>
            </div >
        </>
    )
}

export default BestsellerLeft