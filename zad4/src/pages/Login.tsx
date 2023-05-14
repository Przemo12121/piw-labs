import { useEffect, useState } from "react";
import { login } from "../login";
import { Account } from "../types";

type Props = {
  onLogin: (user: Account) => void
}

function Login(props: Props) {
    document.body.style.backgroundColor = "wheat";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false)

    const handleClick = async () => {
        const account = await login({
            email: email,
            password: password
        })

        if (account) {
            props.onLogin(account)
        } else {
            setIsError(true)
        }
    }

    useEffect(() => setIsError(false), [email, password])

    return (
        <div className="sign-in-main">
            <div className="sign-in-input-container">
                <input placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
                <input placeholder="password" onChange={(event) => setPassword(event.target.value)}></input>
                <button onClick={handleClick}>Login</button>
                <p className="error-message">
                    {
                        isError ? "Invalid credentials." : ""
                    }
                </p>
            </div>
        </div>
    );
}

export default Login