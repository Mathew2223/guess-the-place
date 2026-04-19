import { useState } from 'react';
import './Login.css';
import { useAuth } from './AuthContext';
import { useLocation, useNavigate } from 'react-router';

export default function Login() {
    const [username, setUsername] = useState('');
    const  { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const fromPath = location.state?.from || "/guess-the-place";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            login(username);
            navigate(fromPath, { replace: true });
        }
    }

    return (
        <div className="login-wrapper">
            <h1 className="login-title">Введите логин и пароль</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        name="user_login"
                        placeholder="Ranalda_7"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div className="input-group">
                    <label htmlFor="passwords">Password:</label>
                    <input type="password" id="passwords" name="user_password" placeholder="•••••" />
                </div>
                
                <button type="submit" className="submit-btn">Отправить</button>
            </form>
        </div>
    )
}