import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner inner-top mt-5">
                    <h1 className="x-large"><i className="fas fa-pen"></i> WRITE RIGHT</h1>
                    <p className="lead">
                        A platform where you can share your written collections with our fellows who share same passion as
                        you.
                    </p>
                </div>
                <div className="landing-inner">
                    <form className="login-form">
                        <h1>Login</h1>
                        <div className="form-group">
                            <i className="fas fa-user"></i>
                            <input className='form-control' type="text" name="username" placeholder="Username" required/>    
                        </div>
                        <div className="form-group">
                            <i className="fas fa-lock"></i>
                            <input className='form-control' type="password" name="password" placeholder="Password" required/>
                        </div>
                        <div className="buttons">
                            <input className='btn btn-primary mr-2' type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
    </section>
    )
}

export default Landing
