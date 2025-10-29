import './Articles.scss'
import LastNew from './News/LastNew/LastNew'
import Mobs from './News/Mobs/Mobs'
import VerticalNews from './News/VerticalNews/VerticalNews'

const Articles = () => {
    return (
    <>
    <div className='articles'>
        <LastNew />
        <VerticalNews />
        <Mobs />
    </div>
    </>
)}

export default Articles