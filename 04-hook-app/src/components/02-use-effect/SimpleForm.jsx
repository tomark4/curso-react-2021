import {useEffect, useState} from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        email:'',
        name: ''
    });

    const {email, name} = formState;

    /** effect global */
    useEffect(() => {
        console.log("use effect")
    },[]);

    /** effect cuando el form cambia */
    useEffect(() => {
        console.log("Cambio")
    },[formState])

    /** effect cuando el form cambia */
    useEffect(() => {
        console.log("email cambio")
    },[email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    { name === '123' && <Message />}
                    <h2>Simple form</h2>
                    <hr/>
                    <form autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control"
                            name="email"
                            value={email}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={name}
                            onChange={handleInputChange}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SimpleForm
