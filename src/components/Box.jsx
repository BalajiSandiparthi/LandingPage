import React from "react";

function Box(props){
    return (
        <div className="s-box">
            <div className="s-b-img">
                <img src={props.image} alt={props.alte}/>
            </div>
            <div className="s-b-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam et quod incidunt reiciendis provident delectus quis eos suscipit nulla! Esse temporibus necessitatibus pariatur delectus tenetur fugiat sit officia error, blanditiis repudiandae, laboriosam sed eos aliquam eligendi tempore hic corporis!</p>
                <a href='#' className="cv-btn">{props.button}</a>
            </div>

        </div>
    );
}
export default Box;