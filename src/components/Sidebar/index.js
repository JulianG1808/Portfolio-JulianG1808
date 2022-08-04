import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
    const [t, i18n] = useTranslation('sidebar')
    const languageDefault = localStorage.getItem("language")

    const handleChangeLanguage = () => {
        if(languageDefault === "en" || i18n.language === "en") {
            i18n.changeLanguage("es")
            localStorage.setItem("language", "es")
        } 
        else if(languageDefault === "es" || i18n.language === "es") {
            i18n.changeLanguage("en")
            localStorage.setItem("language", "en")
        }
    }

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt='logo' width="50px"/>
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>

        <div className='lang-menu'>
                <select className='selected-lang'>
                    <option value='changeLanguage'>{t("chooseLanguage")}</option>
                    <option
                    value='en'
                    disabled={i18n.language === "en"}
                    onClick={() => handleChangeLanguage()}
                    >
                        EN
                    </option>
                    <option
                    value='es'
                    disabled={i18n.language === "es"}
                    onClick={() => handleChangeLanguage()}
                    >
                        ES
                    </option>
                </select>
        </div>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faMessage} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    className='Linkedin-icon'
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/leandrojuliangomez/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    className='Github-icon'
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/JulianG1808'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)}

export default Sidebar