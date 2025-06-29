import React from 'react'
import { useLocation } from 'react-router-dom'
import { Featureddata } from '../../../Home/Componentes/FeaturedProducts/Featureddata'

const Singelproducts = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(1)[1];
    console.log(id)
    const Singelproducts = Featureddata.find((p) => p.id == id)
    console.log(Singelproducts)
    return (
        <div> Singelproducts</div >
    )
}

export default Singelproducts