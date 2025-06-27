import { FaRegStar, FaStar, } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

export const getstar = (rating) => {
    const fullstar = Math.floor(rating);
    const halfstar = rating % 1 >= 0.25 && rating % 1 < 0.75
    const emptystart = 5 - fullstar - (halfstar ? 1 : 0)

    const stars = []
    for (let i = 0; i < fullstar; i++) {
        stars.push(
            <span key={'full-${i}'} className="text-yellow"><FaStar /></span>
        )
    }

    if (halfstar) {
        stars.push(
            <span key={'half'} className="text-yellow"><IoIosStarHalf /></span>
        )
    }

    for (let i = 0; i < emptystart; i++) {
        stars.push(
            <span key={'full-${i}'} className="text-yellow"><FaRegStar /></span>
        )
    }
    return <div className="flex gap-x-1">{stars}</div>;
}