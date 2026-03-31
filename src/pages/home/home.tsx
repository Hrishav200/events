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
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative px-3 overflow-hidden  min-h-screen items-center justify-center flex flex-col -my-9">
      <AbsolutesSection />
      <div className="flex flex-col gap-10 z-10">
        <div className="flex flex-col gap-6 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Text
              as="p"
              size="sm"
              fontWeight="light"
              className="text-center text-teal uppercase md:tracking-[0.3em] leading-none"
            >
              Melbourne's Musical Gathering
            </Text>
          </motion.div>

          <section className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="font-bebas text-center text-[clamp(5rem,15vw,13rem)] leading-[0.9] tracking-[2px] bg-linear-to-br from-offwhite from-30% to-amber to-70% bg-clip-text text-transparent font-bold"
            >
              THE
              <br />
              ENCORE
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
                className="text-center text-base text-muted font-light animate-fade-up tracking-widest"
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
              container: "border-amber",
              text: "text-amber text-sm",
            }}
          />

          <Chip
            label="Live Bands"
            classNames={{
              container: "border-teal",
              text: "text-teal text-sm",
            }}
          />

          <Chip
            label="5 Acts"
            classNames={{
              container: "border-gray-500",
              text: "text-muted text-sm",
            }}
          />

          <Chip
            label="Melbourne Musicians"
            classNames={{
              container: "border-hot",
              text: "text-hot text-sm",
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
        className="text-center text-muted uppercase tracking-[0.3em] leading-none"
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

function AbsolutesSection() {
  return (
    <div className="absolute rounded-full blur-3xl w-full h-full">
      <div className="absolute rounded-full pointer-events-none w-[500px] h-[500px] -top-[100px] -left-[100px] bg-gradient-amber blur-[100px] animate-drift-amber" />
      <div className="absolute rounded-full pointer-events-none w-[400px] h-[400px] bottom-0 -right-[50px] bg-gradient-hot blur-[100px] animate-drift-hot" />
      <div className="absolute rounded-full pointer-events-none w-[300px] h-[300px] top-[40%] left-[40%] bg-gradient-teal blur-[100px] animate-drift-teal" />
    </div>
  );
}
