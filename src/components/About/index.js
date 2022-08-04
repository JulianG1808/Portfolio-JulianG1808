import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
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
                        strArray={'About'.split('')} 
                        idx={15}
                        />
                        <span> </span>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'me'.split('')} 
                        idx={15}
                        />  
                    </h1>
                    <div className='info-cont'>
                        <p>
                        Soy un Full Stack Web Developer, orientado a FrontEnd y tambien un Técnico Informático.
                        </p>
                        <p>
                        Me considero buen compañero, resolutivo, investigador, adaptable, responsable, autodidacta, tengo la capacidad de estar concentrado.
                        <br />
                        Entre otras cosas mas personales, estoy apasionado por el IT, en mi ocio suelo estar jugando algun videojuego, viendo automovilismo deportivo, investigando sobre la mecanica automotriz o aprendiendo nuevas cosas del mundo IT para asi aumentar y mejorar mis saberes en el Tech Stack.
                        </p>
                        <p>
                        Tech Stack: <br />
                        Con conocimientos en el lenguaje JavaScript; <br />
                        en FrontEnd: React, Redux, CSS3, HTML5, SASS; <br />
                        en BackEnd: Express, Sequelize, NodeJS; <br />
                        Base de Datos: SQL, Postgre; <br />
                        manejo de versiones con Git.
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