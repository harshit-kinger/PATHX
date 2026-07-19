const API_URL = "https://pathx-backend.onrender.com/api/emergency";

export async function getEmergencyStatus() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Unable to fetch emergency data.");
    }

    return await response.json();
}