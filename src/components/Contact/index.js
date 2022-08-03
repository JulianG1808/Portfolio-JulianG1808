import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d522wga', 'template_7516yfn', e.target, 'tWSW_CwU1rHqgSx06')
          .then(() => {
              alert('Message successfully sent!')
          }, () => {
              alert('Failed to send the message, please try again')
          });

        e.target.reset()
      };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={'Contact'.split('')}
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
                        Lorem ipsum dolor sit amet. Est voluptate ipsam et voluptas voluptatem ut accusantium molestias 33 sequi consequatur et quia et officia consequuntur. Vel nostrum autem ex voluptas voluptatem hic expedita voluptas id provident veritatis ut iste delectus? Quo corporis internos in veritatis molestiae et consequuntur ipsum eum sequi alias?
                        </p>
                    </div>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Julian Gomez,
                    <br />
                    Argentina,
                    <br />
                    Santiago del Estero, G4200
                    <br />
                    <span>juliangomez.xvii@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-27.7879897, -64.2655273]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-27.7879897, -64.2655273]}>
                            <Popup>Julian lives in this city, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='line-scale' />
        </>
    )
}

export default Contact