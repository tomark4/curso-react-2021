import React, {useEffect, useState} from 'react';
import {HEROES} from '../data/heroes'
import { fetchFakeApi, funcionAsync } from '../helpers/promesas';

const ImportExport = () => {
  const myHeroes = HEROES;

  const getHeroeById = (id) => myHeroes.find( (heroe) => heroe.id === id)

  const getHeroeByOwner = (owner) => myHeroes.filter( heroe => heroe.owner === owner);

  const {id, name, owner} = getHeroeById(3);

  const marvel = getHeroeByOwner('Marvel');

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    fetchFakeApi(50)
    .then( res => console.log(res) )
    .catch( console.error );

    // fetch API
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( resp => resp.json() )
    .then( data => setTodos(data) )
    .catch( console.error );

    async function test(){
      try{
        const res = await funcionAsync();
        console.log(res);
      } catch(err){
        console.error(err)
      }
    }

    test();
  },[])

  return (
    <div>
      <h3>Import y export</h3>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>owner: {owner}</p>
      <pre>
        {JSON.stringify(marvel)}
      </pre>

      <ul className="list-group">
        {todos.map( ({id, title}) => (
          <li key={id} className="list-group-item">
            <p>id: {id}</p>
            <p>title: {title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImportExport
