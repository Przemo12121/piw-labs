import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Header from "./components/Header";
import DarkmodeButtons from "./components/DarkmodeButtons";
import Inputs from "./components/Inputs";
import OrderButtons from "./components/OrderButtons";
import AdList from "./components/AdList";

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [roomsSearch, setRoomsSearch] = useState("");
  const [descriptionSearch, setDescriptionSearch] = useState("");
  const [ads, setAds] = useState(data);
  const [ascending, setAscending] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const filter = () => {
    let filtered = data;

    if (citySearch) {
      filtered = filtered.filter(
        ad => ad.address.city.toLowerCase().includes(citySearch.toLowerCase())
      );
    }
    if (descriptionSearch) {
      filtered = filtered.filter(
        ad => ad.description.toLowerCase().includes(descriptionSearch.toLowerCase())
      );
    }
    if (roomsSearch) {
      filtered = filtered.filter(
        ad => ad.sleepingRooms === Number.parseInt(roomsSearch)
      );
    }

    setAds(filtered);
  }

  document.body.style.backgroundColor = darkMode ? "#4d4d4d" : "wheat";

  return (
    <div className="App">
      <Header darkMode={darkMode} />
      
      <DarkmodeButtons darkMode={darkMode} setDarkMode={setDarkMode} />

      <Inputs
        darkMode={darkMode}
        citySearch={citySearch} 
        roomsSearch={roomsSearch} 
        descriptionSearch={descriptionSearch} 
        setCitySearch={setCitySearch}
        setRoomsSearch={setRoomsSearch}
        setDescriptionSearch={setDescriptionSearch}
        filter={filter}
      />

      <OrderButtons darkMode={darkMode} setAscending={setAscending} ascending={ascending} />
      
      <AdList ads={ads} darkMode={darkMode} ascending={ascending} />
    </div>
  );
}

export default App;
