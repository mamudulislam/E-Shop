import Container from '../../Golobalcomponentes/Container'
import Leftsidecomponent from './Components/Leftsidecomponent'
import Rightproductcomponent from './Components/Rightproductcomponent'

const Product = () => {
    return (
        <>
            <Container>
                <div className='grid grid-cols-[1fr_3.8fr] gap-x-4 mt-[64px]'>
                    <Leftsidecomponent />
                    <Rightproductcomponent />
                </div>
            </Container>
        </>
    )
}

export default Product