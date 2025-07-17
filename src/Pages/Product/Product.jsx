import { Helmet } from 'react-helmet-async'
import Container from '../../Golobalcomponentes/Container'
import Subscribe from '../Home/Componentes/Subscribe/Subscribe'
import Leftsidecomponent from './Components/Leftsidecomponent'
import Rightproductcomponent from './Components/Rightproductcomponent'

const Product = () => {
    return (
        <>
            <Helmet>
                <title>Product</title>
            </Helmet>
            <Container>
                <div className="px-4 sm:px-6 lg:px-0 mt-10 md:mt-[64px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.8fr] gap-x-4">
                        <Leftsidecomponent />
                        <Rightproductcomponent />
                    </div>
                </div>
                <div>
                    <Subscribe />
                </div>
            </Container>
        </>
    )
}

export default Product
