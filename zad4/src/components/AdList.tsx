import { useMemo } from "react";
import AdHolder from "./AdHolder";
import { Ad } from "../types";

type Props = {
    darkMode: boolean;
    ads: Ad[];
    ascending: boolean;
}

function AdList(props: Props) {
    const adHolders = useMemo(
        () => props.ads.sort(
          (a, b) => props.ascending ? a.pricePerMonth - b.pricePerMonth : b.pricePerMonth - a.pricePerMonth
        ).map(ad => <AdHolder ad={ad} darkMode={props.darkMode} />), 
        [props]
    );

    return (
        <div className={`ad-container  ${props.darkMode ? "darkmode-text" : ""}`}>
            {adHolders}
        </div>
    );
}

export default AdList;