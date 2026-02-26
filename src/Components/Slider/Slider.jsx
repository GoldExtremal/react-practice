import "./Slider.css"

export default function Slider() {
    return (
        <div className="card slider">
            <h2 className='title'>Slider</h2>
            <div className="btn-block">
                <button className="btn">{'<'}</button>
                <div className="sl"></div>
                <button className="btn">{'>'}</button>
            </div>


        </div>
    )
}