import { useCallback } from 'react';
import { logout, useUser } from '../firebase/AuthService';

type Props = {
  darkMode: boolean
}

function Header(props: Props) {
    const user = useUser();

    const handleClick = useCallback(async () => {
      await logout();
    }, []);
    console.log({ user })
    return (
        <div>
            <h1 className={props.darkMode ? "darkmode-text" : ""}>Rent-a-house</h1>
            <h2 className={props.darkMode ? "darkmode-text" : ""}>logged in as: {user?.displayName ?? user?.email}</h2>
            <h2 className={props.darkMode ? "darkmode-text" : ""}>logged in with: {user?.providerData[0].providerId}</h2>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Header;