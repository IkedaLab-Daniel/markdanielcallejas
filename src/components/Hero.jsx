import { useState, useEffect } from 'react'

// > images
import mepng from '../assets/me.png'

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

const Hero = () => {
    const [setIndex, setSetIndex] = useState(0)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true)
            setTimeout(() => {
                setSetIndex((prev) => (prev + 1) % techSets.length)
                setIsFading(false)
            }, 400) 
        }, 5000)
        return () => clearTimeout(timer)
    }, [setIndex])

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