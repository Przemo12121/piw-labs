function Header(props: { darkMode: boolean}) {
    return (
        <div>
            <h1 className={props.darkMode ? "darkmode-text" : ""}>Rent-a-house</h1>
            <h2 className={props.darkMode ? "darkmode-text" : ""}>by: Przemysław Małecki</h2>
        </div>
    );
}

export default Header;