import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Account } from "./types";
import UserContext from "./context/UserContext";
import PageRouter from "./pages/PageRouter";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const storage = useLocalStorage();
    const [user, setUser] = useState<Account | null>(null);

    useEffect(() => {
        setUser(storage.read());
    }, []);

    return (
        <UserContext.Provider value={user}>
            <PageRouter 
                onLogin={(user) => {
                    storage.save(user);
                    setUser(user);
                }}
                onLogout={() => {
                    storage.clear();
                    setUser(null);
                }}
            />
        </UserContext.Provider>
    );
}

export default App;
