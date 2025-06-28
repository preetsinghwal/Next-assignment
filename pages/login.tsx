import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter()

    const handleLogin = async () => {
        document.cookie = 'auth_token=valid-token; path=/'
        router.push('/dashboard');
    }

    return (
        <div className="wrapper">
            <h1>Welcome to Login Page</h1>
            <button className="primary-btn" onClick={handleLogin}>Click to Login</button>
        </div>
    )
}