import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

const Guests = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-betweeen gap-4">
          <div className="space-y-1.5">
            <span className="flex text-zinc-100 font-medium">
              Valter B. Freitas Jr
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              valterjr@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0 ml-auto" />
        </div>
        <div className="flex items-center justify-betweeen gap-4">
          <div className="space-y-1.5">
            <span className="flex text-zinc-100 font-medium">
              Naruto Uzumaki
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              naruto_uzumaki@gmail.com
            </span>
          </div>
          <CircleCheck className="text-lime-300 size-5 shrink-0 ml-auto" />
        </div>
      </div>
      <div className="flex items-center justify-betweeen gap-4">
        <div className="space-y-1.5">
          <span className="flex text-zinc-100 font-medium">Mashle</span>
          <span className="block text-sm text-zinc-400 truncate">
            mashel@gmail.com
          </span>
        </div>
        <CircleCheck className="text-lime-300 size-5 shrink-0 ml-auto" />
      </div>
      <button className="flex items-center w-full gap-2 h-11 justify-center py-2 font-medium rounded-lg text-zinc-200 bg-zinc-800 hover:bg-zinc-700">
        <UserCog className="size-5" /> Gerenciar convidados
      </button>
    </div>
  );
};

export default Guests;
