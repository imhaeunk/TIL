import React, { useEffect, useState } from 'react'

const CoinTracker = () => {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [amount, setAmount] = useState(0)
  const [select, setSelect] = useState('')

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setCoins(json)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>The Coins {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <label htmlFor="USD">USD</label>
          <input
            id="USD"
            value={amount}
            onChange={e => {
              setAmount(e.target.value)
            }}
          />
          <span>to</span>
          <select
            onChange={e => {
              setSelect(e.target.value)
            }}
          >
            {coins.map((coin, i) => (
              <option value={coin.quotes.USD.price} key={i}>
                {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>You can get {amount / select}</div>
        </>
      )}
    </div>
  )
}

export default CoinTracker
