import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import Button from "../button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

const DestinationAndDateStep = ({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) => {
  return (
    <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
      <div className="flex items-center flex-1 gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="w-full text-lg bg-transparent outline-none placeholder:text-zinc-400"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          className="w-40 text-lg bg-transparent outline-none placeholder:text-zinc-400"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button variant="primary" onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
};

export default DestinationAndDateStep;
