import PrimeraApp from './components/PrimeraApp';
import CounterApp from './components/CounterApp'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PrimeraApp name="peter"/>
          <CounterApp numero={10} />
        </div>
      </div>
    </div>
  );
}

export default App;
