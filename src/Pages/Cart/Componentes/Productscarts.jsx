import { BsTrash3 } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import { LuMinus } from 'react-icons/lu'

const Productscarts = ({ pCategory, pName, variant, price, total }) => {
    return (
        <>
            <div>
                <div className='px-[56px] py-[32px] hover:border-black100 border border-transparent relative group'>

                    <div className='grid grid-cols-[607px_171px_171px_171px] gap-x-12 items-center'>
                        <div className='flex items-center gap-x-5'>
                            <div className='w-[237px] h-[214px] bg-white01 rounded-md'></div>
                            <div>
                                <h6 className="font-montserrat text-sm font-normal text-black01 uppercase tracking-[5px]">
                                    {pCategory}
                                </h6>
                                <h4 className="font-poppins text-sm font-semibold text-black01 mb-[46px] mt-[16px]">{pName}</h4>
                                <span className='font-Montserrat text-base'>
                                    <b>Variant:</b> black
                                </span>
                            </div>
                        </div>
                        <div>
                            <h6 className='font-Poppins font-semibold text-xl'>${price}</h6>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-8'>
                                    <button
                                        className=' cursor-pointer'
                                    >
                                        <LuMinus />
                                    </button>
                                    <div className='font-Poppins text-black01 font-semibold text-[16px] bg-white02 rounded-full flex items-center justify-center w-[30px] h-[30px]'>
                                        1
                                    </div>
                                    <button
                                        className='w-[56px] h-[56px] cursor-pointer'
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='pl-2'>
                            <h6 className='font-Poppins text-xl text-black01 font-semibold'>${total}</h6>
                        </div>
                    </div>
                    <div role='buttun' className=' absolute top-[50%] translate-y-[-50%] right-12 w-[64px] h-[64px] rounded-full bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ease-in duration-150 cursor-pointer'>
                        <BsTrash3 color="white" size={20} />
                    </div>
                </div>
            </div >
        </>

    )
}

export default Productscarts