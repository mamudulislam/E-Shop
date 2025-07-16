import { useState } from "react";
import { HiMiniClock } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { TechTalksData } from "../../Pages/Home/Componentes/TechTalk/TechTalksData";
import { CiSearch } from "react-icons/ci";
import { Pagination } from "antd";

const BlogPostCard = ({ id, image, title, category, date }) => (
    <Link to={`/Blog/${id}`}>
        <div className="border border-transparent hover:border-black100 hover:p-[45px] hover:rounded-[25px] transition-all duration-300">
            <div className="max-h-[406px] rounded-[25px] overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-8">
                <h5 className="font-poppins font-semibold text-[24px] text-black01">{title}</h5>
                <div className="flex items-center justify-between mt-8">
                    <div className="py-2 px-2.5 bg-orange rounded-[10px]">
                        <span className="font-montserrat font-bold text-base text-white">{category}</span>
                    </div>
                    <span className="flex items-center gap-x-2 font-montserrat font-normal text-sm text-black01">
                        <HiMiniClock color="#303030" size={20} />
                        {date}
                    </span>
                </div>
            </div>
        </div >
    </Link>
);

const BlogPageHeader = () => (
    <div className="mt-[274px] ml-[110px]">
        <h2 className="font-Poppins font-bold text-[56px] text-black01">Tech Talk Blog</h2>
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

    const [activeCategory, setActiveCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const filteredBlogs = activeCategory
        ? TechTalksData.filter((blog) =>
            blog.category?.toLowerCase().includes(activeCategory.toLowerCase())
        )
        : TechTalksData;
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

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
                                {["Tech News", "Product Reviews", "How-To Guides", "Lifestyle", "Emerging Technologies"].map((cat, idx) => (
                                    <div
                                        className="mb-[22px]"
                                        key={idx}
                                        onClick={() => {
                                            setCurrentPage(1);
                                            setActiveCategory(prev => prev === cat ? null : cat);
                                        }}
                                    >
                                        <p className={`mb-3 font-Montserrat font-normal text-[16px] text-white cursor-pointer transition-colors ${activeCategory === cat ? "text-orange" : ""}`}>
                                            {cat}
                                        </p>
                                        <div className="border border-b-1 text-white opacity-25"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-5 bg-white02 mb-10">
                            <h4 className="font-Poppins font-semibold text-[24px] text-black mb-6">Tags</h4>
                            <div className="space-y-2">
                                <div className="grid grid-cols-4 gap-2">
                                    {["Tech", "Trends", "Innovat", "Tips"].map((tag, i) => (
                                        <div key={i} className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {["Gadget", "Guide", "Gadget"].map((tag, i) => (
                                        <div key={i} className="px-5 py-3 bg-white font-Montserrat font-normal text-[14px] text-black01 cursor-pointer">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-Poppins font-semibold text-[24px] text-black01">Recent Posts</h3>
                            <div className="border-3 w-[156px] text-orange"></div>
                        </div>
                        <div className="mt-[32px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                                {TechTalksData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2).map((blog) => (
                                    <div className="relative" key={blog.id}>
                                        <div className="absolute top-4 left-4 z-10 bg-orange text-white text-xs font-bold font-montserrat py-1 px-3 rounded-full">
                                            Featured
                                        </div>
                                        <BlogPostCard
                                            id={blog.id}
                                            image={blog.image}
                                            title={blog.title}
                                            category={blog.postedBy}
                                            date={blog.date}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
                            {paginatedBlogs.map((blog) => (
                                <div className="relative" key={blog.id}>
                                    <div className="absolute top-4 left-4 z-10 bg-orange text-white text-xs font-bold font-montserrat py-1 px-3 rounded-full">
                                        {blog.category}
                                    </div>
                                    <BlogPostCard
                                        id={blog.id}
                                        image={blog.image}
                                        title={blog.title}
                                        category={blog.postedBy}
                                        date={blog.date}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize}
                                total={filteredBlogs.length}
                                onChange={(page) => setCurrentPage(page)}
                                showSizeChanger={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
