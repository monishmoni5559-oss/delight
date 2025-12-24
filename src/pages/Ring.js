import React from 'react'
// import './Rings.css'
import '../constant/Rings'
import { Rings } from '../constant/Rings'
import { useSelector, useDispatch } from "react-redux"
import { addTocart, deleteFromCart } from "../redux/cartslice"


const Ring = () => {
    const cartitems = useSelector((state) => state.cart.cartitems);


    const dispatch = useDispatch();


    const addCart = (item) => {
        dispatch(addTocart(item))
    }


    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
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
                                    {
                                        cartitems.find(Items => Items.id === item.id) ? (
                                            <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} > Remove From Cart </button>)
                                            :
                                            (<button class="btn btn-danger cartbutton" onClick={() => addCart(item)} > Add To Cart </button>)
                                    }
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