import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '../styles/porfolio.css'
const imagenesClima = ([
    require('../images/proyectos/apiClima/imagen1.png'),
    require('../images/proyectos/apiClima/imagen2.png'),
    require('../images/proyectos/apiClima/imagen3.png'),
])

const imagenesEcommerce = ([
    require('../images/proyectos/ecommerce/imagen1.png'),
    require('../images/proyectos/ecommerce/imagen2.png'),
    require('../images/proyectos/ecommerce/imagen3.png'),
    require('../images/proyectos/ecommerce/imagen4.png'),
    require('../images/proyectos/ecommerce/imagen5.png'),
    require('../images/proyectos/ecommerce/imagen6.png'),
    require('../images/proyectos/ecommerce/imagen7.png'),
    require('../images/proyectos/ecommerce/imagen8.png'),
    require('../images/proyectos/ecommerce/imagen9.png'),
    require('../images/proyectos/ecommerce/imagen10.png'),
    require('../images/proyectos/ecommerce/imagen11.png'),
    require('../images/proyectos/ecommerce/imagen12.png'),
    require('../images/proyectos/ecommerce/imagen13.png'),
])

const imagenesOmdb = ([
    require('../images/proyectos/omdb/imagen1.png'),
    require('../images/proyectos/omdb/imagen2.png'),
    require('../images/proyectos/omdb/imagen3.png'),
    require('../images/proyectos/omdb/imagen4.png'),
    require('../images/proyectos/omdb/imagen5.png'),
    require('../images/proyectos/omdb/imagen6.png'),
    require('../images/proyectos/omdb/imagen7.png'),
    require('../images/proyectos/omdb/imagen8.png'),
    require('../images/proyectos/omdb/imagen9.png'),
    require('../images/proyectos/omdb/imagen10.png'),
    require('../images/proyectos/omdb/imagen11.png'),
    require('../images/proyectos/omdb/imagen12.png'),
])


export default () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  


    const firstWeather = imagenesClima[0].default
    const firstEcommerce = imagenesEcommerce[0].default
    const firstOmdb = imagenesOmdb[1].default
    const items = [
        {
          src: firstWeather,
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: firstEcommerce,
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: firstOmdb,
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
    ];


    const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    }

    const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem className="centrado1"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img className="centrado" src={item.src}/>
            
          </CarouselItem>
        );
    });

    return(
        <div id="porfolio" className="recuadro separacion">
            <div><h3>PORTFOLIO</h3></div>
            <div className="container">
                <Carousel className="centrado1" activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators className="centrado1" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
        </div>
    )
}


