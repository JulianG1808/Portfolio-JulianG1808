import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'

const About = () => {
    const [t, /* i18n */] = useTranslation('about')
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={t("titleFirst").split('')} 
                        idx={15}
                        />
                        <span> </span>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={t("titleSecond").split('')} 
                        idx={15}
                        />  
                    </h1>
                    <div className='info-cont'>
                        <p>{t("paragraphFirst")}</p>
                        <p>{t("paragraphSecond")}</p>
                        <p>{t("paragraphThird")}</p>
                        <br/>
                        <p>
                            {t("paragraphFourth.line1")} <br />
                            {t("paragraphFourth.line2")} <br />
                            {t("paragraphFourth.line3")} <br />
                            {t("paragraphFourth.line4")} <br />
                            {t("paragraphFourth.line5")} <br />
                            {t("paragraphFourth.line6")}
                        </p>
                    </div>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faNode} color='#68A063' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#F1502F' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='line-scale' />
        </>
    )
}

export default About