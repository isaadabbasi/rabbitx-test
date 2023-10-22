import './OrderBookContent.css'

interface IOBContent {
  amountAndPrice: JSX.Element
  total: JSX.Element
}

function OBContent(prop: IOBContent): JSX.Element {
  const { amountAndPrice, total } = prop
  return (
    <div id="ob-content">
      <div className="price-amount-section">
        { amountAndPrice }
      </div>
      <div className="total-section">{ total }</div>
    </div>
  )
}

export default OBContent
