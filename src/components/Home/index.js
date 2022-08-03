import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'Julian'.split('')
    const webArray = 'web'.split('')
    const devArray = 'developer'.split('')

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
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    
                    <br />

                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
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
                    strArray={webArray}
                    idx={22}
                    />

                    <span> </span>

                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={devArray}
                    idx={24}
                    />
                </h1>
                <h2> Full-Stack Web Developer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        <Loader type='line-scale'/>
        </>
    )
}

export default Home