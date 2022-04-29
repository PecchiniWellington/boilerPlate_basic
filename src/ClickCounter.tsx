import { useState } from 'react'

export const ClickCounter = (): any => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={(): any => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  )
}
