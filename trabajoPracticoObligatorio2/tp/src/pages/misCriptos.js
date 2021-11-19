import React from "react";

function MisCriptos(){
    const [loading, SetLoading] = useState(true);
    const [misCriptomonedas, SetMisCriptomonedas] = useState([]);

    useEffect(
        ()=>{
             getAll()
            .then(data=>{
                console.log(data.data)
                if(data){
                    SetLoading(false)
                    SetMisCriptomonedas(data.data)
                }
            })
        },[]
    )
    if (loading){
    return(
        <div>
            <div className="LoadingSpiner spinner-border text-success" role="status"/>
        </div>
    )
    }
    else{
        return(
                <div className="row d-flex justify-content-center">
                    {cryptos.map(crypto=><Producto data={crypto}/>)}
                </div>
        )
    }
}

export default MisCriptos;