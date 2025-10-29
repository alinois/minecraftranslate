import './Header.scss'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
    <>
    <div className='header'>
        <div className='header-links'>
            <span>новости</span>
            <span>о проекте</span>
            <span>справочник</span>
        </div>

        <div className='header-logo'>
        <img src={logo} />
        </div>

        <div className='header-update'>
            <span>Последнее <br /> изменение <br /> 11.11.1234</span>
        </div>
    </div>
    </>
)}

export default Header