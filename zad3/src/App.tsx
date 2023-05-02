import { useMemo, useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [roomsSearch, setRoomsSearch] = useState("");
  const [descriptionSearch, setDescriptionSearch] = useState("");
  const [ads, setAds] = useState(data);

  const filter = () => {
    let filtered = data;

    if (citySearch) {
      filtered = data.filter(
        ad => ad.address.city.toLowerCase().includes(citySearch.toLowerCase())
      );
    }
    if (descriptionSearch) {
      filtered = data.filter(
        ad => ad.description.toLowerCase().includes(descriptionSearch.toLowerCase())
      );
    }
    if (roomsSearch) {
      filtered = data.filter(
        ad => ad.sleepingRooms === Number.parseInt(roomsSearch)
      );
    }

    setAds(filtered);
  }

  const adHolders = useMemo(
    () => ads.map(ad => 
      <div className="ad">
        <div className="ad-text">
          <p>{ad.address.city}, {ad.address.street}</p>
          <p>{ad.description}</p>
          <p className="ad-footer">
            price: <b>{ad.pricePerMonth}</b>, owner: <b>{ad.owner}</b>, params: {ad.residentialArea}m2, {ad.sleepingRooms} sleeping rooms
          </p>
        </div>

        <img src={ad.image} alt={ad.image}/>
      </div>
    ), 
    [ads]
  )

  return (
    <div className="App">
      <div>
        <h1>Rent-a-house</h1>
        <h2>by: Przemysław Małecki</h2>
      </div>
      
      <div className="input-container">
        <span>
          City: <input placeholder="search" onChange={(e) => setCitySearch(e.target.value)} />
        </span>
        <span>
          Sleep rooms: <input placeholder="search" onChange={(e) => setRoomsSearch(e.target.value)} />
        </span>
        <span>
          Description: <input placeholder="search" onChange={(e) => setDescriptionSearch(e.target.value)} />
        </span>

        <button onClick={filter}>Search</button>
      </div>

      <div className="input-container">
        Order by price:
        <button>ascending</button>
        <button>descending</button>
      </div>
      
      <div className="ad-container">
        {adHolders}
      </div>
    </div>
  );
}

export default App;
