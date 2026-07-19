const API_URL = "https://pathx-backend.onrender.com/api/traffic";

export async function getTraffic() {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch traffic.");
  }

  return await response.json();
}