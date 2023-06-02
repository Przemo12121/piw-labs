type Props = {
    darkMode: boolean;
    citySearch: string;
    roomsSearch: string;
    descriptionSearch: string;
    setCitySearch: (value: string) => void;
    setDescriptionSearch: (value: string) => void;
    setRoomsSearch: (value: string) => void;
    filter: () => void;
};

function Inputs(props: Props) {
    return (
        <div className={`input-container ${props.darkMode ? "darkmode-text" : ""}`}>
            <span>
                City: <input placeholder="Search city" value={props.citySearch} onChange={(e) => props.setCitySearch(e.target.value)} />
            </span>
            <span>
                Sleep rooms: <input placeholder="Search sleeping rooms" value={props.roomsSearch} onChange={(e) => props.setRoomsSearch(e.target.value)} />
            </span>
            <span>
                Description: <input placeholder="Search description" value={props.descriptionSearch} onChange={(e) => props.setDescriptionSearch(e.target.value)} />
            </span>

            <button onClick={props.filter}>Search</button>
        </div>
    );
}

export default Inputs;