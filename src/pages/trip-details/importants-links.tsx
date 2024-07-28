import { Link2, Plus } from "lucide-react";

const ImportantLinks = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-betweeen gap-4">
          <div className="space-y-1.5">
            <span className="flex text-zinc-100 font-medium">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              http://www.airbnb.com.br/rooms/101520313214123412
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-betweeen gap-4">
          <div className="space-y-1.5">
            <span className="flex text-zinc-100 font-medium">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              http://www.airbnb.com.br/rooms/101520313214123412
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <button className="flex items-center w-full gap-2 h-11 justify-center py-2 font-medium rounded-lg text-zinc-200 bg-zinc-800 hover:bg-zinc-700">
        <Plus className="size-5" /> Cadastrar novo link
      </button>
    </div>
  );
};

export default ImportantLinks;
