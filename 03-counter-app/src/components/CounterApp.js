import PropTypes from 'prop-types'
import {useState} from 'react'

const CounterApp = ({numero}) => {
  const [num, setNum] = useState(numero);

  const handleIncrement = () => setNum(num + 1)

  const handleDecrement = () => setNum(num - 1)

  const handleReset = () => setNum(numero)

  return (
    <>
      <h1>Counter app</h1>
      <h2>Este es el numero inicial: {numero}</h2>
      <hr/>
      <p>Voy por el {num}</p>
      <div className="mt-2">
        <button type="button"
        className="btn btn-primary"
        onClick={handleIncrement}>+1</button>
        <button type="button"
        className="btn btn-danger ml-3"
        onClick={handleDecrement}>-1</button>
        <button type="button"
        className="btn btn-warning ml-3"
        onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

CounterApp.propTypes = {
  numero: PropTypes.number.isRequired
}

export default CounterApp
