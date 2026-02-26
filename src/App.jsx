import './App.css'
import Counters from './Components/Counters/Counters'
import Slider from './Components/Slider/Slider'
import TicTacToe from './Components/TicTacToe/TicTacToe'

export default function App() {

    return (
        <div className='App'>
            <div className='app-row'>
                <div className='column1'>
                    <Counters/>
                    <Slider />
                </div>
                <TicTacToe />
            </div>
        </div>
    )
}