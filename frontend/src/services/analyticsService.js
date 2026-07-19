const API_URL = "http://localhost:5000/api/analytics";

export async function getAnalytics() {

    const response = await fetch(API_URL);

    if (!response.ok) {

        throw new Error("Unable to fetch analytics.");

    }

    return await response.json();

}