import React, {useState, useEffect} from "react";
import './index.css';

function App() {

  const [cryptos, setCryptos] = useState([])
  const [loading, setLoading]= useState(true)

  useEffect(
    ()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h")
      .then(res=>res.json())
      .then(data=>{
                    console.log(data)

                      if(data){
                        setCryptos(data)
                        setLoading(false)
                      }
                  })
                }
  )


  if(loading){
    return(
      <div>
        Loading...
      </div>
    )
  }
    else{
      return(
        <div>
            <div className="text-2xl font-bold text-center">Criptomonedas</div>
            <div className=" grid grid-rows-5 justify-center border-1 border-black gap-x-8 gap-y-3 mt-3">
              <div className="grid grid-cols-2">
                <div className="col">Nombre:</div>
                <div className="col">{cryptos.map(crypto=><>{crypto.name}</>)}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col">Valor:</div>
                <div className="col">{cryptos.map(crypto=><>{crypto.current_price}</>)}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col">Prefijo:</div>
                <div className="col">{cryptos.map(crypto=><>{crypto.symbol}</>)}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col">Logo:</div>
                <div className="col">{cryptos.map(crypto=><img src={crypto.image} alt="" className="h-5 w-5 flex justify-center"/>)}</div>
              </div>
                <button className="w-36 h-6 bg-green-400 text-white rounded-full flex justify-center mt-2">Ver detalle</button>
            </div>
        </div>
      )
    }
  }
export default App;
