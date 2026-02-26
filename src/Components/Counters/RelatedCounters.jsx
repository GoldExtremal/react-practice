import { useState } from "react";
import CounterRel from "./CounterRel";

export default function RelatedCounters() {
    const [CountRel, setCountRel] = useState(0);

    function increment() {
        if (CountRel < 99) {
            setCountRel(+CountRel + 1)
        }
    }

    function decrement() {
        if (CountRel > 0) {
            setCountRel(CountRel - 1)
        }
    }

    return (
        <div className="counters">
            <CounterRel count={CountRel} increment={increment} decrement={decrement} />
            <CounterRel count={CountRel} increment={increment} decrement={decrement} />
        </div>
    )
}