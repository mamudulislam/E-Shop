const RenderCountdown = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="flex items-center space-x-3 text-sm">
            <div className="grid grid-cols-1 items-center gap-1">
                <span className="text-gray-700">Days<span className="gap-x-[24px]">:</span></span>
                <span className="font-semibold">{days}</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-gray-700">Hours:</span>
                <span className="font-semibold text-red-600">{hours}</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-gray-700">Minutes:</span>
                <span className="font-semibold text-red-600">{minutes}</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-gray-700">Seconds:</span>
                <span className="font-semibold text-red-600">{seconds}</span>
            </div>
        </div>
    );
};

export default RenderCountdown;
