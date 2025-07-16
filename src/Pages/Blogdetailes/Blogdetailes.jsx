import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TechTalksData } from "../../Pages/Home/Componentes/TechTalk/TechTalksData";
import { HiMiniClock } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import Container from "../../Golobalcomponentes/Container";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [blog, setBlog] = useState(() =>
        TechTalksData.find(item => item.id.toString() === id)
    );

    useEffect(() => {
        const selectedBlog = TechTalksData.find(item => item.id.toString() === id);
        if (selectedBlog) {
            setBlog(selectedBlog);
        }
    }, [id]);

    if (!blog) {
        return <div className="text-center text-red-500 mt-20">Blog not found.</div>;
    }

    return (
        <>
            <Helmet>
                <title>BlogDetails</title>
            </Helmet>
            <Container>
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
                    {/* Left Sidebar */}
                    <div>
                        {/* Blog Search */}
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

                        {/* Categories */}
                        <div className="mb-[40px]">
                            <div className="p-10 bg-black01 rounded-[25px]">
                                <h4 className="font-Poppins font-semibold text-[24px] text-white mb-[25px]">Categories</h4>
                                {["Tech News", "Product Reviews", "How-To Guides", "Lifestyle", "Emerging Technologies"].map((cat, idx) => (
                                    <div className="mb-[22px]" key={idx}>
                                        <p
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                const firstMatch = TechTalksData.find(item => item.category === cat);
                                                if (firstMatch) {
                                                    setBlog(firstMatch);
                                                    navigate(`/Blog/${firstMatch.id}`);
                                                }
                                            }}
                                            className={`mb-3 font-Montserrat font-normal text-[16px] cursor-pointer transition-colors
                                                ${selectedCategory === cat ? "text-orange" : "text-white hover:text-orange"}`}
                                        >
                                            {cat}
                                        </p>
                                        <div className="border border-b-1 text-white opacity-25"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
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

                        {/* Recent Posts */}
                        <div>
                            <h3 className="font-Poppins font-semibold text-[24px] text-black01">Recent Posts</h3>
                            <div className="border-3 w-[156px] text-orange"></div>
                        </div>
                        <div className="mt-[32px]">
                            <div className="grid grid-cols-1 gap-8">
                                {TechTalksData
                                    .filter(item => !selectedCategory || item.category === selectedCategory)
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 2)
                                    .map((post) => (
                                        <div className="relative cursor-pointer" key={post.id} onClick={() => {
                                            setBlog(post);
                                            navigate(`/Blog/${post.id}`);
                                        }}>
                                            <div className="absolute top-4 left-4 z-10 bg-orange text-white text-xs font-bold font-montserrat py-1 px-3 rounded-full">
                                                Featured
                                            </div>
                                            <div className="border border-transparent hover:border-black100 hover:p-[45px] hover:rounded-[25px] transition-all duration-300">
                                                <div className="max-h-[406px] rounded-[25px] overflow-hidden">
                                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="mt-8">
                                                    <h5 className="font-poppins font-semibold text-[24px] text-black01">{post.title}</h5>
                                                    <div className="flex items-center justify-between mt-8">
                                                        <div className="py-2 px-2.5 bg-orange rounded-[10px]">
                                                            <span className="font-montserrat font-bold text-base text-white">{post.category}</span>
                                                        </div>
                                                        <span className="flex items-center gap-x-2 font-montserrat font-normal text-sm text-black01">
                                                            <HiMiniClock color="#303030" size={20} />
                                                            {post.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Blog Content Section */}
                    <div className="pr-[110px]">
                        <h1 className="font-poppins font-bold text-[56px] text-black01 mb-4 leading-[68px]">{blog.title}</h1>
                        <div className="flex items-center gap-4 text-gray-600 text-sm mb-10">
                            <div className="flex gap-x-3 items-center">
                                <IoPerson />
                                <span>{blog.postedBy}</span>
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
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                {blog.Descriptions}
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">01</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">5G Connectivity</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                Relationship is the issue generated by mobile wireless technology, and is sensitive to PC/Web/RSI or Wi-Fi. We use SDK/MSG, which allows specific and lower latency, SSL connectivity, will enable new applications such as remote average, augmented reality, and autonomous vehicles.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">02</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">Artificial Intelligence (AI)</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                AI is prioritizing the way we interact with our devices and the world around us. From virtual machines to its first mobile AI, we can easily access all of them from AI, in changing the way we live and work.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">03</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">Virtual Reality (VR) and Augmented Reality (AR)</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                VR and AR are technologies that enable us to experience digital content in a more immersive way. Through VR and externalities, we can learn and estimate how technologies come. This means an environment that has been used for real-time applications.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">04</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">Internet of Things (IoT)</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                The IoT is a network of devices that are connected to the internet, allowing them to communicate and exchange data. This technology has the potential to transform many industries, from healthcare and agriculture to transportation and manufacturing.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">05</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">Edge Computing</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                Edge computing is a new computing paradigm that brings computing power closer to the devices that generate and consume data. By processing data at the edge of the network, edge computing can reduce latency, improve security, and enhance privacy.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">06</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">Blockchain</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                Blockchain is a technology that enables secure, decentralized transactions without the need for a central authority. From cryptocurrency to supply chain management, blockchain has the potential to transform many industries.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-[64px] h-[64px] bg-orange rounded-full relative">
                                    <h5 className="absolute left-5.5 top-4.5 font-Poppins font-semibold text-[20px] text-white">07</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-[20px]">Quantum Computing</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                Quantum computing is a new type of computing that uses the principles of quantum mechanics to perform calculations. With the potential to solve complex problems that are beyond the capabilities of classical computers, quantum computing has the potential to revolutionize many industries, from finance and healthcare to energy and transportation.
                            </p>

                            <p className="mb-6 font-Montserrat font-normal text-[20px] leading-[30px] text-black01">
                                In conclusion, staying up to date with the latest tech trends is essential for anyone who wants to stay ahead of the curve. From 5G connectivity and AI to VR and AR, these technologies have the potential to transform the way we live and work. By keeping up with the latest trends and innovations, you can prepare yourself for the future and stay ahead of the competition.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BlogDetails;