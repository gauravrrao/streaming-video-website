import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        
        <div className='main-container'>
            <div className='container'>
                <div className="img">
                    <img src={props.image} className="image" alt="" />
                </div>
                <div className="second-container">
                    <hr className='line'></hr>
                    <p className='heading_name'>NETFLIX ORIGINAL SERIES</p>
                    <h3 className='title'>{props.title}</h3>
                    <button> <a href={props.link}>WATCH NOW</a> </button>
                </div>
            </div>
            
        </div>
        
    )
}

export default Card