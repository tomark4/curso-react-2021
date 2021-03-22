import { useRef, useEffect, useState } from "react"

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({data: [], loading: true, error: null});

  useEffect(() => {
    return () => { isMounted.current = false; }
  },[]);

  useEffect(() => {
    setState({data:[],error: null, loading: true});

    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
      if(isMounted.current){
        setState({
          data,
          loading: false,
          error: null,
        })
      }
    })
    .catch( err => {
      setState({
        data: [],
        loading: false,
        error: 'no se pudo cargar la info'
      })
    });
  },[url])

  return state;
}

export default useFetch
