import { schedule } from "../../constants/band";
import { SectionHeading } from "./lineup-section";
import Text from "../ui/text";
import { cn } from "../../../helper/cn";

export default function ScheduleSection() {
  return (
    <div id="schedule" className="flex flex-col gap-4 w-full scroll-mt-24">
      <section className="py-7 md:px-14 px-6 flex flex-col gap-16">
        <SectionHeading label="When They Hit The Stage" title="Set Schedule" />

        <ScheduleTable />
      </section>
    </div>
  );
}

function ScheduleTable() {
  return (
    <div className="border border-border">
      {schedule.map((event, index) => (
        <div
          key={event.event}
          className={cn(
            "grid grid-cols-5 border-b border-border p-6 transition-colors duration-200 px-8 items-center bg-linear-to-l from-bg  via-surface/90 to-bg/90",
            index === schedule.length - 1 && "border-b-0",
          )}
        >
          <div className="col-span-2 md:col-span-1 items-center justify-center">
            <Text
              as="p"
              size="2xl"
              fontWeight="bold"
              className="tracking-[3px] font-bebas uppercase text-amber"
            >
              {event.time}
            </Text>
          </div>

          <div className="col-span-3 md:col-span-2">
            <Text as="p" size="base" className="text-white">
              {event.event}
            </Text>
          </div>

          <div className="col-span-2 justify-end hidden md:flex">
            <div className="flex border border-border rounded-full items-center justify-center w-fit px-3 py-1">
              <Text as="p" size="xs" className="text-muted uppercase">
                {event.label}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
