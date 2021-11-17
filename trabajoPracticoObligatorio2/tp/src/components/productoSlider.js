import React from "react";

function ProductoSlider(props){
    const{data} = props
    const tab = <>&nbsp;</>
    return(
        <div className="slide">
            <span className="info">{data.name} {tab} ${data.ath}</span>
        </div>
    );
}
export default ProductoSlider;