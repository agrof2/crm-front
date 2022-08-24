import React, { useState } from 'react'

function ConsultaPessoaForm({ Login, error }) {
    const [details, setDetails] = useState({ login: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {error ? ( <div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor='login'>Login:</label>
                    <input type="email" name="login" id="login" onChange={e => setDetails({...details, login: e.target.value})} value={details.login} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Senha:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type={"submit"} value="Login" />
            </div>
        </form>
    )
}

export default LoginForm