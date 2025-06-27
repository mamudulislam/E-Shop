import Container from '../../Golobalcomponentes/Container'
import Leftproductcomponent from './Components/leftproductcomponent'
import Rightproductcomponent from './Components/Rightproductcomponent'

const Product = () => {
    return (
        <>
            <Container>
                <div className='grid grid-cols-[1fr_3.8fr] gap-x-4 mt-[64px]'>
                    <Leftproductcomponent />
                    <Rightproductcomponent />
                </div>
            </Container>
        </>
    )
}

export default Product