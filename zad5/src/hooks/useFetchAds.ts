import { Ad } from "../types"

export async function useFetchAds(): Promise<Ad[]> {
    const ads = await fetch("data/ads.json")

    return ads.json()
}