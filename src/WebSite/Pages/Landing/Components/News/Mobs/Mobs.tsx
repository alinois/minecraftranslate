import './Mobs.scss'
import mob from "../../../../../../assets/photo_2024-07-17_15-29-52.jpg"

const Mobs = () => {
    return (
    <>
    <div className='mob'>
        <div className='mob-first'>
            <div className='mob-first-text'>
                <h2>моб</h2>
                <p>ого! это же тот самый невероятно крутой моб, которого никто не просил, а моджанг добавили вопреки желаниям
                    критикующего русского сообщества! невероятно...</p>
            </div>
            <img src={mob} />
        </div>

        <div className='mob-second'>
            <div className='mob-second-text'>
                <h2>моб</h2>
                <p>ого! это же тот самый невероятно крутой моб, которого никто не просил, а моджанг добавили вопреки желаниям
                    критикующего русского сообщества! невероятно...</p>
            </div>
            <img src={mob} />
        </div>
    </div>
    </>
)}

export default Mobs;