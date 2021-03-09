import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const MultipleCustomHooks = () => {
    const {state, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author, quote} = (!loading && data.length > 0) && data[0]

    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col">
                        <h3>Breaking bad</h3>
                        <hr/>
                        { loading ? (
                            <div className="alert alert-info">Loading...</div>
                        ) : (
                            <>
                                <blockquote className="blockquote text-right">
                                    <p className="mb-0">{quote}</p>
                                </blockquote>

                                <footer className="blockquote-footer text-right">{author}</footer>
                            </>
                        )}

                        <button className="btn btn-primary"
                        type="button" onClick={increment}>Next quote</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleCustomHooks
