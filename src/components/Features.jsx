import React from "react";
import featureimage from '../images/Frame 19.png';

function Features(){
    return(
        <div id="features">
            <div className="features-model">
                <img src={featureimage} alt='feature-image'/>
            </div>
            <div className="features-text">
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sit ducimus odit ab. Deserunt esse, at provident beatae adipisci, nesciunt eveniet autem officiis molestias, vitae aperiam? Ab nesciunt enim velit! Numquam beatae quis nostrum sit perspiciatis quaerat quas hic rerum.
                </p>
                <button>View More Features</button>
            </div>
        </div>
    );
}
export default Features;