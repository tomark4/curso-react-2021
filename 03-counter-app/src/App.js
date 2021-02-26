import PrimeraApp from './components/PrimeraApp';
import CounterApp from './components/CounterApp'
import {getTodos} from './helpers/heroes'
import {  useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(resp => {
      setTodos(resp)
    }).catch(err => console.log(err));
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PrimeraApp name="peter"/>
          <CounterApp numero={10} />
          <ul class="list-group mt-5">
            {todos.map(item => (
              <li className="list-group-item">{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
