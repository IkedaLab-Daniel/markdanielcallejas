import { useState, useEffect } from 'react'

// > images
import mepng from '../assets/me.png'
import catloader from '../assets/cat-loader.gif'

// > images - banners
import fullstackbanner from '../assets/1.svg'
import aibanner from '../assets/2.svg'

// > images - tech icon
import jscircle from '../assets/js.svg'
import pythoncircle from '../assets/py.svg'
import htmlsvg from '../assets/html.svg'
import csssvg from '../assets/css.svg'
import nodesvg from '../assets/node.svg'
import expresssvg from '../assets/express.svg'
import mongodbsvg from '../assets/mongodb.svg'
import mysqlsvg from '../assets/mysql.svg'
import reactsvg from '../assets/react.svg'
import reduxsvg from '../assets/redux.svg'
import gitsvg from '../assets/git.svg'
import figmasvg from '../assets/figma.svg'
import phpsvg from '../assets/php.svg'

const techSets = [
  [
    { src: fullstackbanner, className: 'absolute fullstackbanner' },
    { src: aibanner, className: 'absolute aibanner' },
    { src: jscircle, className: 'absolute js' },
    { src: pythoncircle, className: 'absolute py' },
    { src: htmlsvg, className: 'absolute html' },
    { src: csssvg, className: 'absolute css' }
  ],
  [
    { src: nodesvg, className: 'absolute node' },
    { src: expresssvg, className: 'absolute express' },
    { src: mongodbsvg, className: 'absolute mongodb' },
    { src: reactsvg, className: 'absolute react' },
    { src: reduxsvg, className: 'absolute redux' }
  ],
  [
    { src: gitsvg, className: 'absolute git' },
    { src: figmasvg, className: 'absolute figma' },
    { src: phpsvg, className: 'absolute php' },
    { src: mysqlsvg, className: 'absolute mysql' },
  ]
]

const allImages = [
  mepng,
  fullstackbanner,
  aibanner,
  jscircle,
  pythoncircle,
  htmlsvg,
  csssvg,
  nodesvg,
  expresssvg,
  mongodbsvg,
  mysqlsvg,
  reactsvg,
  reduxsvg,
  gitsvg,
  figmasvg,
  phpsvg
]

const Hero = () => {
    const [setIndex, setSetIndex] = useState(0)
    const [isFading, setIsFading] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState(false)

    useEffect(() => {
        let loaded = 0
        allImages.forEach(src => {
            const img = new window.Image()
            img.src = src
            img.onload = img.onerror = () => {
                loaded += 1
                if (loaded === allImages.length) setImagesLoaded(true)
            }
        })
    }, [])

    useEffect(() => {
        if (!imagesLoaded) return
        const timer = setTimeout(() => {
            setIsFading(true)
            setTimeout(() => {
                setSetIndex((prev) => (prev + 1) % techSets.length)
                setIsFading(false)
            }, 400) 
        }, 5000)
        return () => clearTimeout(timer)
    }, [setIndex, imagesLoaded])

    if (!imagesLoaded) {
        return (
            <div style={{
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <img src={catloader} alt="Loading..." style={{ width: 120, height: 120, marginBottom: 16 }} />
                <span style={{ color: '#555', fontSize: '1.1rem' }}>Loading...</span>
            </div>
        )
    }

    return(
        <>
            <div className="hero">
                <div className="left">
                    <h1 className="name">Night is so peaceful guys</h1>
                    <h4>see you'll tommorow</h4>
                    <p>join yeolpunta group??????????</p>
                    <div className="button-container">
                        <button className='contact'>Contact</button>
                        <button className='projects'>Projects</button>
                    </div>
                </div>

                <div className="right">
                    <img src={mepng} alt="" className='me' />
                    <div className={`tech-icons ${isFading ? 'fade-out' : 'fade-in'}`}>
                        {techSets[setIndex].map((icon) => (
                            <img
                                key={icon.src + icon.className}
                                src={icon.src}
                                className={icon.className}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero