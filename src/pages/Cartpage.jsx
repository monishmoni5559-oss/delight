import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../redux/cartslice'
const Cartpage = () => {


    const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch()


    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }




    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    }


    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity(
                { id, quantity: quantity - 1 }
            )
            )
        }
    }




    return (
        <div >
            <center>
                <h1>Cart Items</h1>




                <div class="row" style={{ padding: 30 }}>



                    {
                        cartitems.map(
                            (mens) => (
                                <div className='col-4  ' key={mens.id}>




                                    <div class="card grid">
                                        <img src={mens.img} class="card-img-top" alt="..." height="180" />
                                        <div class="card-body">
                                            <p class="a"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                                                    <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                                </svg>2264 Reviews</p>
                                            <p class="b">{mens.tittle}</p>
                                            <a href="#" class="btn btn">Bae clog</a>
                                            <h6>{mens.num}</h6>
                                        </div>
                                        <p>{mens.para}</p>


                                        <div className='col-41' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                            <button onClick={() => { decrementCart(mens.id, mens.quantity) }}>-</button>
                                            {mens.quantity}
                                            <button onClick={() => { incrementCart(mens.id, mens.quantity) }} >+</button>
                                        </div>




                                        


                                            <button class="btn btn-danger cartbutton" onClick={() => deleteCart(mens)} style={{ backgroundColor: 'red' }}> Delete </button>




                                        </div>
                                    </div>
                                    )
                                    )
                    }


                                </div>
            </center>


        </div>
    )
}


export default Cartpage
