import OBContent from './Components/OrderBookContent'
import OrderBookTicker from './Components/OrderBookTicker'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        
        <div className="ob-wrapper">
          
          {/* title✅ */}
          <div className="ob-header">
            <OBContent amountAndPrice={
              <>
                <span>Price <span className="chip">USD</span></span>
                <span>Amount <span className="chip">BTC</span></span>
              </>
            } total={<span>Total <span className="chip">BTC</span>&nbsp;&nbsp;</span>}
            />
          </div>

          {/* asks */}
          <div className="asks">
            <OBContent
              amountAndPrice={
                <ol className='text-white'>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                </ol>
              }
              total={
                <ol className='text-white'>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                </ol>
              }
            ></OBContent>
          </div>

          <OrderBookTicker markPrice='1221' pairPrice='1222'/>
          {/* bids ✅ */}
          <div className="bids">
            <OBContent
              amountAndPrice={
                <ol className='text-white'>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                  <li>
                    <>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                      <span>{(Math.random() * 100).toFixed(2)}</span>
                    </>
                  </li>
                </ol>
              }
              total={
                <ol className='text-white'>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                  <li>{(Math.random() * 100).toFixed(2)}</li>
                </ol>
              }
            ></OBContent>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App