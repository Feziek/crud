import { useState, useCallback } from 'react';

export default function Counter() {

   const [ count, setCount ] = useState(1)

    const onIncrement = useCallback(() => {
        setCount(count => count + 1)
    }, [ setCount ]) 

  return (
    <div>
      <h1>Welcome to Counter app!</h1>
        <h2>Count: { count }</h2>

        <button onClick={ onIncrement }>
            + 1
        </button>
    </div>
  )
}
