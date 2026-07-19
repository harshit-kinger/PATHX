import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

function DestinationInput() {
  const { destination, setDestination } = useContext(NavigationContext);

  return (
    <Card
      title="Destination"
      subtitle="Select the emergency destination"
    >
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination..."
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-slate-800
          px-4
          py-3
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-blue-500
        "
      />
    </Card>
  );
}

export default DestinationInput;