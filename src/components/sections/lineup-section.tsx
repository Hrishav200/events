import Text from "../ui/text";
import { bands } from "../../constants/band";
import LineupCard from "../ui/lineup-card";

export default function LineupSection() {
  return (
    <div
      id="lineup"
      className="flex flex-col gap-4  w-full bg-surface py-16 border-t border-border scroll-mt-16"
    >
      <section className="py-7 md:px-14 px-6 flex flex-col gap-16">
        <SectionHeading label="Who's Playing" title="The Lineup" />

        <div className="grid grid-cols-1 md:grid-cols-5 border-2 border-border bg-surface">
          {bands.map((band, index) => (
            <LineupCard key={band.name} band={band} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Text as="p" size="xs" className="tracking-[5px] uppercase text-amber">
        {label}
      </Text>
      <h2 className="font-bebas font-bold text-7xl leading-[0.9] text-offwhite">
        {title}
      </h2>
    </div>
  );
}
