import { useContext, useEffect, useMemo, useState } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import { getTrafficHeatmap } from "../../../services/trafficHeatmapService";

import "leaflet/dist/leaflet.css";

/* ===========================
   Auto Fit
=========================== */

function FitBounds({ coordinates }) {

  const map = useMap();

  useMemo(() => {

    if (coordinates.length > 1) {

      map.fitBounds(coordinates, {

        padding: [60, 60],

      });

    }

  }, [coordinates, map]);

  return null;

}

/* ===========================
   Icons
=========================== */

const startIcon = new L.Icon({

  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],

  iconAnchor: [12, 41],

});

const endIcon = new L.Icon({

  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],

  iconAnchor: [12, 41],

});

const normalIcon = new L.Icon({

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],

  iconAnchor: [12, 41],

});

const ambulanceIcon = new L.DivIcon({

  html: `
    <div style="
      font-size:30px;
      animation:bounce 1s infinite;
    ">
      🚑
    </div>
  `,

  className: ""

});

function RouteMap() {

  const {

    routeResult,

    currentReplayNode,

    isReplayRunning

  } = useContext(NavigationContext);

  const [traffic, setTraffic] = useState([]);

  useEffect(() => {

    async function loadTraffic() {

      try {

        const data = await getTrafficHeatmap();

        setTraffic(data.traffic);

      }

      catch (err) {

        console.error(err);

      }

    }

    loadTraffic();

  }, []);

  const coordinates =

    routeResult?.path?.map(node => [

      node.latitude,

      node.longitude,

    ])

    ||

    [

      [30.7333, 76.7794],

      [30.7465, 76.7680]

    ];

  const getColor = (severity) => {

    switch (severity) {

      case "Low":

        return "#22c55e";

      case "Moderate":

        return "#facc15";

      case "Heavy":

        return "#f97316";

      case "Blocked":

        return "#ef4444";

      default:

        return "#3b82f6";

    }

  };

  return (

    <Card

      title="Live Route Map"

      subtitle="Emergency navigation with replay engine"

    >

      <div className="h-[430px] overflow-hidden rounded-xl">

        <MapContainer

          center={coordinates[0]}

          zoom={13}

          scrollWheelZoom

          className="h-full w-full"

        >

          <TileLayer

            attribution="&copy; OpenStreetMap contributors"

            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

          />

          <FitBounds coordinates={coordinates} />

          {/* Route Nodes */}

          {

            routeResult?.path?.map((node, index) => (

              <Marker

                key={node.id}

                position={[

                  node.latitude,

                  node.longitude

                ]}

                icon={

                  index === 0

                    ? startIcon

                    : index === routeResult.path.length - 1

                    ? endIcon

                    : normalIcon

                }

              >

                <Popup>

                  <strong>{node.name}</strong>

                  <br />

                  {node.type}

                </Popup>

              </Marker>

            ))

          }

          {/* Ambulance */}

          {

            routeResult && (

              <Marker

                position={[

                  routeResult.path[currentReplayNode].latitude,

                  routeResult.path[currentReplayNode].longitude

                ]}

                icon={ambulanceIcon}

              >

                <Popup>

                  🚑 Emergency Vehicle

                  <br />

                  {

                    isReplayRunning

                    ?

                    "Currently Moving"

                    :

                    "Paused"

                  }

                </Popup>

              </Marker>

            )

          }

          {/* Route */}

          <Polyline

            positions={coordinates}

            pathOptions={{

              color:"#2563eb",

              weight:7,

              opacity:0.9

            }}

          />

          {/* Traffic */}

          {

            traffic.map(point=>(

              <CircleMarker

                key={point.id}

                center={[

                  point.latitude,

                  point.longitude

                ]}

                radius={12}

                pathOptions={{

                  color:getColor(point.severity),

                  fillColor:getColor(point.severity),

                  fillOpacity:0.7

                }}

              >

                <Popup>

                  <strong>

                    {point.location}

                  </strong>

                  <br />

                  {point.severity}

                </Popup>

              </CircleMarker>

            ))

          }

        </MapContainer>

      </div>

    </Card>

  );

}

export default RouteMap;