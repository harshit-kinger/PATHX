const API_URL = "http://localhost:5000/api/traffic/heatmap";

export async function getTrafficHeatmap() {

    const response = await fetch(API_URL);

    if (!response.ok) {

        throw new Error("Unable to fetch traffic heatmap.");

    }

    return await response.json();

}