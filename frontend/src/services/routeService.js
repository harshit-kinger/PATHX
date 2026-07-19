const API_URL = "http://localhost:5000/api/routes/optimize";

export async function optimizeRoute(payload) {

    const response = await fetch(API_URL, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(payload)

    });

    if (!response.ok) {

        throw new Error("Unable to calculate route.");

    }

    return await response.json();

}