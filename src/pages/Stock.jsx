import { useParams } from "react-router-dom";

export default function Stock({stocks}) {
    const {symbol} = useParams();
    const stock = stocks.find((stock) => stock.symbol === symbol)
    return(
        <div>
            <h1>{stock.name}</h1>
            <h3>{stock.symbol}</h3>
            <p>Last Price: {stock.lastPrice}</p>
            <p>Change: {stock.change}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Open: {stock.open}</p>
        </div>
    )        
}