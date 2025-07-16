import { useParams } from "react-router-dom";
import { TechTalksData } from "../../Pages/Home/Componentes/TechTalk/TechTalksData";
import { HiMiniClock } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = TechTalksData.find(item => item.id.toString() === id);

    if (!blog) {
        return <div className="text-center text-red-500 mt-20">Blog not found.</div>;
    }

    return (
        <>
            <Helmet>
                <title>BlogDetails</title>
            </Helmet>

            <div className="mt-[64px] ml-[110px] mb-[100px]">
                <div className="flex items-center gap-x-4 font-montserrat text-black01">
                    <Link to="/">Home</Link>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <Link to="/Blog">Blog</Link>
                    <div className="w-[1px] h-[20px] bg-black100"></div>
                    <span className="font-bold">{blog.title}</span>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-[56px] ml-[110px] mb-20">
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
                            <h4 className="font-Poppins font-semibold text-[24px] text-white mb-[25px]">Categories</h4>
                            {["Tech News", "Product Reviews", "How-To Guides", "Lifestyle", "Emerging Technologies"].map((cat, idx) => (
                                <div className="mb-[22px]" key={idx}>
                                    <p className="mb-3 font-Montserrat font-normal text-[16px] text-white cursor-pointer hover:text-orange transition-colors">
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
                        <div className="grid grid-cols-1 gap-8">
                            {TechTalksData.sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 2)
                                .map((blog) => (
                                    <div className="relative" key={blog.id}>
                                        <div className="absolute top-4 left-4 z-10 bg-orange text-white text-xs font-bold font-montserrat py-1 px-3 rounded-full">
                                            Featured
                                        </div>
                                        <Link to={`/Blog/${blog.id}`}>
                                            <div className="border border-transparent hover:border-black100 hover:p-[45px] hover:rounded-[25px] transition-all duration-300">
                                                <div className="max-h-[406px] rounded-[25px] overflow-hidden">
                                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="mt-8">
                                                    <h5 className="font-poppins font-semibold text-[24px] text-black01">{blog.title}</h5>
                                                    <div className="flex items-center justify-between mt-8">
                                                        <div className="py-2 px-2.5 bg-orange rounded-[10px]">
                                                            <span className="font-montserrat font-bold text-base text-white">{blog.category}</span>
                                                        </div>
                                                        <span className="flex items-center gap-x-2 font-montserrat font-normal text-sm text-black01">
                                                            <HiMiniClock color="#303030" size={20} />
                                                            {blog.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="pr-[110px]">
                    <h1 className="font-poppins font-bold text-[40px] text-black01 mb-4">{blog.title}</h1>
                    <div className="flex items-center gap-4 text-gray-600 text-sm mb-10">
                        <div className="flex gap-x-3 items-center">
                            <IoPerson />
                            <span className="">{blog.postedBy}</span>
                        </div>
                        <span className="bg-orange text-white px-3 py-1 rounded-full font-montserrat font-bold">{blog.category}</span>
                        <span className="flex items-center gap-x-1 font-montserrat">
                            <HiMiniClock color="#303030" size={20} />
                            {blog.date}
                        </span>
                    </div>
                    <div className="mb-8">
                        <img src={blog.image} alt={blog.title} className="w-full h-[500px] object-cover rounded-[25px]" />
                    </div>
                    <div className="text-lg text-gray-800 leading-8 whitespace-pre-line font-montserrat">
                        <p className="mb-6">
                            Technology is constantly evolving, and keeping up with the latest trends can be a daunting task. From new gadgets and devices to emerging technologies and industry ethics, it can be challenging to analyze more than one of the most important things that are needed in this area.
                        </p>

                        <h3 className="font-poppins font-semibold text-2xl mb-4 mt-8">3C Connectivity</h3>
                        <p className="mb-6">
                            Relationship is the issue generated by mobile wireless technology, and is sensitive to PC/Web/RSI or Wi-Fi. We use SDK/MSG, which allows specific and lower latency, SSL connectivity, will enable new applications such as remote average, augmented reality, and autonomous vehicles.
                        </p>

                        <h3 className="font-poppins font-semibold text-2xl mb-4 mt-8">Aerobic Intelligence (AI)</h3>
                        <p className="mb-6">
                            AI is prioritizing the way we interact with our devices and the world around us. From virtual machines to its first mobile AI, we can easily access all of them from AI, in changing the way we live and work.
                        </p>

                        <h3 className="font-poppins font-semibold text-2xl mb-4 mt-8">Visual Reality (VR) and Augmented Reality (AR)</h3>
                        <p className="mb-6">
                            VR and AR are technologies that enable us to experience digital content in a more immersive way. Through VR and externalities, we can learn and estimate how technologies come. This means an environment that has been used for real-time applications.
                        </p>

                        <p className="mb-6">
                            In conclusion, adapting to circuits with the latest tech trends is essential for improving the results to stay ahead of the crisis. Future cooperation and a lot beyond AI, these technologies have the potential to transition into ways that are needed. By leveraging such tools, we can create and maintain your own process yourself for the future and our value of the competition.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;