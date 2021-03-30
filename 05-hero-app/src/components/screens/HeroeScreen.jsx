import { useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById'
import { Redirect } from 'react-router-dom';
import { useMemo } from 'react';

const HeroeScreen = ({history}) => {

    const {id} = useParams();

    const heroe = useMemo( () => getHeroesById(id), [id]);


    const handleReturn = () => {
        if(history.length <= 2){
            history.push("/")
        } else{
            history.goBack()
        }
    }

    if(!heroe){
        return <Redirect to="/" />;
    }

    const {superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = heroe;

    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img src={`../assets/img/heroes/heroes/${id}.jpg`} alt=""
                className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>
            <div className="col-md-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Alter ego: {alter_ego}</li>
                    <li className="list-group-item">Publisher: {publisher}</li>
                    <li className="list-group-item">First appereance: {first_appearance}</li>
                </ul>

                <h5 className="mt-5">Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-success"
                onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    )
}

export default HeroeScreen
