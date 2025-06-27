import { HiMiniClock } from "react-icons/hi2";

const BlogCard = ({ pathname, ...props }) => {
    const { image, title, category, date } = props;

    const isHomePage = pathname === "/";

    const HomePageCard = () =>
        isHomePage && (
            <>
                <div className="border border-transparent hover:border-black100 hover:p-[45px] hover:rounded-[25px] transition-all duration-300">
                    <div className="max-h-[406px] bg-amber-400 rounded-[25px] overflow-hidden">
                        <img
                            src={image}
                            alt="blog image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-8">
                        <h5 className="font-poppins font-semibold text-[24px] text-black01">
                            {title}
                        </h5>
                        <div className="flex items-center justify-between mt-8">
                            <div className="py-2 px-2.5 bg-orange rounded-[10px]">
                                <span className="font-montserrat font-bold text-base text-white">
                                    {category}
                                </span>
                            </div>
                            <span className="flex items-center gap-x-2 font-montserrat font-normal text-sm text-black01">
                                {" "}
                                <HiMiniClock color="#303030" size={20} />
                                {date}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        );

    const BlogPageCard = () =>
        !isHomePage && (
            <>
                <div>
                    <div className="max-h-[406px] bg-amber-400 rounded-[25px] overflow-hidden">
                        this is my blog card
                    </div>
                </div>
            </>
        );

    return (
        <>
            <HomePageCard />
            <BlogPageCard />
        </>
    );
};

export default BlogCard;