import { Link } from "react-router-dom";
export default function Dashboard({stocks}) {
    return(
        <div>
            {stocks.map(({name, symbol})=> <Link to={`/stock/${symbol}`}>{name}</Link>)}
        </div>
    )
}