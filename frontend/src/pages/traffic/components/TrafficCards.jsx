import { useEffect, useState } from "react";
import MetricCard from "../../../components/common/MetricCard";
import { getTraffic } from "../../../services/trafficService";

function TrafficCards() {

  const [traffic, setTraffic] = useState(null);

  useEffect(() => {

    async function loadTraffic() {

      const data = await getTraffic();

      setTraffic(data.traffic);
    }

    loadTraffic();

  }, []);

  if (!traffic)
    return <p className="text-slate-400">Loading traffic...</p>;

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Low Traffic"
        value={traffic.low}
      />

      <MetricCard
        title="Moderate"
        value={traffic.moderate}
      />

      <MetricCard
        title="Heavy"
        value={traffic.heavy}
      />

      <MetricCard
        title="Closed Roads"
        value={traffic.closed}
      />

    </div>

  );

}

export default TrafficCards;