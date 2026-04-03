import Text from "./text";
import { cn } from "../../../helper/cn";

interface ChipProps {
  label: string;
  classNames: {
    container: string;
    text: string;
  };
}

export default function Chip({ label, classNames }: ChipProps) {
  return (
    <div
      className={cn(
        "flex flex-row gap-2 px-3 py-0.5 rounded-full items-center justify-center border",
        classNames.container,
      )}
    >
      <Text as="span" size="sm" fontWeight="light" className={classNames.text}>
        {label}
      </Text>
    </div>
  );
}
