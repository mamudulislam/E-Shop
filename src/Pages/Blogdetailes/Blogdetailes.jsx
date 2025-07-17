import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TechTalksData } from "../../Pages/Home/Componentes/TechTalk/TechTalksData";
import { HiMiniClock } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import Container from "../../Golobalcomponentes/Container";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [blog, setBlog] = useState(() =>
        TechTalksData.find((item) => item.id.toString() === id)
    );

    useEffect(() => {
        const selectedBlog = TechTalksData.find((item) => item.id.toString() === id);
        if (selectedBlog) {
            setBlog(selectedBlog);
        }
    }, [id]);

    if (!blog) {
        return (
            <div className="text-center text-red-500 mt-20">Blog not found.</div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{blog.title} - Blog Details</title>
            </Helmet>
            <Container>
                {/* Breadcrumb */}
                <div className="mt-16 px-4 sm:px-6 md:px-12 mb-24">
                    <div className="flex flex-wrap items-center gap-x-4 font-montserrat text-black01 text-sm sm:text-base">
                        <Link to="/" className="hover:underline">Home</Link>
                        <div className="w-px h-5 bg-black100" />
                        <Link to="/Blog" className="hover:underline">Blog</Link>
                        <div className="w-px h-5 bg-black100" />
                        <span className="font-bold truncate max-w-xs sm:max-w-md">{blog.title}</span>
                    </div>
                </div>

                {/* Main Grid: Sidebar + Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-[56px] px-4 sm:px-6 md:px-12 mb-20">

                    {/* Sidebar */}
                    <aside className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                        {/* Blog Search */}
                        <div className="mb-10">
                            <div className="p-8 sm:p-10 bg-orange rounded-2xl">
                                <h3 className="font-Poppins font-semibold text-xl sm:text-2xl text-white mb-6">Blog Search</h3>
                                <div className="flex items-center gap-3 bg-white rounded-md px-4">
                                    <input
                                        type="text"
                                        placeholder="Search Article ..."
                                        className="flex-1 py-3 px-4 outline-none text-black text-base sm:text-lg"
                                    />
                                    <button type="submit" className="text-gray-500 hover:text-black transition-colors duration-200">
                                        <CiSearch size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mb-10">
                            <div className="p-8 sm:p-10 bg-black01 rounded-2xl">
                                <h4 className="font-Poppins font-semibold text-xl sm:text-2xl text-white mb-6">Categories</h4>
                                {["Tech News", "Product Reviews", "How-To Guides", "Lifestyle", "Emerging Technologies"].map((cat, idx) => (
                                    <div className="mb-5" key={idx}>
                                        <p
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                const firstMatch = TechTalksData.find((item) => item.category === cat);
                                                if (firstMatch) {
                                                    setBlog(firstMatch);
                                                    navigate(`/Blog/${firstMatch.id}`);
                                                }
                                            }}
                                            className={`mb-3 font-Montserrat text-base sm:text-lg cursor-pointer transition-colors
                        ${selectedCategory === cat ? "text-orange" : "text-white hover:text-orange"}`}
                                        >
                                            {cat}
                                        </p>
                                        <div className="border-b border-white opacity-25"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="p-5 sm:p-8 bg-white02 rounded-2xl mb-10">
                            <h4 className="font-Poppins font-semibold text-xl sm:text-2xl text-black mb-6">Tags</h4>
                            <div className="space-y-3">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {["Tech", "Trends", "Innovat", "Tips"].map((tag, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-2 bg-white font-Montserrat text-sm sm:text-base text-black01 cursor-pointer rounded-md text-center"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {["Gadget", "Guide", "Gadget"].map((tag, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-2 bg-white font-Montserrat text-sm sm:text-base text-black01 cursor-pointer rounded-md text-center"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div>
                            <h3 className="font-Poppins font-semibold text-xl sm:text-2xl text-black01 mb-2">Recent Posts</h3>
                            <div className="h-1.5 w-28 sm:w-40 bg-orange mb-8 rounded" />
                            <div className="grid grid-cols-1 gap-6">
                                {TechTalksData
                                    .filter((item) => !selectedCategory || item.category === selectedCategory)
                                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                                    .slice(0, 2)
                                    .map((post) => (
                                        <div
                                            className="relative cursor-pointer group"
                                            key={post.id}
                                            onClick={() => {
                                                setBlog(post);
                                                navigate(`/Blog/${post.id}`);
                                            }}
                                        >
                                            <div className="absolute top-3 left-3 z-10 bg-orange text-white text-xs font-bold font-montserrat py-1 px-3 rounded-full">
                                                Featured
                                            </div>
                                            <div className="border border-transparent group-hover:border-black100 group-hover:p-4 sm:group-hover:p-[45px] group-hover:rounded-2xl transition-all duration-300">
                                                <div className="rounded-2xl overflow-hidden max-h-[300px] sm:max-h-[406px]">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="mt-6 sm:mt-8">
                                                    <h5 className="font-poppins font-semibold text-lg sm:text-xl md:text-2xl text-black01 leading-tight">
                                                        {post.title}
                                                    </h5>
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5 sm:mt-8 gap-3">
                                                        <div className="py-1.5 px-3 bg-orange rounded-md sm:rounded-lg w-max">
                                                            <span className="font-montserrat font-bold text-sm sm:text-base text-white">
                                                                {post.category}
                                                            </span>
                                                        </div>
                                                        <span className="flex items-center gap-x-2 font-montserrat text-sm sm:text-base text-black01">
                                                            <HiMiniClock size={18} />
                                                            {post.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </aside>

                    {/* Blog Content */}
                    <article className="pr-0 lg:pr-[110px]">
                        <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-[56px] text-black01 mb-4 leading-tight sm:leading-[68px]">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 items-center text-gray-600 text-sm sm:text-base mb-10">
                            <div className="flex gap-x-3 items-center">
                                <IoPerson size={20} />
                                <span>{blog.postedBy}</span>
                            </div>
                            <span className="bg-orange text-white px-3 py-1 rounded-full font-montserrat font-bold text-sm sm:text-base">
                                {blog.category}
                            </span>
                            <span className="flex items-center gap-x-1 font-montserrat text-sm sm:text-base">
                                <HiMiniClock color="#303030" size={20} />
                                {blog.date}
                            </span>
                        </div>
                        <div className="mb-8">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
                            />
                        </div>
                        <div className="text-base sm:text-lg text-gray-800 leading-relaxed whitespace-pre-line font-montserrat">
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                {blog.Descriptions}
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">01</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">5G Connectivity</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                Relationship is the issue generated by mobile wireless technology, and is sensitive to PC/Web/RSI or Wi-Fi. We use SDK/MSG, which allows specific and lower latency, SSL connectivity, will enable new applications such as remote average, augmented reality, and autonomous vehicles.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">02</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">Artificial Intelligence (AI)</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                AI is prioritizing the way we interact with our devices and the world around us. From virtual machines to its first mobile AI, we can easily access all of them from AI, in changing the way we live and work.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">03</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">Virtual Reality (VR) and Augmented Reality (AR)</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                VR and AR are technologies that enable us to experience digital content in a more immersive way. Through VR and externalities, we can learn and estimate how technologies come. This means an environment that has been used for real-time applications.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">04</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">Internet of Things (IoT)</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                The IoT is a network of devices that are connected to the internet, allowing them to communicate and exchange data. This technology has the potential to transform many industries, from healthcare and agriculture to transportation and manufacturing.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">05</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">Edge Computing</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                Edge computing is a new computing paradigm that brings computing power closer to the devices that generate and consume data. By processing data at the edge of the network, edge computing can reduce latency, improve security, and enhance privacy.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">06</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">Blockchain</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                Blockchain is a technology that enables secure, decentralized transactions without the need for a central authority. From cryptocurrency to supply chain management, blockchain has the potential to transform many industries.
                            </p>

                            <div className="mb-4 mt-8 flex gap-x-[30px]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange rounded-full relative flex-shrink-0">
                                    <h5 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-Poppins font-semibold text-sm sm:text-xl text-white">07</h5>
                                </div>
                                <h3 className="font-Montserrat font-bold text-lg sm:text-xl">Quantum Computing</h3>
                            </div>
                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                Quantum computing is a new type of computing that uses the principles of quantum mechanics to perform calculations. With the potential to solve complex problems that are beyond the capabilities of classical computers, quantum computing has the potential to revolutionize many industries, from finance and healthcare to energy and transportation.
                            </p>

                            <p className="mb-6 font-Montserrat font-normal text-base sm:text-lg leading-relaxed text-black01">
                                In conclusion, staying up to date with the latest tech trends is essential for anyone who wants to stay ahead of the curve. From 5G connectivity and AI to VR and AR, these technologies have the potential to transform the way we live and work. By keeping up with the latest trends and innovations, you can prepare yourself for the future and stay ahead of the competition.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Related Articles Section */}
                <section className="mt-20 px-4 sm:px-6 md:px-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                        <h2 className="font-Poppins font-semibold text-2xl sm:text-3xl text-black01">
                            Related Articles
                        </h2>
                        <Link
                            to="/Blog"
                            className="text-orange font-montserrat font-semibold text-base sm:text-lg hover:underline"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            // 1 from same category
                            ...TechTalksData.filter(
                                (item) => item.category === blog.category && item.id !== blog.id
                            ).slice(0, 1),

                            // 2 from other categories
                            ...TechTalksData.filter(
                                (item) => item.category !== blog.category && item.id !== blog.id
                            ).slice(0, 2),
                        ].map((related) => (
                            <div
                                key={related.id}
                                className="relative cursor-pointer border border-transparent hover:border-black100 hover:p-5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="absolute top-4 left-4 z-10 bg-orange text-white text-xs font-bold font-montserrat py-1 px-3 rounded-full">
                                    Featured
                                </div>

                                <Link to={`/Blog/${related.id}`} onClick={() => setBlog(related)}>
                                    <div className="rounded-2xl overflow-hidden max-h-[200px]">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-[200px] object-cover"
                                        />
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-Poppins font-semibold text-lg sm:text-xl text-black01 mb-3 leading-7">
                                            {related.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                                                {related.category}
                                            </span>
                                            <span className="flex items-center text-sm text-gray-500 gap-1 font-montserrat">
                                                <HiMiniClock size={16} /> {related.date}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </>
    );
};

export default BlogDetails;