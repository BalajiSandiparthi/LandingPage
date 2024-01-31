import React from "react";
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services(){
    return (
        <div id="services">
            <div className='s-heading'>
                <h1>Services</h1>
                <p>Here are some Services I provide</p>
            </div>
            <div className="b-container">
                <div className="s-box">
                    <div className="s-b-img">
                        <img src={image1} alt='image1'/>
                    </div>
                    <div className="s-b-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam et quod incidunt reiciendis provident delectus quis eos suscipit nulla! Esse temporibus necessitatibus pariatur delectus tenetur fugiat sit officia error, blanditiis repudiandae, laboriosam sed eos aliquam eligendi tempore hic corporis!</p>
                        <a href='services' className="cv-btn">C++</a>
                    </div>
                </div>
                <div className="s-box">
                    <div className="s-b-img">
                        <img src={image2} alt='image2'/>
                    </div>
                    <div className="s-b-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam et quod incidunt reiciendis provident delectus quis eos suscipit nulla! Esse temporibus necessitatibus pariatur delectus tenetur fugiat sit officia error, blanditiis repudiandae, laboriosam sed eos aliquam eligendi tempore hic corporis!</p>
                        <a href='services' className="cv-btn">React</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;