import React from 'react'
import './login.css';

const LoginScreen = () => {
    return (
        <div className="container">

            <div className="row">
                <div className="col s12 m6">
                    <div className="row mt-5" style={{padding:"40px"}}>
                        <h3 className="mb-5">Login</h3>
                        <form autoComplete="off">
                            <div className="input-field">
                                <input type="text" name="email" placeholder="Email"
                                id="email"/>
                            </div>
                            <div className="input-fiele">
                                <input type="password" name="password" placeholder="Password"
                                id="password"/>
                            </div>
                            <div className="input-field">
                                <button type="submit" className="btn indigo accent-3"
                                style={{ width:"100%"}}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="row" style={{padding:"40px"}}>
                        <h3 className="mb-5">Register</h3>
                        <form className="col s12" autoComplete="off">
                            <div className="row">
                                <div className="input-field col s12 m6">
                                    <input placeholder="First name" id="first_name" type="text" className="validate" />
                                </div>
                                <div className="input-field col s12 m6">
                                    <input id="last_name" type="text" placeholder="Last name"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="row">
                                <button
                                className="btn indigo accent-3"
                                type="submit"
                                style={{width:"100%"}}
                                name="action">Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
