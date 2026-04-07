import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import type { Band } from "../../constants/artists";
import { cn } from "../../../helper/cn";

interface ModalProps {
  band: Band;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ModalView({ isOpen, onOpenChange, band }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent className="bg-card">
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-gradient-amber text-offwhite">
              Set List
            </ModalHeader>
            <ModalBody>
              {band.playlist.map((song, index) => (
                <div
                  className={cn(
                    "flex flex-row items-center justify-between py-2 border-b border-border",
                    {
                      "border-b-0": index === band.playlist.length - 1,
                    },
                  )}
                  key={index}
                >
                  <p className={cn("text-white")}>
                    {index + 1}. {song.name}
                  </p>

                  <p className="text-amber">{song.dur}</p>
                </div>
              ))}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
