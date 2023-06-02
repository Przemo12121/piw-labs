type Props = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

function DarkmodeButtons(props: Props) {
    return (
        <div className={`input-container ${props.darkMode ? "darkmode-text" : ""}`}>
            <button onClick={() => props.setDarkMode(false)} className={!props.darkMode ? "clicked" : ""}>Light mode</button>
            <button onClick={() => props.setDarkMode(true)} className={props.darkMode ? "clicked" : ""}>Dark mode</button>
        </div>
    );
}

export default DarkmodeButtons;