import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const [t /* i18n */] = useTranslation('portfolio')
  const [/* letterClass */, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            // <a href={port.url}>
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="portfolio img"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.GitHub)}
                >
                  {t('btnGithub')}
                </button>
                {port.url !== '#' ? (
                  <button className="btn" onClick={() => window.open(port.url)}>
                    {t('btnDemo')}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
            // </a>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        {/* <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={t('title').split('')}
            idx={15}
          />
        </h1> */}
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Portfolio
