import './VerticalNews.scss'
import image from '../../../../../../assets/post-image.jpg'

const VerticalNews = () => {
    return (
    <>
    <div className='vertical-news'>
        <div className='vertical-news-first'>
            <h2>название</h2>
            <p>текст о какой-то статье, смысл которой мы ещё не раскрыли, но ещё работаем над этим, чтоб это было реально интересно</p>
            <img src={image} />
        </div>

        <div className='vertical-news-second'>
            <img src={image} />
            <p>текст о какой-то статье, смысл которой мы ещё не раскрыли, но ещё работаем над этим, чтоб это было реально интересно</p>
            <h2>название</h2>
        </div>

        <div className='vertical-news-third'>
            <div className='circle-1'/>
            <div className='circle-2'/>
            <div className='circle-3'/>
            <div className='circle-4'/>
            <div className='vertical-news-third-card'>
                <h2>название</h2>
                <p>текст о какой-то статье, смысл которой мы ещё не раскрыли, но ещё работаем над этим, чтоб это было реально интересно</p>
                <img src={image} />
            </div>
        </div>
    </div>

    <div className='borders-2'>
        <div className='border-side'/>
        <div className='border-center'/>
        <div className='border-side'/>
    </div>
    </>
)}

export default VerticalNews;