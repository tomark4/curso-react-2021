import {saludar, saludo, sayHello, diHola, getUser, getUsuarioActivo} from './helpers/funciones';
import Destructuracion from './components/Destructuracion';
import ImportExport from './components/ImportExport';

function App() {
  // VARIABLES
  const nombre = "jose";
  let apellido = "quintero";
  apellido = "hello";

  // OBJETOS
  const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion:{
      street: 'av ppal palo alto',
      city: 'los angeles',
      zipCode: 'avengers'
    }
  }

  // esto no funciona al copiar objecto
  // persona2 = persona
  // se puede hacer de la siguiente manera con el operador spread tres puntos (...)
  const persona2 = { nombre: 'peter', ...persona};
  persona2.nombre = "peter";
  console.log({persona, persona2})

  // ARREGLOS
  const arreglo = new Array(10);
  // no usar el push cuando se copia arrays (USAR SPREAD ...)
  arreglo.push(11);
  const otroArreglo = [...arreglo, 12, 13];

  const arreglo2 = otroArreglo.map( (item) => item ? item * 2 : 'none');

  console.log({arreglo, otroArreglo, arreglo2});

  // FUNCTIONS
  console.log({
    uno: saludar("jose"),
    dos: saludo("peter"),
    tres: sayHello("tony"),
    cuatro: diHola("roger"),
    cinco: getUser(),
    seis: getUsuarioActivo("bruce")
  })

  // DESTRUCTURACION DE OBJETOS

  return (
    <div className="App container" style={{marginTop: "50px"}}>
        Learn React {`${nombre}|${apellido}`}
        <Destructuracion />
        <hr/>
        <ImportExport />
    </div>
  );
}

export default App;
