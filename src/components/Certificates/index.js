import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'


const Certificates = () => {

    const [t, /* i18n */] = useTranslation('certificates')
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container certificates-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={t("title").split('')} 
                        idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type='line-scale' />
        </>
    )
}

export default Certificates;