import { useState, useEffect } from 'react'
import mepng from '../assets/me.png'
import fullstackbanner from '../assets/1.svg'
import aibanner from '../assets/2.svg'
import jscircle from '../assets/js3.svg'
import pythoncircle from '../assets/py3.svg'

const techSets = [
  [
    { src: fullstackbanner, className: 'absolute fullstackbanner' },
    { src: aibanner, className: 'absolute aibanner' },
    { src: jscircle, className: 'absolute js' },
    { src: pythoncircle, className: 'absolute py' }
  ],
  [
    { src: jscircle, className: 'absolute js' },
    { src: pythoncircle, className: 'absolute py' }
  ]
]

const Hero = () =>{

    const [setIndex, setSetIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
        setSetIndex((prev) => (prev + 1) % techSets.length)
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
                    {techSets[setIndex].map((icon, i) => (
                    <img key={i} src={icon.src} className={icon.className} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero