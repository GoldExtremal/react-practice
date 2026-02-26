export default function CounterRel({ count, increment, decrement }) {

    return (
        <div className='counter'>
            <button className="counter-btn decrement" onClick={decrement}>−</button>
            <p>{count}</p>
            <button className="counter-btn increment" onClick={increment}>+</button>
        </div>
    )
}