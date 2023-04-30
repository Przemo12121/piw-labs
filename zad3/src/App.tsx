import { useMemo, useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [ads, setAds] = useState(data);

  const adHolders = useMemo(
    () => ads.map(ad => 
      <div className="ad">
        <div className="ad-text">
          <p>{ad.address.city}, {ad.address.street}</p>
          <p>{ad.description}</p>
          <p className="ad-footer">price: <b>{ad.pricePerMonth}</b>, owner: <b>{ad.owner}, {ad.residentialArea}m2, {ad.sleepingRooms} sleeping rooms</b></p>
        </div>

        <img src={ad.image} alt={ad.image}/>
      </div>
    ), 
    [ads]
  )

  return (
    <div className="App">
      <h1>Rent-a-house</h1>
      <h2>Przemysław Małecki</h2>
      
      <div className="input-container">
        <input placeholder="search" />
        <input placeholder="search" />
        <input placeholder="search" />

        <button>Search</button>
      </div>
      
      <div className="ad-container">
        {adHolders}
      </div>
    </div>
  );
}

export default App;
