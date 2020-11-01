import React, { Fragment, useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, name: e.target.value});

    return <Fragment>
        <h1>REGISTER</h1>
        <form className="p-5 m-5">
            <div className="form-group">
                <label for="name1">Name</label>
                <input type="text" className="form-control" id="name1" value='name'
                    onChange={e => onChange(e)} placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value='email' placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value='password' placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </Fragment>
}

export default Register
