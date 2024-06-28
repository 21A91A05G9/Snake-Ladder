import React, { useState } from 'react';
import $ from 'jquery';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.png'
export default function Register() {
    const nav = useNavigate();
    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleReg = (e) => {
        e.preventDefault();
        const form = $(e.target);
        if(formdata.username === ''){
            alert("Enter Usernmae ...!");
        }
        else if(formdata.password === ''){
            alert("Enter Password ...!");
        }
        else if(formdata.email === ''){
            alert("Enter Email ...!");
        }
        else{
            const formDataSerialized = form.serialize() + "&submit=submit";
    
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: formDataSerialized,
                dataType: "json", 
                success: (response) => {
                    if (response.status === "Success") {
                        nav('/login');
                    } else {
                        alert(response.message);
                    }
                },
                error: (xhr, status, error) => {
                    alert("Error occurred during register.");
                }
            });
            
        }
       
    };

    // const handleSuccess = (response) => {
    //     const token = response.credential;
    //     const decoded = jwtDecode(token);

    //     // Extract necessary details from the decoded token
    //     const { email, name } = decoded;

    //     // Send token and user details to your backend for verification and further processing
    //     fetch('http://localhost/snake&ladder/index.php', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ token, email, name }),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.status === 'success') {
    //             navigate('/dashboard');
    //         } else {
    //             console.error('Error:', data.message);
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // };

    // const handleFailure = (error) => {
    //     console.error('Login Failed:', error);
    // };

    return (
        <div className='container-fluid main'>
            
            <div className="logo row mt-5">
            <div className='col-md-2 col-sm-3 col-xs-3 col-lg-2  col-offset-md-2'></div>
            <img className='col-md-8 col-sm-6 col-xs-6 col-lg-8 ' src={Logo} alt='Logo'/>
            </div>
            <div className='container login'>
                <div className="card mb-3">
                    <div className='header mb-3'>Register here</div>
                    <div className="container-fluid">
                        <form onSubmit={handleReg} method='post' action='http://localhost/snake&ladder/index.php' className='mt-3'>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input type="text" name="username" placeholder="Username" onChange={(e) => setFormdata({ ...formdata, username: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input type="email" name="email" placeholder="Email" onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-sm-12">
                                    <input type="password" name="password" placeholder="Password" onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
                                </div>
                            </div>
                            <div className='text-center mb-2'>
                                <button type="submit" className="btn btn-light col-sm-12">Register</button>
                            </div>
                            
                            <div className='text-center mt-1'>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>

                            <div className='text-center mb-2'>
                            {/* <GoogleOAuthProvider clientId={clientId}>
                                <GoogleLogin
                                    onSuccess={handleSuccess}
                                    onError={handleFailure}
                                /> */}
                            {/* </GoogleOAuthProvider> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

