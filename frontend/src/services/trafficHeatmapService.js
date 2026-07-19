const API_URL = "https://pathx-backend.onrender.com/api/traffic/heatmap";

export async function getTrafficHeatmap() {

    const response = await fetch(API_URL);

    if (!response.ok) {

        throw new Error("Unable to fetch traffic heatmap.");

    }

    return await response.json();

}