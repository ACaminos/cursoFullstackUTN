import React from "react";

function ProductoSlider(props){
    const{data} = props
    return(
        <div className="slide">
            <span className="info">{data.name} : ${data.ath}</span>
        </div>
    );
}
export default ProductoSlider;