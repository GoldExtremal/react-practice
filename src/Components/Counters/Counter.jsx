import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        if (count < 99) {
            setCount(+count + 1)
        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='counter'>
            <button className="counter-btn decrement" onClick={decrement}>−</button>
            <p>{count}</p>
            <button className="counter-btn increment" onClick={increment}>+</button>
        </div>
    )
}