import './index.scss'
import { NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage, faUser, faBriefcase, faAngleDoubleRight, faBook, faLanguage } from '@fortawesome/free-solid-svg-icons'
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

    const viewCV = () => {
        if(languageDefault === "en"){
            window.open('https://drive.google.com/file/d/1e44kOclgcX1R9l1RBLlG1BIRvVwft0Tc/view')
        }
        else if(languageDefault === "es"){
            window.open('https://drive.google.com/file/d/16KXnTPvnTX2WK9RF2gf3TafaBWuJs_GW/view')
        }
    }

    return (
    <div className='nav-bar'>
        <div className='nav-bar-top'>
            <NavLink exact='true' activeclassname='active' className='logo' to='/'>
                <FontAwesomeIcon className='logo-icon' icon={faAngleDoubleRight} color='#e40046'/> 
                <img className='sub-logo' src={LogoSubtitle} alt='julian' />
            </NavLink>

            <div className='nav-link' onClick={() => handleChangeLanguage()}>
                    <FontAwesomeIcon className='link-icon' icon={faLanguage} color='#e40046'/> 
                    <span className='lang-text'>{t("chooseLanguage")}</span>
            </div>
        </div>
        
        <div className='nav-bar-mid'>
            <nav>
                <NavLink exact='true' activeclassname='active' className='nav-link' to='/'>
                    <FontAwesomeIcon className='link-icon' icon={faHome} color='#e40046'/> 
                    <span className='link-text'>{t("btnHome")}</span>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='nav-link' to='/about'>
                    <FontAwesomeIcon className='link-icon' icon={faUser} color='#e40046'/>
                    <span className='link-text'>{t("btnAbout")}</span>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='nav-link' to='/portfolio'>
                    <FontAwesomeIcon className='link-icon' icon={faBriefcase} color='#e40046'/>
                    <span className='link-text'>{t("btnPortfolio")}</span>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='nav-link' to='/contact'>
                    <FontAwesomeIcon className='link-icon' icon={faMessage} color='#e40046'/>
                    <span className='link-text'>{t("btnContact")}</span>
                </NavLink>
            </nav>
        </div>

        <div className='nav-bar-bottom'>
            <nav>
                    <div
                    className='nav-link' 
                    onClick={viewCV}/* ={languageDefault === "es" ? 'https://drive.google.com/file/d/1e44kOclgcX1R9l1RBLlG1BIRvVwft0Tc/view' : '../../assets/CV/Curriculum vitae - Julian Gomez (English).pdf'} */
                    download>
                        <FontAwesomeIcon icon={faBook} className='link-icon' color='#e40046'/>
                        <span className='link-text'>{t("viewCV")}</span>
                    </div>
                    <a 
                        className='nav-link'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/leandrojuliangomez/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} className='link-icon' color='#e40046'/>
                        <span className='link-text'>Linkedin</span>
                    </a>
                    <a 
                        className='nav-link'
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/JulianG1808'
                    >
                        <FontAwesomeIcon icon={faGithub} className='link-icon' color='#e40046'/>
                        <span className='link-text'>GitHub</span>
                    </a>
            </nav>
        </div>
        
    </div>
)}

export default Sidebar