import { useContext } from 'react';
import "../App.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Account } from "../types";
import UserContext from "../context/UserContext";
import { useLocalStorage } from '../hooks/useLocalStorage';

type Props = {
    onLogin: (user: Account) => void
    onLogout: () => void
}

function PageRouter(props: Props) {
    const user = useContext(UserContext);
    const storage = useLocalStorage();

    // ponizej podwojne sprawdzenie, zeby pokazac skutecznosc obu mechanizmow
    return (
        user && storage.read() ? <Home onLogout={props.onLogout}/> : <Login onLogin={props.onLogin}/>
    );
}

export default PageRouter;
