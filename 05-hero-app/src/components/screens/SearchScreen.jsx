import { useState, useEffect } from "react";
import HeroCard from "../shared/HeroCard";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeoresByName } from "../../selectors/getHeroesByName";

const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(q);

    useEffect(() => {
        setData(getHeoresByName(q));
    },[q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("?q="+search);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-5">
                    <h4>Search form</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                            name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary btn-block">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-7">
                    <h4>Heroes</h4>
                    <hr/>
                    {data.length === 0 &&
                        <div className="alert alert-danger">
                            No hay data
                        </div>
                    }
                    {data.map( item => (
                        <div className="my-2" key={item.id}>
                            <HeroCard heroe={item}
                           />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
