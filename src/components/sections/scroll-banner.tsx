import { motion } from "framer-motion";
import Text from "../ui/text";

export default function ScrollBanner() {
  return (
    <div className="bg-amber overflow-hidden py-[10px] whitespace-nowrap mt-24">
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        <Text
          as="span"
          className="font-bebas tracking-[4px] text-surface text-nowrap overflow-hidden"
          size="2xl"
        >
          THE ENCORE &nbsp;·&nbsp; 25 APRIL &nbsp;·&nbsp; GLENROY VIC
          &nbsp;·&nbsp; AQUAPUNCTURE &nbsp;·&nbsp; THE THIRD EYE &nbsp;·&nbsp;
          KHATRA &nbsp;·&nbsp; TALAMUNI &nbsp;·&nbsp; SOLO PERFORMANCES
          &nbsp;·&nbsp; THE ENCORE &nbsp;·&nbsp; 25 APRIL &nbsp;·&nbsp; GLENROY
          VIC &nbsp;·&nbsp; AQUAPUNCTURE &nbsp;·&nbsp; THE THIRD EYE
          &nbsp;·&nbsp; KHATRA &nbsp;·&nbsp; TALAMUNI &nbsp;·&nbsp; SOLO
          PERFORMANCES &nbsp;·&nbsp;
        </Text>
      </motion.div>
    </div>
  );
}
