import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const [t, /* i18n */] = useTranslation('home')

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'Julian,'.split('')
    const h1ArrayFirst = t("h1DevFirst").split('')
    const h1ArraySecond = t("h1DevSecond").split('')
    const greeting = t("greeting").split('')
    const am = t("am").split('')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={greeting}
                    idx={1}
                    />
                    
                    <br />

                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={am}
                    idx={5}
                    />

                    <span> </span>

                    {/* <img src={LogoTitle} alt="developer" /> */}

                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />

                    <br />

                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={h1ArrayFirst}
                    idx={22}
                    />

                    <span> </span>

                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={h1ArraySecond}
                    idx={24}
                    />
                </h1>
                <h2>{t("JobTitle")}</h2>
                <div className='btnTag'> 
                    <Link to="/contact" className="flat-button">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {t("btnContact")}
                    </Link>
                </div>
            </div>
            <Logo />
        </div>
        <Loader type='line-scale'/>
        </>
    )
}

export default Home