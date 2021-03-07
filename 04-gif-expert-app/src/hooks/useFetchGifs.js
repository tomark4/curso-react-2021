import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category)
    .then( imgs => setGifs({loading: false, data: imgs}))
    .catch(err => console.log(err));
  }, [category]);

  return gifs;
}
