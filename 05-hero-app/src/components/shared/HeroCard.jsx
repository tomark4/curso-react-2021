import {Link} from 'react-router-dom';

const HeroCard = ({heroe}) => {
    const { id, superhero, alter_ego, characters, first_appearance } = heroe;
    return (
        <>
            <div className="card ms-3" style={{ maxWidth: '540px'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`./assets/img/heroes/heroes/${id}.jpg`} alt={superhero}
                        className='card-img' />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5>{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        { alter_ego !== characters &&
                            <p className="card-text">{characters}</p>
                        }
                        <p className="text-muted">{first_appearance}</p>
                        <Link to={`/heroe/${id}`} className="btn btn-outline-success" >
                            Ver más
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroCard
