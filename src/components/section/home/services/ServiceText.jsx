import {caveat} from "@/fonts/index";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ArrowCall from "@/components/ui/ArrowCall";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServiceText() {
  return (
    <div className="flex flex-col gap-7 max-w-full justify-center text-center items-center xl:items-start xl:text-left xl:max-w-md">
      <Badge>
        What we do
      </Badge>

      <h1 className="text-(--text-primary) text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
        Services built <br /> to drive impact
      </h1>
    <div className="relative flex items-start gap-3">

  <Button>Discuss your idea</Button>

  {/* Arrow + Text */}
  <ArrowCall className="hidden md:flex  mt-5" flip/>

</div>
     
    </div>
  );
}