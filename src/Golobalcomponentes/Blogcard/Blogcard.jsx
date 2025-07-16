import { HiMiniClock } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { TechTalksData } from "../../Pages/Home/Componentes/TechTalk/TechTalksData";
import { CiSearch } from "react-icons/ci";

const BlogPostCard = ({ image, title, category, date }) => (
    <div className="border border-transparent hover:border-black100 hover:p-[45px] hover:rounded-[25px] transition-all duration-300">
        <div className="max-h-[406px] bg-amber-400 rounded-[25px] overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
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
                    <HiMiniClock color="#303030" size={20} />
                    {date}
                </span>
            </div>
        </div>
    </div>
);
const BlogPageHeader = () => (
    <div className="mt-[274px] ml-[110px]">
        <h2 className="font-Poppins font-bold text-[56px] text-black01">
            Tech Talk Blog
        </h2>
        <div className="flex items-center gap-x-4 font-montserrat text-black01">
            <Link to="/">Home</Link>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span className="font-bold">Blog</span>
        </div>
    </div>
);
const BlogCard = (props) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const { image, title, postedBy, date } = props;

    if (isHomePage) {
        return <BlogPostCard {...props} />;
    }

    return (
        <div>
            <BlogPageHeader />
            <div className="mt-[322px] ml-[110px]">
                <div className="grid grid-cols-[1fr_2fr] gap-[56px]">
                    <div>
                        <div className="mb-[40px]">
                            <div className="p-10 bg-orange rounded-[25px]">
                                <h3 className="font-Poppins font-semibold text-[24px] text-white mb-[24px]">Blog Search</h3>
                                <div className="flex items-center gap-x-4 bg-white rounded-md px-4">
                                    <input
                                        type="text"
                                        placeholder="Search Article ..."
                                        className="flex-1 py-3 px-4 outline-none text-black"
                                    />
                                    <button type="submit" className="text-gray-500 hover:text-black">
                                        <CiSearch size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[40px]">
                            <div className="p-10 bg-black01 rounded-[25px]">
                                <h4 className="font-Poppins font-semibold text-[24px] text-white mb-[25px] cursor-pointer">Categories</h4>
                                <div className="mb-[22px]">
                                    <p className="mb-3 font-Montserrat font-normal text-[16px] text-white cursor-pointer">Tech News</p>
                                    <div className="border border-b-1 text-white opacity-25"></div>
                                </div>
                                <div className="mb-[22px]">
                                    <p className="mb-3 font-Montserrat font-normal text-[16px]  text-white cursor-pointer">Product Reviews</p>
                                    <div className="border border-b-1 text-white opacity-25"></div>
                                </div>
                                <div className="mb-[22px]">
                                    <p className="mb-3 font-Montserrat font-normal text-[16px]  text-white cursor-pointer">How-To Guides</p>
                                    <div className="border border-b-1 text-white opacity-25"></div>
                                </div>
                                <div className="mb-[22px]">
                                    <p className="mb-3 font-Montserrat font-normal text-[16px]  text-white cursor-pointer">Lifestyle</p>
                                    <div className="border border-b-1 text-white opacity-25"></div>
                                </div>
                                <div>
                                    <p className="mb-3 font-Montserrat font-normal text-[16px]  text-white cursor-pointer">Emerging Technologies</p>
                                    <div className="border border-b-1 text-white opacity-25"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-white02 mb-10">
                            <h4 className="font-Poppins font-semibold text-[24px] text-black mb-6">
                                Tags
                            </h4>
                            <div className="space-y-2">
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Tech</div>
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Trends</div>
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Innovat</div>
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Tips</div>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Gadget</div>
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Guide</div>
                                    <div className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">Gadget</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-Poppins font-semibold text-[24px] text-black01">
                                Recent Posts
                            </h3>
                            <div className="border-3 w-[156px] text-orange"></div>
                        </div>
                        <div className="mt-[32px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                                {TechTalksData.slice(0, 2).map((blog) => (
                                    <BlogPostCard
                                        key={blog.id}
                                        image={blog.image}
                                        title={blog.title}
                                        category={blog.postedBy}
                                        date={blog.date}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {TechTalksData.slice(0, 10).map((blog) => (
                            <BlogPostCard
                                key={blog.id}
                                image={blog.image}
                                title={blog.title}
                                category={blog.postedBy}
                                date={blog.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogCard;