import useForm from '../../hooks/useForm';
import {useEffect} from 'react'

const FormWithCustomHooks = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {email, name, password} = values;

    useEffect(() => {
        console.log(email)
    },[email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h2>Form with custom hooks </h2>
                    <hr/>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={name}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control"
                            name="email"
                            value={email}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="password" className="form-control"
                            name="password"
                            value={password}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormWithCustomHooks
