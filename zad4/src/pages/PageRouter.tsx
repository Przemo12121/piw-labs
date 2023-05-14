import { useContext } from 'react';
import "../App.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Account } from "../types";
import UserContext from "../context/UserContext";

type Props = {
    onLogin: (user: Account) => void
    onLogout: () => void
}

function PageRouter(props: Props) {
    const user = useContext(UserContext)

    return (
        user ? <Home onLogout={props.onLogout}/> : <Login onLogin={props.onLogin}/>
    );
}

export default PageRouter;
