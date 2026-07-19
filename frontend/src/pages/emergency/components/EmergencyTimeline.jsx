import Card from "../../../components/common/Card";
import {
  PhoneCall,
  Brain,
  Route,
  Ambulance,
  CheckCircle2,
} from "lucide-react";

const timeline = [

  {
    time: "11:42 AM",
    icon: PhoneCall,
    title: "Emergency Received",
    color: "text-red-400",
  },

  {
    time: "11:42 AM",
    icon: Brain,
    title: "Best Algorithm Selected",
    color: "text-blue-400",
  },

  {
    time: "11:43 AM",
    icon: Route,
    title: "Optimized Route Generated",
    color: "text-cyan-400",
  },

  {
    time: "11:44 AM",
    icon: Ambulance,
    title: "Emergency Unit Dispatched",
    color: "text-orange-400",
  },

  {
    time: "11:49 AM",
    icon: CheckCircle2,
    title: "Destination Reached",
    color: "text-green-400",
  },

];

function EmergencyTimeline() {

  return (

    <Card
      title="Emergency Timeline"
      subtitle="Incident lifecycle"
    >

      <div className="space-y-5">

        {

          timeline.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="flex gap-4"
              >

                <div className="flex flex-col items-center">

                  <div className="rounded-full bg-slate-800 p-2">

                    <Icon
                      size={18}
                      className={step.color}
                    />

                  </div>

                  {

                    index !== timeline.length - 1 &&

                    <div className="mt-2 h-10 w-[2px] bg-slate-700" />

                  }

                </div>

                <div>

                  <p className="text-xs text-slate-400">

                    {step.time}

                  </p>

                  <h4 className="font-semibold text-white">

                    {step.title}

                  </h4>

                </div>

              </div>

            );

          })

        }

      </div>

    </Card>

  );

}

export default EmergencyTimeline;