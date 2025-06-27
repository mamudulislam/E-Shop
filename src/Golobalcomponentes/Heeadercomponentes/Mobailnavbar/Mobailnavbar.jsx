import Container from '../../Container'
import { Link } from 'react-router-dom'
import logo from "../../../assets/Logo/logo.png"
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Drawer from '../../Drawercomponentes/Drawer';
import Socialwhitelang from '../Topbar/Socialwhitelang';
import NavListItems from './NavListItems';
const Mobailnavbar = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <div className='border-b-1 border-b-black100'>
                <Container>
                    <div className='flex justify-between gap-x-3 items-center py-[22px]'>
                        <Link to="/" className='w-[20%]'>
                            <img src={logo} alt="logo is loading now....." className='w-[70px]' />
                        </Link>
                        <div className='border border-black01 rounded-[10px] flex items-center justify-between px-[10px] py-[8px] w-[40%]'>
                            <input placeholder={t('search_product')} type="text" className='outline-none w-[90%]' />
                            <CiSearch size={20} />
                        </div>
                        <div className='w-[15%] flex justify-end cursor-pointer'
                            onClick={() => setOpen(true)}>
                            <RxHamburgerMenu size={25} />
                        </div>
                    </div>
                </Container >
            </div >
            <Drawer open={open} setOpen={setOpen} placement="left" closable={true} rootClassName='ant_drawer'
                title=
                {<div><Socialwhitelang /></div>}
            >
                <NavListItems />
            </Drawer >
        </>
    )
}

export default Mobailnavbar