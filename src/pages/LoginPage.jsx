import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const login = async function(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
            credentials: 'include',
        })
        if(response.ok){
            setRedirect(true)
        } else {
            alert('Wrong Credentials')
        }
    }

    if(redirect){
        return(
            <Navigate to={'/'}></Navigate>
        )
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
}