import { Sponsors } from "../../constants/sponsor.tsx";
import Text from "../ui/text";
import { date } from "../../constants/date";
import { format } from "date-fns";
import { cn } from "../../../helper/cn";

export const showSponsors = false;

export default function Footer() {
  return (
    <footer className="flex flex-col bg-surface backdrop-opacity-10 border-t border-border flex-wrap relative">
      <div className="flex flex-row items-center justify-between gap-12 w-full py-16 px-6 md:px-14 flex-wrap">
        <img src="/logo.png" alt="Encore Logo" className="w-32" />

        {showSponsors && (
          <div className="flex flex-col gap-3 md:items-center md:justify-center">
            <Text
              className="text-muted uppercase tracking-[0.2em] leading-none"
              as="span"
              size="xs"
            >
              Proudly supported by
            </Text>
            <section className="flex flex-row gap-2">
              {Sponsors.map((s) => (
                <div
                  key={s.type}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {s.sponsors.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="flex flex-row items-center justify-start md:justify-center gap-4"
                    >
                      <Text
                        className={cn(
                          "text-amber uppercase font-bebas tracking-[2px] leading-none",
                          {
                            "text-amber": s.type === "gold",
                            "text-silver": s.type === "silver",
                            "text-bronze": s.type === "bronze",
                          },
                        )}
                        as="span"
                        size="sm"
                      >
                        {sponsor.name}
                      </Text>
                      <Text className="text-slate-100" as="span" size="sm">
                        ·
                      </Text>
                    </div>
                  ))}
                </div>
              ))}
            </section>
          </div>
        )}

        <Text
          className="text-muted text-left md:text-right"
          as="span"
          size="xs"
        >
          {format(date.day, "dd MMMM yyyy")} &nbsp;·&nbsp;
          <span className="uppercase">{date.location}</span>
          <br />A night for Melbourne's music community
        </Text>
      </div>
    </footer>
  );
}
