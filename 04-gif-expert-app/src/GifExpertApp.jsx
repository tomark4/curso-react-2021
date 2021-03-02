import AddCategory from "./components/AddCategory";
import {useState} from 'react'
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Dragon ball" },
  ]);

  const handleAdd = (name) => {
    const lastItem = categories[categories.length - 1];
    setCategories([
      ...categories,
      { id: lastItem.id + 1, name },
    ]);
  };

  return (
    <>
      <h2>Soy la gif expert app</h2>
      <AddCategory onAdd={ handleAdd }/>
      <hr />
      {categories.map( ({id, name}) => (
          <GifGrid name={name} key={id} />
      ))}
    </>
  );
};

export default GifExpertApp;
