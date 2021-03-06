import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faCamera, faMapMarked } from '@fortawesome/free-solid-svg-icons'

import imageHero from 'assets/images/img-hero.jpg'
import imageHero_ from 'assets/images/img-hero-frame.jpg'
import Button from 'elements/Button'

import numberFormat from 'utils/formatNumber'
import Fade from 'react-reveal/Fade';

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <Fade>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br/>
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
                        We provide what you need to enjoy your holiday with family. Time to 
                        make another memorable moments.
                    </p>
                    <Button 
                    className="btn px-5" 
                    hasShadow 
                    isPrimary 
                    onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{marginTop: 80 }}>
                        <div className="col-auto">
                            <FontAwesomeIcon size="sm" icon={faPlaneDeparture} alt={`${props.data.travelers}`}/>
                            <h6 className="mt-3">                                
                            {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <FontAwesomeIcon size="sm" icon={faCamera} alt={`${props.data.treasures}`}/>
                            <h6 className="mt-3">
                                {numberFormat(props.data.treasure)} <span className="text-gray-500 font-weight-light">
                                    Treasures
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <FontAwesomeIcon size="sm" icon={faMapMarked} alt={`${props.data.cities}`}/>
                            <h6 className="mt-3">
                                {numberFormat(props.data.city)} <span className="text-gray-500 font-weight-light">
                                    Cities
                                </span>
                            </h6>
                        </div>
                        
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{width: 520, height: 410}}>
                         <img src={imageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1}}/>
                         <img src={imageHero_} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '0 -5px -5px 0' }}/>
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    )
}
