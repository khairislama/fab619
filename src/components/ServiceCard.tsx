import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";

function ServiceCard() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-3 text-center group hover:shadow-xl rounded-2xl p-4">
      <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center my-4 group-hover:bg-blue-700 transition-colors duration-300 ease-in-out">
        <Lightbulb className="h-6 w-6 text-blue-700 group-hover:text-white transition-colors duration-300 ease-in-out" />
      </div>
      <h3 className="font-semibold text-lg cursor-default">
        User Experience Design
      </h3>
      <p className="text-sm cursor-default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis
        nihil natus impedit corrupti porro eum voluptas magnam, ratione aperiam
        neque eaque consectetur.
      </p>
      <Button
        variant="link"
        className="text-blue-700 font-semibold hover:underline"
      >
        Learn More <ArrowRight className="h-6 w-6" />{" "}
      </Button>
    </div>
  );
}

export default ServiceCard;
