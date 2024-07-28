import { Plus } from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";
import ImportantLinks from "./importants-links";
import Guests from "./guests";
import Activities from "./activities";
import DestinationAndDateHeader from "./destination-and-date-header";

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
      <DestinationAndDateHeader />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg text-lime-950 bg-lime-300 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividades
            </button>
          </div>
          {/* Atividades */}
          <Activities />
        </div>

        <div className="max-w-80 space-y-6">
          {/* Links Importantes */}
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />

          {/* Convidados */}
          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
};

export default TripDetailsPage;
