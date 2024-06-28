import React, { useState } from 'react';
import $ from 'jquery';
import { Link, useNavigate } from 'react-router-dom';

import Logo from './images/logo.png';

export default function Login() {
    const nav = useNavigate();
    const [logindata, setLogindata] = useState({
        username: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const form = $(e.target);
        const formDataSerialized = form.serialize() + "&submit=submit";

        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: formDataSerialized,
            dataType: "json", 
            success: (response) => {
                if (response.status === "Success") {
                    nav('/main');
                } else {
                    alert(response.message);
                }
            },
            error: (xhr, status, error) => {
                alert("Error occurred during login.");
            }
        });
    };

    return (
        <div className='container-fluid main'>
            <div className="logo row mt-5">
                <div className='col-md-2 col-sm-3 col-xs-3 col-lg-2  col-offset-md-2'></div>
                <img className='col-md-8 col-sm-6 col-xs-6 col-lg-8 ' src={Logo} alt='Logo'/>
            </div>
            <div className='container login'>
                <div className="card mb-3">
                    <div className='header mb-3'>Login here</div>
                    <div className="container-fluid">
                        <form onSubmit={handleLogin} method='post' action='http://localhost/snake&ladder/home.php' className='mt-3'>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input type="text" name="username" placeholder="Username" onChange={(e) => setLogindata({ ...logindata, username: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-sm-12">
                                    <input type="password" name="password" placeholder="Password" onChange={(e) => setLogindata({ ...logindata, password: e.target.value })} />
                                </div>
                            </div>
                            <div className='text-center mb-2'>
                                <button type="submit" className="btn btn-light btn-sm">Login</button>
                            </div>
                            <div className='text-center mt-1'>
                                <p>Don't have an account? <Link to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
