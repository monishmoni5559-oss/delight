import React from 'react'
// import './Bangels.css'
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.jpg"
import img4 from "../image/img4.jpg"
import img5 from "../image/img5.jpg"
import img6 from "../image/img6.jpg"
import { Bangels } from '../constant/Bangels'

const Bangel = () => {
    return (
        <div className='row'>
            {
                Bangels.map(
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


export default Bangel
