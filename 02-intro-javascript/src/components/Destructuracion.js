import React from 'react'

const Destructuracion = () => {

  // DESTRUCTURACION DE OBJETOS
  const persona = {
    nombre: "tony",
    apellido: "stark",
    edad: 45,
    rango: 'captain',
    nickname: 'ironman',
  }

  const { nombre } = persona;

  const muestraPersona = ({nickname, edad, nombre, rango = 'soldier'} ) => {
    return {
      edad,
      nickname,
      nombre,
      address: {
        lat: 14.1235689,
        lng: -12.976546
      }
    }
  }

  const devolverArreglo = () => {
    return ['abc',123];
  }

  const {edad, nickname, address:{lat, lng} } = muestraPersona(persona);

  // DESTRUCTURACION DE ARREGLOS
  const personajes = ['personaje uno','personaje dos','personaje tres'];

  const [ one, two, three ] = personajes;

  console.log(two, three)

  const [ letras, nums] = devolverArreglo();

  console.log({letras, nums})

  const useState = (valor) => {
    return [valor, () => {console.log(valor)}]
  }

  const [valor, setNombre] = useState("jose")

  console.log({valor})

  setNombre();

  return (
    <div>
      <h3>Destructuracion de objectos</h3>
      <h4>nombre {nombre}</h4>
      <p>Edad { edad }</p>
      <p>Nickname { nickname }</p>
      <p>lat { lat }</p>
      <p>lng { lng }</p>
    </div>
  )
}

export default Destructuracion
