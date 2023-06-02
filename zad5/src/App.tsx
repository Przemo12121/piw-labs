import { useMemo } from 'react';
import "./App.css";
import { useUser } from './firebase/AuthService';
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    const user = useUser();

    const isLoggedIn = useMemo(() => user !== null , [user]);

    return (
        isLoggedIn ? <Home/> : <Login/>
    );
}

export default App;
