import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Text from "../../components/ui/text";
import { motion } from "framer-motion";
import Chip from "../../components/ui/chip";
import Button from "../../components/ui/button";
import { date } from "../../constants/date";
import { useCountdown } from "../../hooks/useCountdown";
import Timer, { TimerSeparator } from "../../components/ui/timer";
import NoiseOverlay from "../../components/layout/noise-overlay";
import LineupSection from "../../components/sections/lineup-section";
import ScheduleSection from "../../components/sections/schedule-section";
import LocationSection from "../../components/sections/location-section";
import SponsorSection from "../../components/sections/sponsor-section";
import ShareSection from "../../components/sections/share-section";
import ScrollBanner from "../../components/sections/scroll-banner";

export default function Home() {
  return (
    <div className="flex flex-col bg-bg relative">
      <NoiseOverlay />

      <Header />
      <div className="flex flex-col">
        <section>
          <HeroSection />
          <ScrollBanner />
          <ShareSection />
        </section>
        <section className="flex flex-col gap-16 pb-16">
          <LineupSection />
          <ScheduleSection />
          <LocationSection />
          <SponsorSection />
        </section>

        <div
          className="flex relative flex-col gap-16 h-150 md:bg-fixed bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/footer.png)",
          }}
        >
          <div className="flex flex-1 bg-black/35 inset-0" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative px-3 overflow-hidden min-h-screen items-center justify-center flex flex-col -my-24">
      <AbsoluteSection />

      <div className="flex flex-col gap-10 z-10">
        <div className="flex flex-col gap-6 items-center justify-center">
          <section className="flex flex-col w-full items-center justify-center overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="relative w-full h-full">
                <img src="/en-logo.png" className="object-contain" />
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Text
                as="p"
                size="lg"
                fontWeight="light"
                className="text-center text-base text-white font-light animate-fade-up tracking-widest"
              >
                <strong className="text-white">{date.day}</strong> &nbsp;·&nbsp;{" "}
                {date.time} &nbsp;·&nbsp; {date.location}
              </Text>
            </motion.div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-row gap-6 flex-wrap justify-center"
        >
          <Chip
            label="Multi-Genre"
            classNames={{
              container: "border-amber bg-amber/20",
              text: "text-offwhite text-sm",
            }}
          />

          <Chip
            label="Live Bands"
            classNames={{
              container: "border-teal bg-teal/20",
              text: "text-offwhite text-sm",
            }}
          />

          <Chip
            label="7 Acts"
            classNames={{
              container: "border-gray-500 bg-gray-500/80",
              text: "text-offwhite text-sm",
            }}
          />

          <Chip
            label="Melbourne Musicians"
            classNames={{
              container: "border-hot bg-hot/80",
              text: "text-offwhite text-sm",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-row gap-6 flex-wrap justify-center"
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          <Button
            as="a"
            href="#lineup"
            className="uppercase tracking-widest text-sm px-12"
            label="Explore The Lineup"
            variant="solid"
            color="amber"
            size="lg"
          />
        </motion.div>

        <TimerSection />
      </div>
    </div>
  );
}

function TimerSection() {
  const countdown = useCountdown();

  return (
    <div className="flex flex-col gap-4 items-center justify-center z-10 flex-wrap">
      <Text
        as="p"
        size="xs"
        fontWeight="light"
        className="text-center text-offwhite uppercase tracking-[0.3em] leading-none"
      >
        Event Starts In
      </Text>

      <div className="flex flex-row gap-2 md:gap-5 flex-wrap justify-center items-center">
        <Timer remaining={countdown.days} unit="days" />
        <TimerSeparator />
        <Timer remaining={countdown.hours} unit="hours" />
        <TimerSeparator />
        <Timer remaining={countdown.minutes} unit="mins" />
        <TimerSeparator />
        <Timer remaining={countdown.seconds} unit="secs" />
      </div>
    </div>
  );
}

function AbsoluteSection() {
  return (
    <div
      className="absolute w-full h-full bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{
        backgroundImage: `url(/flyer.png)`,
      }}
    >
      <div className="flex flex-col w-full h-full relative">
        <div className="flex flex-1 bg-black/75 md:blur-sm inset-0" />
      </div>
    </div>
  );
}
