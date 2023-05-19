import { useContext } from 'react';
import UserContext from '../context/UserContext';

type Props = {
  darkMode: boolean
  onLogout: () => void
}

function Header(props: Props) {
    const user = useContext(UserContext);

    return (
        <div>
            <h1 className={props.darkMode ? "darkmode-text" : ""}>Rent-a-house</h1>
            <h2 className={props.darkMode ? "darkmode-text" : ""}>by (context):       {`${user!.firstName} ${user!.lastName}`}</h2>
            <h2 className={props.darkMode ? "darkmode-text" : ""}>by (local storage): {`${user!.firstName} ${user!.lastName}`}</h2>
            <button onClick={props.onLogout}>Logout</button>
        </div>
    );
}

export default Header;