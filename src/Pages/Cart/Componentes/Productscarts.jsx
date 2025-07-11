import { BsTrash3 } from 'react-icons/bs';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateQty, removecart } from '../../../settings/Redux/feature/Cartslice';

const Productscarts = ({ id, pCategory, pName, variant, price, imges, qty }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(updateQty({ id, qty: qty + 1 }));
    };

    const handleDecrease = () => {
        if (qty > 1) {
            dispatch(updateQty({ id, qty: qty - 1 }));
        }
    };

    const handleRemove = () => {
        dispatch(removecart(id));
    };

    return (
        <div className='px-[56px] py-[32px] hover:border-black100 border border-transparent relative group mb-4 bg-white rounded-lg shadow-sm'>
            <div className='grid grid-cols-[2fr_1fr_1fr_1fr] gap-x-12 items-center'>
                <div className='flex items-center gap-x-5'>
                    <div className='w-[120px] h-[120px] bg-white01 rounded-md overflow-hidden'>
                        {imges && imges[0] && (
                            <img src={imges[0]} alt={pName} className="w-full h-full object-cover" />
                        )}
                    </div>
                    <div>
                        <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-[2px]">
                            {pCategory}
                        </h6>
                        <h4 className="font-poppins text-lg font-semibold text-black01 my-2">{pName}</h4>
                        <span className='font-Montserrat text-base text-gray-600'>
                            <b>Variant:</b> {variant || 'Default'}
                        </span>
                    </div>
                </div>

                <div>
                    <h6 className='font-Poppins font-semibold text-xl'>${price.toFixed(2)}</h6>
                </div>

                <div>
                    <div className='flex items-center justify-start'>
                        <div className='flex items-center gap-x-4'>
                            <button
                                onClick={handleDecrease}
                                className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100'
                            >
                                <FiMinus size={14} />
                            </button>
                            <div className='font-Poppins text-black01 font-semibold text-lg'>
                                {qty}
                            </div>
                            <button
                                onClick={handleIncrease}
                                className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100'
                            >
                                <FiPlus size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h6 className='font-Poppins text-xl text-black01 font-semibold'>${(price * qty).toFixed(2)}</h6>
                </div>
            </div>

            <button
                onClick={handleRemove}
                className='absolute top-1/2 right-12 transform -translate-y-1/2 w-12 h-12 rounded-full bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-orange-dark'
                title="Remove item"
            >
                <BsTrash3 color="white" size={16} />
            </button>
        </div>
    );
};

export default Productscarts;