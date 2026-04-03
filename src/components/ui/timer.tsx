import Text from "./text";

interface TimerProps {
  remaining: string;
  unit: string;
}

export default function Timer({ remaining, unit }: TimerProps) {
  return (
    <div className="flex flex-row gap-2 flex-wrap justify-center">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-center bg-gradient-amber rounded-sm border border-gradient-amber w-16 h-16 p-4">
          <Text
            as="span"
            size="5xl"
            fontWeight="medium"
            className="text-center font-bebas text-shadow-sm text-amber uppercase"
          >
            {remaining}
          </Text>
        </div>
        <Text
          as="span"
          size="xs"
          fontWeight="light"
          className="text-center text-muted uppercase"
        >
          {unit}
        </Text>
      </div>
    </div>
  );
}

export function TimerSeparator() {
  return (
    <Text
      as="span"
      size="5xl"
      fontWeight="light"
      className="text-muted uppercase tracking-widest mb-5"
    >
      :
    </Text>
  );
}
