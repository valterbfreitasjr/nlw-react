import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Clock,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const openCreateActivityModal = () => {
    setIsCreateActivityModalOpen(true);
  };

  const closeCreateActivityModal = () => {
    setIsCreateActivityModalOpen(false);
  };

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="flex items-center justify-between h-16 px-4 rounded-xl bg-zinc-900 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-zinc-200 bg-zinc-800 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">8:00h</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">8:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-80 space-y-6">
          {/* Links Importantes */}
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

          <div className="w-full h-px bg-zinc-800" />

          {/* Convidados */}
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
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            {/* text */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button onClick={closeCreateActivityModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Todos convidados podem visualizar as atividades.
              </p>
            </div>

            {/* email input */}
            <form className="space-y-3">
              <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
                <Tag className="text-zinc-400 size-5" />
                <input
                  type="text"
                  name="title"
                  placeholder="Qual a ativdade"
                  className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
                  <Calendar className="text-zinc-400 size-5" />
                  <input
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Data e Horário"
                    className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <button
                className="flex items-center justify-center w-full gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
                type="submit"
              >
                Salvar ativdade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripDetailsPage;
