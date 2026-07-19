const API_URL = "https://pathx-backend.onrender.com/api/analytics";

export async function getAnalytics() {

    const response = await fetch(API_URL);

    if (!response.ok) {

        throw new Error("Unable to fetch analytics.");

    }

    return await response.json();

}