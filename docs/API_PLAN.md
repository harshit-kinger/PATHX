# PATHX API Plan

---

## Route Optimization API

### Endpoint

POST /api/routes/optimize

### Purpose

Calculates the optimal emergency route based on the selected algorithm and optimization strategy.

---

### Request Body

```json
{
  "source": "Sector 17, Chandigarh",
  "destination": "PGIMER Hospital",
  "emergencyType": "ambulance",
  "algorithm": "dijkstra",
  "optimization": "fastest"
}
```

---

### Success Response

```json
{
  "success": true,
  "route": {
    "distance": "8.4 km",
    "estimatedTime": "12 min",
    "algorithm": "Dijkstra",
    "trafficStatus": "Moderate",
    "path": [
      "Sector 17",
      "Sector 16",
      "PGIMER"
    ]
  }
}
```

---

### Error Response

```json
{
  "success": false,
  "message": "Route could not be calculated."
}
```

---

### Future Improvements

- Live traffic integration
- Multiple route suggestions
- ETA prediction
- Ambulance priority routing
- Route replay