import { SectionHeading } from "./lineup-section";
import Text from "../ui/text";
import { cn } from "../../../helper/cn";
import { Sponsors, sponsorTiers } from "../../constants/sponsor";
import { ArrowRight, Check } from "lucide-react";
import Button from "../ui/button";

export default function SponsorSection() {
  return (
    <div id="sponsors" className="flex flex-col gap-4 w-full scroll-mt-24">
      <section className="py-7 md:px-14 px-6 flex flex-col gap-16">
        <SectionHeading label="Made Possible By" title="Sponsor The Encore" />

        <SponsorTiers />
        <GetInTouch />
        <SponsorsList />
      </section>
    </div>
  );
}

function SponsorTiers() {
  return (
    <div className="border border-border grid md:grid-cols-3 grid-cols-1">
      {sponsorTiers.map((tier, index) => (
        <div
          key={tier.name}
          className={cn(
            `flex flex-col border-r border-b md:border-b-0 bg-linear-to-b from-${tier.color}/10 to-transparent border-border p-6 transition-colors duration-200 px-8 gap-4`,
            index === sponsorTiers.length - 1 && "border-r-0 border-b-0",
          )}
        >
          <div className="flex flex-col gap-2">
            <div
              className={cn(
                "flex flex-row gap-2 items-center border-[0.5px] w-fit p-1 px-4 mb-2 ",
                `bg-${tier.color}/10 border-${tier.color}`,
              )}
            >
              <Text
                as="p"
                size="base"
                className={cn(
                  "tracking-[3px] font-bebas uppercase",
                  `text-${tier.color}`,
                )}
              >
                {tier.name}
              </Text>
            </div>

            <Text
              as="p"
              size="5xl"
              className={cn("text-white font-bebas", `text-${tier.color}`)}
            >
              {tier.price}
            </Text>

            <Text
              as="p"
              size="3xl"
              className={cn(
                "text-muted uppercase font-bebas",
                `text-${tier.color}`,
              )}
            >
              {tier.description}
            </Text>
          </div>

          <div className="col-span-3">
            <ul className="flex flex-col gap-2 text-muted">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex flex-row gap-4 items-center ">
                  <div className="size-2 rounded-full shrink-0">
                    <Check className={cn("size-4", `text-${tier.color}`)} />
                  </div>

                  <Text as="span" size="xs" className="text-muted">
                    {perk}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-16 border border-border rounded-sm bg-secondary-bg">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Text
          as="p"
          size="4xl"
          className="text-offwhite font-bebas uppercase tracking-[2px] text-center"
        >
          Interested in Sponsoring?
        </Text>

        <Text
          as="p"
          size="base"
          className="text-muted text-center max-w-xl mx-auto w-full "
        >
          The Encore brings together Melbourne's most passionate musicians and
          music lovers in one electric night. Get your brand in front of a
          highly engaged, creative community.
        </Text>
      </div>

      <Button
        as="a"
        href="#lineup"
        className="uppercase tracking-widest text-sm px-12"
        label="Get In Touch"
        variant="outline"
        color="amber"
        size="lg"
        endContent={<ArrowRight className="size-4" />}
      />
    </div>
  );
}

interface TypedSponsor {
  type: "gold" | "silver" | "bronze";
  name: string;
  slogan: string;
  logo: React.ReactNode;
}

function SponsorsList() {
  const typedSponsors: TypedSponsor[] = Sponsors.reduce((acc, cv) => {
    const { type, sponsors } = cv;

    sponsors.forEach((sponsor) => {
      acc.push({
        type: type as "gold" | "silver" | "bronze",
        ...sponsor,
      });
    });

    return acc;
  }, [] as TypedSponsor[]);

  const sponsorColors = {
    gold: "amber",
    silver: "silver",
    bronze: "bronze",
  } as const;

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Text
        as="p"
        size="sm"
        className="text-muted uppercase tracking-[1px] text-center"
      >
        Our Sponsors
      </Text>

      <section className="flex flex-col gap-8 border border-border rounded-sm bg-secondary-bg w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {typedSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex relative flex-col gap-8 items-center justify-center md:border-r border-b last:border-b-0 md:last:border-r-0 md:border-b-0 border-border p-8"
            >
              <section
                className={cn(
                  "flex flex-row gap-2 items-center border-[0.5px] w-fit p-1 px-4 mb-2 absolute top-4 right-4",
                  `bg-${sponsorColors[sponsor.type]}/10 border-border`,
                )}
              >
                <Text
                  as="p"
                  size="xs"
                  className={cn(
                    "uppercase",
                    `text-${sponsorColors[sponsor.type]}`,
                  )}
                >
                  {sponsor.type}
                </Text>
              </section>

              <div className="flex flex-col gap-4 items-center justify-start mt-8">
                {sponsor.logo}

                <Text
                  as="p"
                  size="2xl"
                  className="text-amber font-bebas uppercase tracking-[2px] text-center"
                >
                  {sponsor.name}
                </Text>

                <Text
                  as="p"
                  size="xs"
                  className="text-muted tracking-[1px] text-center"
                >
                  {sponsor.slogan}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
