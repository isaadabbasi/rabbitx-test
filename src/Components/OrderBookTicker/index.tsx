import './OrderBookTicker.css'

interface IOrderBookTicker {
  markPrice: string
  pairPrice: string
}
function OrderBookTicker(props: IOrderBookTicker): JSX.Element {
  const { pairPrice, markPrice } = props

  const priceDirection = <span className="price-direction">↗️&nbsp;</span>

  return (
    <div id="ob-ticker-container">
      <div className="ob-ticker">
        <span className="pair-price">{priceDirection} &nbsp; {pairPrice}</span>
        <span>{markPrice}</span>
        <span />
      </div>
    </div>
  )
}

export default OrderBookTicker