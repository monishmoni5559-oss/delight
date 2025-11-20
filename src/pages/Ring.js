import React from 'react'
// import './Rings.css'
import'../constant/Rings'
import { Rings } from '../constant/Rings'


const Ring = () => {
    return (
        <div className='row'>
            {
                Rings.map(
                    (item) => (
                        <div className='col-4'>
                            <div class="card" >
                                <img src={item.img} class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title">{item.para}</h5>
                                    <p class="card-text">{item.num}</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Ring