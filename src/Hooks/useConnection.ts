import { useState, useEffect } from 'react'
import { Centrifuge, Subscription } from 'centrifuge'
function useWSConnection(url: string): [
  boolean,
  boolean,
  boolean,
  boolean,
  unknown
] {
  const [data, setData] = useState({})

  const [isConnecting, setIsConnecting] = useState(false)
  const [connected, setIsConnected] = useState(false)
  
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribed, setIsSubscribed] = useState(false)

  const handleConnected = (): void => {
    setIsConnected(true)
  }
  const handleConnecting = (): void => {
    setIsConnecting(true)
  }

  const handleDisconnected = (): void => {
    setIsConnected(false)
  }

  const handleSubscribing = (): void => {
    setIsSubscribing(true)
  }
  const handleSubscribed = (): void => {
    setIsSubscribed(true)
  }
  const handleUnsubscribed = (): void => {
    setIsSubscribed(false)
  }

  const handlePublication = (_data: unknown): void => {
    console.log('publication: ', _data)
  }

  useEffect(() => {
    const centrifuge = new Centrifuge(url, {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MDAwMDAwMDAwIiwiZXhwIjo2NTQ4NDg3NTY5fQ.o_qBZltZdDHBH3zHPQkcRhVBQCtejIuyq8V1yj5kYq8',
    })
    
    centrifuge.on('connected', handleConnected)
    centrifuge.on('connecting', handleConnecting)
    centrifuge.on('disconnected', handleDisconnected)
    centrifuge.on('error', (e) => {
      console.log('error: ', e)
    })

    const subsc = centrifuge.newSubscription('orderbook:ETH-USDT')

    subsc.on('subscribing', handleSubscribing)
    subsc.on('subscribed', handleSubscribed)
    subsc.on('unsubscribed', handleUnsubscribed)

    subsc.on('publication', handlePublication)

    subsc.subscribe()
    centrifuge.connect()

    return () => {
      centrifuge.removeSubscription(subsc)
      centrifuge.removeAllListeners()
      centrifuge.disconnect()
    }
  }, [url])

  return [isConnecting, connected, isSubscribing, subscribed, data]
}

export default useWSConnection