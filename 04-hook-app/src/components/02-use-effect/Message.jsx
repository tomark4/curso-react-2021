import {useEffect, useState} from 'react'

const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0})
  const {x,y} = coords;
  useEffect(() => {
      const mouseMove = (e) => {
        const coords = { x: e.x, y: e.y };
        setCoords(coords);
      }

      window.addEventListener('mousemove', mouseMove);
      console.log("Componet message montado");

    return () => {
      console.log("Componente desmontado")
      window.removeEventListener('mousemove',mouseMove);
    };

  }, []);

  return (
    <>
     <p>Hello world!</p>
     <p>{x} - {y}</p>
    </>
  )
}

export default Message
