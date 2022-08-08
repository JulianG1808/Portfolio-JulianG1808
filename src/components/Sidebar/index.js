import './index.scss'
import { NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage, faUser, faBriefcase, faAngleDoubleRight, faBook } from '@fortawesome/free-solid-svg-icons'
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
        <div className='nav-bar-top'>
            <NavLink exact='true' activeclassname='active' className='logo' to='/'>
                <FontAwesomeIcon className='logo-icon' icon={faAngleDoubleRight} color='#e40046'/> 
                <img className='sub-logo' src={LogoSubtitle} alt='julian' />
            </NavLink>

            <div className='lang-link' onClick={() => handleChangeLanguage()}>
                    {i18n.language === 'es' ? 
                    <svg className='lang-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <g data-name="08-Spain">
                            <path fill="#e21743" d="M63 5v16H1V5a4 4 0 0 1 4-4h54a4 4 0 0 1 4 4Z"/>
                            <path fill="#ffd45d" d="M1 21h62v22H1z"/>
                            <path fill="#e21743" d="M63 43v16a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V43Z"/>
                            <path fill="#c7002b" d="M1 17v4h.37A22.058 22.058 0 0 1 1 17zm62 4v-4a22.058 22.058 0 0 1-.37 4z"/>
                            <path fill="#ffb844" d="M41 39H23A22 22 0 0 1 1.37 21H1v22h62V21h-.37A22 22 0 0 1 41 39Z"/>
                            <path fill="#c7002b" d="M1 59a4 4 0 0 0 4 4h54a4 4 0 0 0 4-4V43H1Z"/>
                            <path fill="#b51135" d="M59 59H5a4 4 0 0 1-4-4v4a4 4 0 0 0 4 4h54a4 4 0 0 0 4-4v-4a4 4 0 0 1-4 4Z"/>
                            <path fill="#ea5172" d="M59 1H5a4 4 0 0 0-4 4v4a4 4 0 0 1 4-4h54a4 4 0 0 1 4 4V5a4 4 0 0 0-4-4Z"/>
                            <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M24 29v11M8 29v11"/>
                            <path fill="#e21743" d="M19 24a1.959 1.959 0 0 1 2 2 1.8 1.8 0 0 1-.988 1.744A1.935 1.935 0 0 0 19 29.482V30h-6v-.518a1.935 1.935 0 0 0-1.012-1.738A1.8 1.8 0 0 1 11 26a1.959 1.959 0 0 1 2-2Z"/>
                            <path fill="#eef2fa" d="M21 30v5h-5v-5h5z"/>
                            <path fill="#e21743" d="M16 35v5c-2.76 0-5-.69-5-4v-1zm5 0v1c0 3.31-2.24 4-5 4v-5zM16 30v5h-5v-5h5z"/>
                            <path fill="#eef2fa" d="M23 29h2v11h-2zM7 29h2v11H7z"/>
                            <path fill="#ffb844" d="M14 35v4.828a8.147 8.147 0 0 0 1 .136V35zm-2 0v3.863a3.28 3.28 0 0 0 1 .656V35zm1-5.518V30h6v-.518a2.1 2.1 0 0 1 .062-.482h-6.124a2.1 2.1 0 0 1 .062.482z"/>
                            <path fill="#c7002b" d="M14 37.063a20.932 20.932 0 0 1-1-.484v2.94a6.26 6.26 0 0 0 2 .445 8.147 8.147 0 0 1-1-.136zm-1 2.456a3.28 3.28 0 0 1-1-.656V36.05c-.342-.2-.67-.418-1-.634V36c0 1.958.788 2.995 2 3.519zm3-1.677a22.795 22.795 0 0 1-1-.356v2.478c.323.025.658.036 1 .036 1.685 0 3.173-.261 4.079-1.214A21.884 21.884 0 0 1 16 37.842z"/>
                            <path fill="#cdd2e1" d="M24 39h-1v1h2v-1h-1zM7 32.067V40h2v-6.042a21.716 21.716 0 0 1-1-.895q-.516-.482-1-.996Z"/>
                            <path fill="#ffb844" d="M15 39.964z"/>
                            <path fill="#d18f23" d="M14 37.063v2.765a8.147 8.147 0 0 0 1 .136v-2.478c-.338-.132-.67-.275-1-.423Z"/>
                            <path fill="#ffb844" d="M13 39.519z"/>
                            <path fill="#d18f23" d="M12 36.05v2.813a3.28 3.28 0 0 0 1 .656v-2.94c-.336-.172-.674-.34-1-.529Z"/>
                        </g>
                    </svg> : 
                    <svg className='lang-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <g data-name="02- United Kingdom">
                        <path fill="#e9edf5" d="M30 1v28H2v-3h25V1h3zM64 26v3H36V1h3v25h25zM39 38v25h-3V35h28v3H39zM30 35v28h-3V38H2v-3h28z"/>
                        <path fill="#e9edf5" d="M27 40v4.89L8.89 63H6a3.931 3.931 0 0 1-1.64-.36Z"/>
                        <path fill="#e9edf5" d="M27 38v2L4.36 62.64A3.988 3.988 0 0 1 2 59v-2.89L20.11 38zm37 18.11V59a3.931 3.931 0 0 1-.36 1.64L41 38h4.89z"/>
                        <path fill="#e9edf5" d="m41 38 22.64 22.64A3.988 3.988 0 0 1 60 63h-2.89L39 44.89V38zM64 5v2.89L45.89 26H39v-2L61.64 1.36A3.988 3.988 0 0 1 64 5z"/>
                        <path fill="#e9edf5" d="M61.64 1.36 39 24v-5h.11l18-18H60a3.931 3.931 0 0 1 1.64.36zM25 26h-4.89L2 7.89V5a3.931 3.931 0 0 1 .36-1.64z"/>
                        <path fill="#e9edf5" d="M27 19.11V26h-2L2.36 3.36A3.988 3.988 0 0 1 6 1h2.89Z"/>
                        <path fill="#e21743" d="M64 29v6H36v28h-6V35H2v-6h28V1h6v28h28z"/>
                        <path fill="#2448a8" d="M20.11 38 2 56.11V38h18.11zM27 44.89V63H8.89L27 44.89zM57.11 63H39V44.89L57.11 63zM64 38v18.11L45.89 38H64zM64 7.89V26H45.89L64 7.89zM57.11 1l-18 18H39V1h18.11zM20.11 26H2V7.89L20.11 26zM27 1v18.11L8.89 1H27z"/>
                        <path fill="#e21743" d="M25.707 25.293 2.9 2.488a3.954 3.954 0 0 0-.542.872 3.951 3.951 0 0 0-.3 1.112L23.586 26H26a1 1 0 0 0-.293-.707zM61.64 1.36a3.951 3.951 0 0 0-1.112-.3L39 22.586V25a1 1 0 0 0 .707-.293L62.512 1.9a3.954 3.954 0 0 0-.872-.54zM26.293 39.293 3.488 62.1a3.758 3.758 0 0 0 1.984.844L27 41.414V39a1 1 0 0 0-.707.293zM42.414 38H40a1 1 0 0 0 .293.707L63.1 61.512a3.758 3.758 0 0 0 .844-1.984z"/>
                        <path fill="#1f3d8f" d="M64 26v-9a21.911 21.911 0 0 1-1.926 9Z"/>
                        <path fill="#dce1eb" d="M3.926 26H2v3h3.565a21.969 21.969 0 0 1-1.639-3zm56.509 3H64v-3h-1.926a21.969 21.969 0 0 1-1.639 3zm-11.861 9H64v-3h-9.358a21.918 21.918 0 0 1-6.068 3z"/>
                        <path fill="#cdd2e1" d="M39 39h-3v24h3V39zM27 39v24h3V39h-3z"/>
                        <path fill="#dce1eb" d="M11.358 35H2v3h15.426a21.918 21.918 0 0 1-6.068-3Z"/>
                        <path fill="#cdd2e1" d="M27 40 4.36 62.64A3.931 3.931 0 0 0 6 63h2.89L27 44.89Z"/>
                        <path fill="#cdd2e1" d="M27 39h-3a22.1 22.1 0 0 1-4.441-.449L2 56.11V59a3.988 3.988 0 0 0 2.36 3.64L27 40zm15 0 21.64 21.64A3.931 3.931 0 0 0 64 59v-2.89L46.441 38.551A22.1 22.1 0 0 1 42 39z"/>
                        <path fill="#cdd2e1" d="M39 39v5.89L57.11 63H60a3.988 3.988 0 0 0 3.64-2.36L42 39Z"/>
                        <path fill="#b51135" d="M54.642 35H64v-6h-3.565a22.115 22.115 0 0 1-5.793 6ZM30 39h6v24h-6zM5.565 29H2v6h9.358a22.115 22.115 0 0 1-5.793-6Z"/>
                        <path fill="#1f3d8f" d="M17.426 38H2v18.11l17.559-17.559A21.576 21.576 0 0 1 17.426 38ZM8.89 63H27V44.89L8.89 63zM39 63h18.11L39 44.89V63zM46.441 38.551 64 56.11V38H48.574a21.576 21.576 0 0 1-2.133.551zM2 17v9h1.926A21.911 21.911 0 0 1 2 17z"/>
                        <path fill="#b51135" d="M26.293 39.293 3.488 62.1a3.758 3.758 0 0 0 1.984.844L27 41.414V39a1 1 0 0 0-.707.293zM42 39h-1.414L63.1 61.512a3.758 3.758 0 0 0 .844-1.984L43.367 38.953c-.452.028-.907.047-1.367.047z"/>
                        <path fill="#bec3d2" d="M36 59h3v4h-3zM27 59h3v4h-3zM9.414 59l-3.942 3.942a5.184 5.184 0 0 1-.514-.1A3.893 3.893 0 0 0 6 63h2.89l4-4zm-2.828 0H6a3.99 3.99 0 0 1-3.866-3.024L2 56.11V59a3.984 3.984 0 0 0 1.9 3.4 4.062 4.062 0 0 1-.415-.3zm55.921-.907 1.435 1.435a5.109 5.109 0 0 1-.1.513A3.879 3.879 0 0 0 64 59v-2.89l-.134-.134a3.973 3.973 0 0 1-1.359 2.117zm-1.975.853A3.9 3.9 0 0 1 60 59h-6.89l4 4H60a3.985 3.985 0 0 0 3.4-1.9 4.163 4.163 0 0 1-.3.414z"/>
                        <path fill="#8b0b27" d="M30 59h6v4h-6z"/>
                        <path fill="#172e6b" d="m12.89 59-4 4H27v-4H12.89zM39 59v4h18.11l-4-4H39z"/>
                        <path fill="#8b0b27" d="M9.414 59H8l-3.64 3.64a4 4 0 0 0 .6.2 5.184 5.184 0 0 0 .514.1Z"/>
                        <path fill="#8b0b27" d="m6.586 59-3.1 3.1a4.062 4.062 0 0 0 .415.3 4 4 0 0 0 .457.245L8 59zm55.921-.907a3.918 3.918 0 0 1-.867.547l2 2a3.978 3.978 0 0 0 .2-.6 5.109 5.109 0 0 0 .1-.513z"/>
                        <path fill="#8b0b27" d="m60.532 58.946 2.568 2.566a4.163 4.163 0 0 0 .3-.414 4.016 4.016 0 0 0 .245-.458l-2-2a3.945 3.945 0 0 1-1.113.306Z"/>
                        <path fill="#f7faff" d="M27 1h3v4h-3zM36 1h3v4h-3zM61.64 1.36A3.931 3.931 0 0 0 60 1h-2.89l-4 4H60a3.99 3.99 0 0 1 3.866 3.024L64 7.89V5a3.988 3.988 0 0 0-2.36-3.64zM8.89 1H6a3.988 3.988 0 0 0-3.64 2.36A3.931 3.931 0 0 0 2 5v2.89l.134.134A4.01 4.01 0 0 1 6 5h6.89z"/>
                        <path fill="#ea5172" d="M30 1h6v4h-6z"/>
                        <path fill="#376dff" d="m53.11 5 4-4H39v4h14.11zM27 5V1H8.89l4 4H27z"/>
                        <path fill="#ea5172" d="M5.473 5.059 2.9 2.488a3.954 3.954 0 0 0-.542.872 3.951 3.951 0 0 0-.3 1.112L3.5 5.909a3.89 3.89 0 0 1 .86-.549 4.016 4.016 0 0 1 1.113-.301zM61.64 1.36a3.951 3.951 0 0 0-1.112-.3L56.586 5h2.828l3.1-3.1a3.954 3.954 0 0 0-.874-.54z"/>
                        </g></svg>
                }
                    <span className='lang-text'>{t("chooseLanguage")}</span>
            </div>
        </div>
        
        {/* <div className='nav-bar-mid'> */}
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
        {/* </div> */}

        <div className='nav-bar-bottom'>
            <nav>
                    <a
                    className='nav-link' 
                    href={languageDefault === "es" ? '../../assets/CV/Curriculum vitae - Julian Gomez (Español).pdf' : '../../assets/CV/Curriculum vitae - Julian Gomez (English).pdf'}
                    download>
                        <FontAwesomeIcon icon={faBook} className='link-icon' color='#e40046'/>
                        <span className='link-text'>{t("viewCV")}</span>
                    </a>
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