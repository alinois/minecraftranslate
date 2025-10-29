import './LastNew.scss'
import image from '../../../../../../assets/post-image.jpg'

const LastNew = () => {
    return (
    <>
    <div className='last-new'>
        <div className='last-new--text'>
            <h2>Название новости</h2>
            <p>текст о какой-то статье, смысл которой мы ещё не раскрыли, но ещё работаем над этим, чтоб это было действительно интересно,
                ведь весь материал мы берем только из крутых и интeресных источников, которым сами доверяем</p>
            <button className='last-new--button'>Изучить подробнее...</button>
        </div>
        <img src={image} />
    </div>

    <div className='borders'>
        <div className='border-side'/>
        <div className='border-center'/>
        <div className='border-side'/>
    </div>
    </>
)}

export default LastNew;