import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Account } from "./types";
import UserContext from "./context/UserContext";
import PageRouter from "./pages/PageRouter";

function App() {
    const [user, setUser] = useState<Account | null>(null)

    return (
        <UserContext.Provider value={user}>
            <PageRouter 
                onLogin={(user) => setUser(user)}
                onLogout={() => setUser(null)}
            />
        </UserContext.Provider>
    );
}

export default App;
