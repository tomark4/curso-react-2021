// function normal
export function saludar(nombre){
  return `Hola, ${nombre}`;
}

// function con const
export const saludo = function(nombre) {
  return `Hola, ${nombre}`;
}

// arrow function
export const sayHello = (name) =>  `Hola, ${name}`

export const diHola = (nombre) => {
  return `Hola, ${nombre}`;
}

// si solo se devuelve el objeto se puede usar parentesis y quitar el return
export const getUser = () => (
  {uid: 3, name: 'joseph'}
)

export const getUsuarioActivo = (name) => ({
    uid: 1,
    username: name
})
