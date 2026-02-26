import "/src/App.css"
import "./Counters.css"
import Counter from "./Counter";
import RelatedCounters from "./RelatedCounters";

export default function Counters() {
    return (
        <div className='card card-counters'>
            <div>
                <h2 className="title">Unrelated counters</h2>
                <div className="counters">
                    <Counter />
                    <Counter />
                </div>
            </div>

            <div>
                <h2 className="title">Related counters</h2>
                <RelatedCounters />
            </div>
        </div>
    )
}