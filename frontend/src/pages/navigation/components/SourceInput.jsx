import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

function SourceInput() {
  const { source, setSource } = useContext(NavigationContext);

  return (
    <Card
      title="Source Location"
      subtitle="Select the emergency starting point"
    >
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Enter source location..."
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

export default SourceInput;