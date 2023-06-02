import { useCallback } from "react";
import { logInWithGithub, logInWithGoogle } from "../firebase/AuthService";

function Login() {
    document.body.style.backgroundColor = "wheat";
    
    const handleGoogleClick = useCallback(async () => {
      await logInWithGoogle();
    }, []);

    const handleGithubClick = useCallback(async () => {
      await logInWithGithub();
    }, []);

    return (
        <div className="sign-in-main">
            <div className="sign-in-input-container">
                <button onClick={handleGoogleClick}>Login with google</button>
                <button onClick={handleGithubClick}>Login with github</button>
            </div>
        </div>
    );
}

export default Login;