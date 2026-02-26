export default function GameInfo({ status, onReset }) {

    return (
        <div className="game-info">
            <div className="status">{status}</div>
            <button className="reset-btn" onClick={onReset}>Reset Game</button>
        </div>
    )
}