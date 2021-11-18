import instance from "../config/axios"

export function getAll(){
    return instance.get("api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=18&page=1&sparkline=false&price_change_percentage=1h")
}
export function getById(id){
    return instance.get("producto/"+id)
}
