const API_URL = "http://localhost:5000/api/traffic";

export async function getTraffic() {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch traffic.");
  }

  return await response.json();
}