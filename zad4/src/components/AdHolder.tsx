import { Ad } from "../types";

type Props = { 
    ad: Ad;
    darkMode: boolean;
};

function AdHolder(props: Props) {
    return (
        <div className={`ad ${props.darkMode ? "darkmode-ad" : ""}`}>
            <div className="ad-text">
                <p>{props.ad.address.city}, {props.ad.address.street}</p>
                <p>{props.ad.description}</p>
                <p className="ad-footer">
                    price: <b>{props.ad.pricePerMonth}</b>, owner: <b>{props.ad.owner}</b>, params: {props.ad.residentialArea}m2, {props.ad.sleepingRooms} sleeping rooms
                </p>
            </div>
        
            <img src={props.ad.image} alt={props.ad.image}/>
        </div>
    );
}

export default AdHolder;