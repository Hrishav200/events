import { motion } from "framer-motion";
import Text from "./text";
import { CirclePlay } from "lucide-react";
import type { Band } from "../../constants/band";

export default function LineupCard({
  band,
  index,
}: {
  band: Band;
  index: number;
}) {
  return (
    <motion.div
      className="p-8 flex flex-col gap-3 pb-16 border-b-2 md:border-r-2 md:border-b-0 border-border bg-card last:border-r-0 hover:bg-card-highlight transition-colors duration-200 cursor-pointer relative"
      whileHover="hovered"
      whileTap="tapped"
      initial="rest"
      animate="rest"
    >
      <motion.span
        className="absolute bottom-0 -left-1 w-[3px] h-full bg-linear-to-t from-amber to-amber/25 hidden md:block"
        variants={{
          rest: { scaleY: 0, transformOrigin: "bottom" },
          hovered: { scaleY: 1, transformOrigin: "bottom" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-amber to-transparent md:hidden"
        style={{ originX: 0 }}
        variants={{ rest: { scaleX: 0 }, tapped: { scaleX: 1 } }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <Text
        as="p"
        size="5xl"
        fontWeight="bold"
        className="text-amber/15 leading-none mb-2 font-bebas"
      >
        0{index + 1}
      </Text>

      <Text
        as="p"
        size="3xl"
        fontWeight="bold"
        className="font-bebas tracking-widest text-offwhite leading-none"
      >
        {band.name}
      </Text>

      <Text
        as="p"
        size="xs"
        fontWeight="regular"
        className="text-muted uppercase tracking-widest leading-none line-clamp-3"
      >
        {band.genre}
      </Text>

      <motion.div
        className="flex pt-6 items-center gap-2"
        variants={{
          rest: { y: 60, opacity: 0 },
          hovered: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <CirclePlay className="w-4 h-4 text-amber" />
        <Text as="p" size="xs" className="text-amber uppercase tracking-widest">
          View Setlist
        </Text>
      </motion.div>
    </motion.div>
  );
}
