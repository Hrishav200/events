import { SectionHeading } from "./lineup-section";
import Text from "../ui/text";
import { location } from "../../constants/location";
import { MoveUpRight, SquareParking } from "lucide-react";

export default function LocationSection() {
  return (
    <div
      id="location"
      className="flex flex-col gap-4 w-full scroll-mt-24 py-16 bg-surface"
    >
      <section className="py-7 md:px-14 px-6 flex flex-col gap-16">
        <SectionHeading label="Find us" title="The Location" />

        <div className="flex flex-col gap-8">
          <div className="bg-gradient-amber/50 border border-border rounded-sm p-4 w-fit">
            <Text
              as="p"
              size="3xl"
              className="text-offwhite font-bebas tracking-[3px]"
            >
              {location.venue}
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section className="flex flex-col gap-4">
              <Text as="p" size="3xl" className="text-offwhite font-bebas">
                {location.address.street},
              </Text>

              <Text as="p" size="3xl" className="text-offwhite font-bebas">
                {location.address.suburb}, {location.address.state}
                &nbsp;{location.address.postcode}
              </Text>

              <section className="flex flex-col gap-2">
                <Text as="p" size="base" className="text-muted">
                  {location.day}
                </Text>

                <Text as="p" size="base" className="text-muted">
                  Doors: {location.doors} &nbsp;·&nbsp; Finish:{" "}
                  {location.finish}
                </Text>
              </section>
              <Text as="p" size="sm" className="text-muted">
                {location.description}
              </Text>

              <section className="flex flex-col gap-4 border border-border rounded-sm p-6 bg-gradient-amber/20">
                <div className="text-muted flex flex-row gap-4 items-center mb-4">
                  <SquareParking className="size-4" />
                  <Text
                    as="p"
                    size="base"
                    className="text-muted uppercase tracking-[2px]"
                  >
                    {location.parking.description}
                  </Text>
                </div>

                <div className=" flex flex-col gap-4">
                  {location.parking.navigation.map((item) => (
                    <div
                      key={item.description}
                      className="flex flex-row gap-4 items-start"
                    >
                      <div
                        className={`size-2 rounded-full shrink-0 ${item.color}`}
                      />

                      <Text
                        key={item.description}
                        as="p"
                        size="sm"
                        className="text-muted -mt-1 whitespace-pre-line"
                      >
                        {parseBold(item.description)}
                      </Text>
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex w-fit border-b-2 border-border pb-1 mt-2">
                <a
                  href="https://maps.google.com/?q=151+Wheatsheaf+Rd,+Glenroy+VIC+3046"
                  target="_blank"
                  className="text-amber text-sm flex flex-row gap-2 items-center"
                >
                  <MoveUpRight className="size-4 animate-bounce" /> Open in
                  Google Maps
                </a>
              </div>
            </section>

            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  );
}

function LocationMap() {
  return (
    <div className="">
      <iframe
        src="https://maps.google.com/maps?q=151+Wheatsheaf+Rd,+Glenroy+VIC+3046&output=embed&z=15"
        allowFullScreen
        className="w-full h-3/4 rounded-sm"
        loading="lazy"
      ></iframe>
    </div>
  );
}

const parseBold = (text: string) =>
  text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-offwhite font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
