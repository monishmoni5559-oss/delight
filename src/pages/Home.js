import React from 'react'
import "./Home.css"
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.jpg"
import img4 from "../image/img4.jpg"
import img5 from "../image/img5.jpg"
import img6 from "../image/img6.jpg"
import img7 from "../image/img7.jpg"
import img8 from "../image/img8.jpg"
import img9 from "../image/img9.jpg"
import img10 from "../image/img10.jpg"
import img11 from "../image/img11.jpg"


const Home = () => {
        return (<>

                <div class="row-1">
                        <center><img src={img1} width="220" height="220" />
                                <img src={img2} width="240" height="220" />
                                <img src={img3} width="240" height="220" />
                                <img src={img4} width="240" height="220" /></center>


                </div>


                <div class="row-2">
                        <center><img src={img5} width="250" height="210" />
                                <img src={img6} width="240" height="220" />
                                <img src={img7} width="240" height="250" />
                                <img src={img8} width="240" height="250" /></center>


                </div>


                <div class="row-2">
                        <center><img src={img9} width="250" height="220" />
                                <img src={img10} width="240" height="220" />
                                <img src={img11} width="240" height="220" />
                                <img src={img11} width="240" height="220" /></center>


                </div>
        </>)
}


export default Home