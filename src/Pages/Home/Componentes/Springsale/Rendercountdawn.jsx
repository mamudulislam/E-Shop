const RenderCountdown = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-3 md:gap-10">
            <div className="text-center min-w-[60px]">
                <h4 className="font-Poppins font-semibold text-lg sm:text-xl md:text-2xl lg:text-[36px] text-orange">
                    {days}
                </h4>
                <span className="font-Montserrat font-normal text-xs sm:text-sm md:text-base text-black01">
                    Days
                </span>
            </div>
            <span className="text-orange text-lg sm:text-xl md:text-[36px] leading-none">:</span>
            <div className="text-center min-w-[60px]">
                <h4 className="font-Poppins font-semibold text-lg sm:text-xl md:text-2xl lg:text-[36px] text-orange">
                    {hours}
                </h4>
                <span className="font-Montserrat font-normal text-xs sm:text-sm md:text-base text-black01">
                    Hours
                </span>
            </div>
            <span className="text-orange text-lg sm:text-xl md:text-[36px] leading-none">:</span>
            <div className="text-center min-w-[60px]">
                <h4 className="font-Poppins font-semibold text-lg sm:text-xl md:text-2xl lg:text-[36px] text-orange">
                    {minutes}
                </h4>
                <span className="font-Montserrat font-normal text-xs sm:text-sm md:text-base text-black01">
                    Minutes
                </span>
            </div>
            <span className="text-orange text-lg sm:text-xl md:text-[36px] leading-none">:</span>
            <div className="text-center min-w-[60px]">
                <h4 className="font-Poppins font-semibold text-lg sm:text-xl md:text-2xl lg:text-[36px] text-orange">
                    {seconds}
                </h4>
                <span className="font-Montserrat font-normal text-xs sm:text-sm md:text-base text-black01">
                    Seconds
                </span>
            </div>
        </div>
    );
};

export default RenderCountdown;
