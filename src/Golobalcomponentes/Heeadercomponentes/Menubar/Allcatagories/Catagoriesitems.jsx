import { FaHeadphonesAlt, FaHome, FaMobileAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoCameraSharp, IoTvSharp } from "react-icons/io5";
import { SiPcgamingwiki } from "react-icons/si";
import { Link } from "react-router-dom";

export const Catagoriesitems = [
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'><FaComputer color="#FF624C" /> Computers & Tablets</Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'><FaMobileAlt color="#FF624C" /> Mobile & Accessories</Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'><IoTvSharp color="#FF624C" /> TV & Home Theater</Link>
        ),
        key: '2',
    },
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'><FaHeadphonesAlt color="#FF624C" /> Audio & Headphones</Link>
        ),
        key: '3',
    },
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'><IoCameraSharp color="#FF624C" /> Cameras & Camcorders</Link>
        ),
        key: '4',
    },
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'>
                <SiPcgamingwiki color="#FF624C" />    Gaming Equipment</Link>
        ),
        key: '5',
    },
    {
        label: (
            <Link to="/Products" className='font-Montserrat font-normal text-base text-black01 flex items-center gap-x-2'><FaHome color="#FF624C" /> Home Appliances</Link>
        ),
        key: '6',
    },

];