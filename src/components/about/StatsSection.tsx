import { Users, Award, Briefcase, Calendar } from "lucide-react";
import { StatCounter } from "./StatCounter";

export function StatsSection() {
  return (
    <div className="mt-16 md:mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <StatCounter
          icon={<Calendar className="h-6 w-6" />}
          value={4}
          label="Years of Experience"
          delay={0.1}
        />
        <StatCounter
          icon={<Users className="h-6 w-6" />}
          value={8}
          label="Brilliant Specialists"
          delay={0.3}
        />
        <StatCounter
          icon={<Briefcase className="h-6 w-6" />}
          value={100}
          label="Projects"
          delay={0.5}
        />
        <StatCounter
          icon={<Award className="h-6 w-6" />}
          value={5}
          label="Industry Awards"
          delay={0.7}
        />
      </div>
    </div>
  );
}
