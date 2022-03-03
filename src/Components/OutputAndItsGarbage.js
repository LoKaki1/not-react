import axios from 'axios';
import './components.css'
import { DataGrid } from '@mui/x-data-grid';

const contains_object = (oldList, benny, t) => {
    for(let i = 0; i < oldList.length; i++) {
      if (oldList[i].ticker==benny.ticker && oldList[i].price==t.price) {
        return true
      }
    }
    return false
}

const columns = [
  { field: 'ticker', headerName: 'Ticker', width: 150 },
  { field: 'price', headerName: 'Price', width: 150 },
  { field: 'lastPrice', headerName: 'Last Price', width: 150 },
];

let counter = 0

export default function Watchlist(props) {
    const predictStock = () => {
        axios.post('http://127.0.0.1:5000/predict', props.active || {"ticker": 'NIO'})
        .then((response) => {
          console.log(response)
          props.setAll((oldList) =>
          {
            let newList = JSON.parse(JSON.stringify(oldList))
            let newData = {
                            'ticker': props.active.ticker,
                            'price': response.data.price,
                            'lastPrice': response.data.current_price
                          }
            console.log(response.data)
            if (!contains_object(oldList, props.active, newData)){
              newList.push(newData)
            }
            else
        console.log(`ticker already in local database ${newData.ticker}`)
            console.log(newData)
            return  newList
          })  
        }, (error) => {
          console.log(error);
        })
        
    }

    return (
        <>
          <div >
            <button class='submit'onClick={() => predictStock()}>
              Predict 🚀   
            </button>
          </div>
          <div>
              {props.all.map((item, index) => {
              return <p key={index}> {item.ticker} price is - {item.price}</p>
              })}
          </div>
      </>
    )
}