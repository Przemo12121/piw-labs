type Props = {
    darkMode: boolean;
    ascending: boolean;
    setAscending: (value: boolean) => void;
};

function OrderButtons(props: Props) {
    return (
        <div className={`input-container ${props.darkMode ? "darkmode-text" : ""}`}>
            <button onClick={() => props.setAscending(false)} className={!props.ascending ? "clicked" : ""}>Ascending</button>
            <button onClick={() => props.setAscending(true)} className={props.ascending ? "clicked" : ""}>Descending</button>
        </div>
    );
}

export default OrderButtons;