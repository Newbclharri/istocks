import { Link } from "react-router-dom";
export default function Dashboard({stocks}) {
    return stocks.map(({name, symbol})=> <Link className="stock-link" to={`/stock/${symbol}`} key={symbol}>{name}</Link>)
    
}