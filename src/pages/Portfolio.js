import React from "react"
// import images
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
// import Link
import {Link} from 'react-router-dom'

const Portfolio = () => {
  return <section className="section">
    <div className="container mx-auto h-full relative">
      <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
        {/* text */}
        <div>text</div>
        {/* images */}
        <div>images</div>
      </div>
    </div>
  </section>
}

export default Portfolio
